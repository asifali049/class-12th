import { GoogleGenAI } from '@google/genai';
import { GenerateRequest, LLMProvider } from './LLMProvider';
import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set in environment.");
}

const ai = new GoogleGenAI({ apiKey });

export class GeminiProvider implements LLMProvider {
  private modelName: string;

  constructor(modelName: string = process.env.GEMINI_MODEL || 'gemini-2.5-pro') {
    this.modelName = modelName;
  }

  async generate(request: GenerateRequest): Promise<string> {
    try {
      const response = await ai.models.generateContent({
        model: this.modelName,
        contents: [
          { role: 'user', parts: [{ text: request.prompt }] }
        ],
        config: {
          systemInstruction: request.systemPrompt,
          temperature: 0.3,
          responseMimeType: "application/json",
          // if schema is provided we can use responseSchema, but for now we expect JSON from the prompt.
          // responseSchema: request.schema
        }
      });
      return response.text || "";
    } catch (e) {
      console.error("Gemini API Error", e);
      throw e;
    }
  }
}
