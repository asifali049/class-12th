import { Command } from 'commander';
import { getManifest } from '../../lib/content-engine/manifest';
import { StatusStore } from '../../lib/content-engine/store';
import { Engine } from '../../lib/content-engine/Engine';
import { GeminiProvider } from '../../lib/content-engine/providers/GeminiProvider';
import { PhysicsGenerator } from '../../lib/content-engine/generators/PhysicsGenerator';
import { ChemistryGenerator } from '../../lib/content-engine/generators/ChemistryGenerator';
import { BiologyGenerator } from '../../lib/content-engine/generators/BiologyGenerator';
import { EnglishGenerator } from '../../lib/content-engine/generators/EnglishGenerator';
import { HindiGenerator } from '../../lib/content-engine/generators/HindiGenerator';

const program = new Command();
program
  .option('--subject <type>', 'Subject ID')
  .option('--chapter <type>', 'Chapter ID')
  .option('--section <type>', 'Section Name')
  .option('--resume', 'Resume from last checkpoint');

program.parse(process.argv);
const options = program.opts();

async function run() {
  const store = new StatusStore();
  const provider = new GeminiProvider();
  const engine = new Engine(provider, store);
  
  const manifest = getManifest();

  const subjects = options.subject ? [options.subject] : Object.keys(manifest.subjects);

  for (const subjectId of subjects) {
    const subject = manifest.subjects[subjectId];
    if (!subject || !subject.verified) continue;

    const chapters = options.chapter 
      ? subject.chapters.filter(c => c.id === options.chapter)
      : subject.chapters.filter(c => c.verified);

    for (const chapter of chapters) {
      console.log(`Starting generation for ${subjectId} / ${chapter.id}`);
      
      let generator;
      if (subjectId === 'physics') generator = new PhysicsGenerator(engine);
      else if (subjectId === 'chemistry') generator = new ChemistryGenerator(engine);
      else if (subjectId === 'biology') generator = new BiologyGenerator(engine);
      else if (subjectId === 'english') generator = new EnglishGenerator(engine);
      else if (subjectId === 'hindi') generator = new HindiGenerator(engine);
      
      if (generator) {
        await generator.generateChapter(chapter.id);
      } else {
        console.warn(`No generator implemented for ${subjectId}`);
      }
    }
  }

  console.log("Generation cycle complete.");
}

run().catch(console.error);
