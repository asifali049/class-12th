export interface GenerateRequest {
  systemPrompt: string;
  prompt: string;
  schema?: any; // JSON schema if supported
}

export interface LLMProvider {
  generate(request: GenerateRequest): Promise<string>;
}
