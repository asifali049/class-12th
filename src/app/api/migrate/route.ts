import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import { syllabusData } from '@/data/syllabus';

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), 'src/content');
    
    if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir);

    for (const [subjectKey, data] of Object.entries(syllabusData)) {
      const subjectDir = path.join(contentDir, subjectKey);
      if (!fs.existsSync(subjectDir)) fs.mkdirSync(subjectDir);
      
      const chaptersDir = path.join(subjectDir, 'chapters');
      if (!fs.existsSync(chaptersDir)) fs.mkdirSync(chaptersDir);

      fs.writeFileSync(path.join(subjectDir, 'syllabus.json'), JSON.stringify(data, null, 2));
      
      // Create empty chapters folders based on syllabus
      for (const chapter of data.chapters) {
        const chDir = path.join(chaptersDir, chapter.id);
        if (!fs.existsSync(chDir)) fs.mkdirSync(chDir);
      }
    }

    return NextResponse.json({ success: true, message: "Syllabus migration complete" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
