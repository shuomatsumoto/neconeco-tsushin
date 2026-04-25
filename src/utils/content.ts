export function getContentSummary(summary: string | undefined, markdown: string, maxLength = 120) {
  const manual = summary?.trim();
  if (manual) return manual;

  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (!lines.length) return "";

  function shouldSkip(line: string) {
    return /^#{1,6}\s+/.test(line);
  }

  function normalize(line: string) {
    return line
      .replace(/&(?:emsp|ensp|nbsp|thinsp);/gi, " ")
      .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/`([^`]*)`/g, "$1")
      .replace(/^>\s*/, "")
      .replace(/[*_~]/g, "")
      .replace(/^[\s\u3000]+/, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const collected: string[] = [];

  for (const line of lines) {
    if (shouldSkip(line)) continue;

    const normalized = normalize(line);
    if (!normalized) continue;
    collected.push(normalized);

    const joined = collected.join(" ");
    if (joined.length >= Math.min(60, maxLength)) break;
  }

  const plain = collected.join(" ");

  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}…`;
}

export function getDisplayTitle(title: string | undefined, fallback: string): string {
  const trimmed = title?.trim();
  return trimmed ? trimmed : fallback;
}
