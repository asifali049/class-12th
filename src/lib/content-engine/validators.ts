export function validateLatex(content: string): boolean {
  // Simple check for balanced braces
  let openCount = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '{') openCount++;
    if (content[i] === '}') openCount--;
    if (openCount < 0) return false;
  }
  if (openCount !== 0) return false;
  return true;
}

// In real app, we'd use Math.js or similar to evaluate expression
// For this pilot, we check basic structural things
export function validateNumerical(given: string, formula: string, sub: string, calc: string, ans: string): boolean {
  if (!given || !formula || !sub || !calc || !ans) return false;
  return true; 
}

export function validateSVG(svgContent: string): boolean {
  if (!svgContent) return false;
  if (!svgContent.includes('<svg') || !svgContent.includes('</svg>')) return false;
  if (!svgContent.includes('viewBox')) return false;
  // basic check for unclosed tags could be added, but this covers empty/broken responses
  return true;
}

export function validateBilingual(obj: any): boolean {
  if (!obj || typeof obj !== 'object') return false;
  if (typeof obj.en !== 'string' || obj.en.trim() === '') return false;
  if (typeof obj.hi !== 'string' || obj.hi.trim() === '') return false;
  return true;
}
