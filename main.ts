// 3 AM Hotfix: The Funniest Commit Message
// Writes one commit message — the funniest 3 AM production hotfix line —
// to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Revert the 3 AM deploy: it fixed the bug by deleting the feature";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 179 characters,
// not only white space, on a single line.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 179) {
  throw new Error(`entry is ${codePoints} code points, must be 1-179`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
