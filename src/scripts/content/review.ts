import { getManifest } from '../../lib/content-engine/manifest';
import { StatusStore } from '../../lib/content-engine/store';

async function run() {
  const store = new StatusStore();
  const manifest = getManifest();

  console.log("Human Review Queue");
  console.log("────────────────────\n");

  let reviewCount = 0;

  for (const [subjectId, subject] of Object.entries(manifest.subjects)) {
    if (!subject.verified) continue;
    
    for (const chapter of subject.chapters) {
      if (!chapter.verified) continue;

      const sections = ['notes', 'formulas', 'derivations', 'numericals', 'questions', 'diagrams', 'mindmap', 'revisions'];

      for (const section of sections) {
        const status = store.getSectionStatus(subjectId, chapter.id, section);
        if (status.status === 'human_review_required') {
          reviewCount++;
          console.log(`[!] ${subjectId} / ${chapter.id} / ${section}`);
          console.log(`    Attempts: ${status.attempt}`);
          console.log(`    Last Issues: ${status.issues?.join(' | ') || 'None recorded'}`);
          console.log();
        }
      }
    }
  }

  if (reviewCount === 0) {
    console.log("🎉 The review queue is empty!");
  } else {
    console.log(`Total sections requiring review: ${reviewCount}`);
  }
}

run().catch(console.error);
