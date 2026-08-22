import { getManifest } from '../../lib/content-engine/manifest';
import { StatusStore } from '../../lib/content-engine/store';

async function run() {
  const store = new StatusStore();
  const manifest = getManifest();

  console.log("UP Board 2026-27");
  console.log("────────────────────\n");

  let totalVerified = 0;
  let totalApproved = 0;
  let totalPending = 0;
  let totalReview = 0;

  for (const [subjectId, subject] of Object.entries(manifest.subjects)) {
    if (!subject.verified) continue;
    console.log(`${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}`);
    
    for (const chapter of subject.chapters) {
      if (!chapter.verified) continue;
      totalVerified++;

      const sections = ['notes', 'formulas', 'derivations', 'numericals', 'questions', 'diagrams', 'mindmap', 'revisions'];
      let approvedCount = 0;
      let reviewCount = 0;

      for (const section of sections) {
        const status = store.getSectionStatus(subjectId, chapter.id, section);
        if (status.status === 'approved' || status.status === 'published') approvedCount++;
        else if (status.status === 'human_review_required') reviewCount++;
      }

      totalApproved += approvedCount;
      totalReview += reviewCount;
      totalPending += (sections.length - approvedCount - reviewCount);

      if (approvedCount === sections.length) {
        console.log(`  ${chapter.id} ✓ Approved`);
      } else if (reviewCount > 0) {
        console.log(`  ${chapter.id} ! Review Required`);
      } else {
        console.log(`  ${chapter.id} → Ready (${approvedCount}/${sections.length})`);
      }
    }
    console.log();
  }

  console.log("Total:");
  console.log(`Verified Chapters: ${totalVerified}`);
  console.log(`Approved Sections: ${totalApproved}`);
  console.log(`Pending Sections: ${totalPending}`);
  console.log(`Human Review: ${totalReview}`);
}

run().catch(console.error);
