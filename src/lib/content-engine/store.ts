import fs from 'fs';
import path from 'path';

export type Status = 'not_started' | 'generating' | 'generated' | 'validating' | 'reviewing' | 'improving' | 'approved' | 'published' | 'failed' | 'human_review_required';

export interface SectionStatus {
  version: number;
  generatedAt?: string;
  updatedAt?: string;
  provider?: string;
  model?: string;
  attempt: number;
  status: Status;
  score?: number;
  issues?: string[];
  criticalErrors?: string[];
}

export type ChapterStatus = Record<string, SectionStatus>; // key is section (notes, formulas, etc)
export type SubjectStatus = Record<string, ChapterStatus>; // key is chapterId
export type StoreData = Record<string, SubjectStatus>; // key is subjectId

const STORE_PATH = path.join(process.cwd(), 'src', 'lib', 'content-engine', 'generation-status.json');

export class StatusStore {
  private data: StoreData = {};

  constructor() {
    this.load();
  }

  private load() {
    if (fs.existsSync(STORE_PATH)) {
      try {
        this.data = JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8'));
      } catch (e) {
        console.error("Failed to load status store", e);
        this.data = {};
      }
    }
  }

  private save() {
    const tmpPath = `${STORE_PATH}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(this.data, null, 2), 'utf-8');
    
    // Windows EPERM workaround for renameSync
    let retries = 5;
    while (retries > 0) {
      try {
        fs.renameSync(tmpPath, STORE_PATH); // atomic save
        break;
      } catch (e: any) {
        if (e.code === 'EPERM' && retries > 1) {
          retries--;
          // Synchronous sleep for a tiny bit
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
        } else {
          throw e;
        }
      }
    }
  }

  public getSectionStatus(subjectId: string, chapterId: string, section: string): SectionStatus {
    if (!this.data[subjectId]) this.data[subjectId] = {};
    if (!this.data[subjectId][chapterId]) this.data[subjectId][chapterId] = {};
    if (!this.data[subjectId][chapterId][section]) {
      this.data[subjectId][chapterId][section] = {
        version: 0,
        attempt: 0,
        status: 'not_started'
      };
    }
    return this.data[subjectId][chapterId][section];
  }

  public updateSectionStatus(subjectId: string, chapterId: string, section: string, update: Partial<SectionStatus>) {
    const current = this.getSectionStatus(subjectId, chapterId, section);
    this.data[subjectId][chapterId][section] = { ...current, ...update, updatedAt: new Date().toISOString() };
    this.save();
  }
}
