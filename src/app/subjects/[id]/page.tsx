import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { syllabusData } from '@/data/syllabus';
import SubjectClient from '@/components/SubjectClient';

export default async function SubjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const subjectId = params.id;
  const subject = syllabusData[subjectId];

  if (!subject) {
    notFound();
  }

  // Load chapter data dynamically from the file system
  const allNotes: Record<string, any[]> = {};
  const allQuestions: Record<string, any[]> = {};
  const allFormulas: Record<string, any[]> = {};
  const allRevisions: Record<string, any[]> = {};
  const allDerivations: Record<string, any[]> = {};
  const allNumericals: Record<string, any[]> = {};
  const allDiagrams: Record<string, any[]> = {};
  const allMindMaps: Record<string, any> = {};

  const contentDir = path.join(process.cwd(), 'src/content', subjectId, 'chapters');

  if (fs.existsSync(contentDir)) {
    const chapterFolders = fs.readdirSync(contentDir);

    for (const folder of chapterFolders) {
      const chapterKey = `${subjectId}_${folder}`;
      const chapterPath = path.join(contentDir, folder);
      
      const notesPath = path.join(chapterPath, 'notes.json');
      if (fs.existsSync(notesPath)) {
        allNotes[chapterKey] = JSON.parse(fs.readFileSync(notesPath, 'utf-8'));
      }

      const questionsPath = path.join(chapterPath, 'questions.json');
      if (fs.existsSync(questionsPath)) {
        allQuestions[chapterKey] = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
      }

      const formulasPath = path.join(chapterPath, 'formulas.json');
      if (fs.existsSync(formulasPath)) {
        allFormulas[chapterKey] = JSON.parse(fs.readFileSync(formulasPath, 'utf-8'));
      }

      const revisionsPath = path.join(chapterPath, 'revisions.json');
      if (fs.existsSync(revisionsPath)) {
        allRevisions[chapterKey] = JSON.parse(fs.readFileSync(revisionsPath, 'utf-8'));
      }

      const derivationsPath = path.join(chapterPath, 'derivations.json');
      if (fs.existsSync(derivationsPath)) {
        allDerivations[chapterKey] = JSON.parse(fs.readFileSync(derivationsPath, 'utf-8'));
      }

      const numericalsPath = path.join(chapterPath, 'numericals.json');
      if (fs.existsSync(numericalsPath)) {
        allNumericals[chapterKey] = JSON.parse(fs.readFileSync(numericalsPath, 'utf-8'));
      }

      const diagramsPath = path.join(chapterPath, 'diagrams.json');
      if (fs.existsSync(diagramsPath)) {
        allDiagrams[chapterKey] = JSON.parse(fs.readFileSync(diagramsPath, 'utf-8'));
      }

      const mindmapPath = path.join(chapterPath, 'mindmap.json');
      if (fs.existsSync(mindmapPath)) {
        allMindMaps[chapterKey] = JSON.parse(fs.readFileSync(mindmapPath, 'utf-8'));
      }
    }
  }

  return (
    <SubjectClient 
      subjectId={subjectId} 
      subject={subject} 
      allNotes={allNotes} 
      allQuestions={allQuestions} 
      allFormulas={allFormulas} 
      allRevisions={allRevisions} 
      allDerivations={allDerivations}
      allNumericals={allNumericals}
      allDiagrams={allDiagrams}
      allMindMaps={allMindMaps}
    />
  );
}
