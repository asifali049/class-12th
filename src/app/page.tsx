import fs from 'fs';
import path from 'path';
import DashboardClient, { SubjectStats } from '@/components/DashboardClient';

export default function Home() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const subjects: SubjectStats[] = [];

  // Subject display settings mapping
  const subjectDisplaySettings: Record<string, any> = {
    physics: { color: "bg-blue-50 text-blue-600 border-blue-200" },
    chemistry: { color: "bg-orange-50 text-orange-600 border-orange-200" },
    biology: { color: "bg-green-50 text-green-600 border-green-200" },
    hindi: { color: "bg-red-50 text-red-600 border-red-200" },
    english: { color: "bg-purple-50 text-purple-600 border-purple-200" }
  };

  if (fs.existsSync(contentDir)) {
    const subjectFolders = fs.readdirSync(contentDir);

    for (const folder of subjectFolders) {
      const subjectPath = path.join(contentDir, folder);
      const syllabusPath = path.join(subjectPath, 'syllabus.json');
      const chaptersPath = path.join(subjectPath, 'chapters');

      if (fs.existsSync(syllabusPath)) {
        const syllabusData = JSON.parse(fs.readFileSync(syllabusPath, 'utf-8'));
        
        let publishedChaptersCount = 0;
        let publishedQuestionsCount = 0;
        let publishedRevisionsCount = 0;
        
        // Count how many chapters have actual content
        if (fs.existsSync(chaptersPath)) {
          const chapters = fs.readdirSync(chaptersPath);
          for (const ch of chapters) {
            const chPath = path.join(chaptersPath, ch);
            const notesPath = path.join(chPath, 'notes.json');
            const questionsPath = path.join(chPath, 'questions.json');
            const revisionsPath = path.join(chPath, 'revisions.json');
            
            if (fs.existsSync(notesPath)) {
              const notesData = JSON.parse(fs.readFileSync(notesPath, 'utf-8'));
              // We require questions to consider a chapter fully published
              if (fs.existsSync(questionsPath)) {
                const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
                if (Array.isArray(notesData) && notesData.length > 0 && Array.isArray(questionsData) && questionsData.length > 0) {
                  publishedChaptersCount++;
                }
              }
            }

            if (fs.existsSync(questionsPath)) {
              const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
              if (Array.isArray(questionsData) && questionsData.length > 0) {
                publishedQuestionsCount++;
              }
            }

            if (fs.existsSync(revisionsPath)) {
              const revisionsData = JSON.parse(fs.readFileSync(revisionsPath, 'utf-8'));
              if (Array.isArray(revisionsData) && revisionsData.length > 0) {
                publishedRevisionsCount++;
              }
            }
          }
        }

        const settings = subjectDisplaySettings[folder] || { color: "bg-slate-50 text-slate-600 border-slate-200" };

        subjects.push({
          id: syllabusData.id,
          name: syllabusData.name,
          lang: syllabusData.language,
          totalChapters: syllabusData.chapters?.length || 0,
          publishedChapters: publishedChaptersCount,
          publishedQuestions: publishedQuestionsCount,
          publishedRevisions: publishedRevisionsCount,
          studentProgress: 0, // Mocked progress for now
          color: settings.color
        });
      }
    }
  }

  // Sort subjects by predefined order to maintain UI consistency
  const order = ['physics', 'chemistry', 'biology', 'hindi', 'english'];
  subjects.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

  return <DashboardClient subjects={subjects} />;
}
