import { getManifest } from '../../lib/content-engine/manifest';
import { StatusStore } from '../../lib/content-engine/store';

async function run() {
  const store = new StatusStore();
  const manifest = getManifest();

  console.log("Content Generation Report");
  console.log("─────────────────────────\n");

  let totalChapters = 0;
  let totalSections = 0;
  let totalApproved = 0;
  let totalReview = 0;
  let totalFailed = 0;
  let totalPending = 0;

  for (const [subjectId, subject] of Object.entries(manifest.subjects)) {
    if (!subject.verified) continue;
    
    let subChapters = 0;
    let subSections = 0;
    let subApproved = 0;
    let subReview = 0;

    for (const chapter of subject.chapters) {
      if (!chapter.verified) continue;
      subChapters++;
      totalChapters++;

      const sections = ['notes', 'formulas', 'derivations', 'numericals', 'questions', 'diagrams', 'mindmap', 'revisions'];
      subSections += sections.length;
      totalSections += sections.length;

      for (const section of sections) {
        const status = store.getSectionStatus(subjectId, chapter.id, section);
        if (status.status === 'approved' || status.status === 'published') {
          subApproved++;
          totalApproved++;
        } else if (status.status === 'human_review_required') {
          subReview++;
          totalReview++;
        } else if (status.status === 'failed') {
          totalFailed++;
        } else {
          totalPending++;
        }
      }
    }

    console.log(`${subjectId.toUpperCase()}`);
    console.log(`  Chapters: ${subChapters}`);
    console.log(`  Sections: ${subSections}`);
    console.log(`  Approved: ${subApproved}`);
    console.log(`  Review:   ${subReview}`);
    console.log();
  }

  console.log("─────────────────────────");
  console.log(`TOTAL CHAPTERS: ${totalChapters}`);
  console.log(`TOTAL SECTIONS: ${totalSections}`);
  console.log(`APPROVED:       ${totalApproved}`);
  console.log(`PENDING:        ${totalPending}`);
  console.log(`REVIEW REQ:     ${totalReview}`);
  console.log(`FAILED:         ${totalFailed}`);
}

run().catch(console.error);
