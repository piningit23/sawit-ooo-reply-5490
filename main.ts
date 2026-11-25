// One-line out-of-office reply entry.
// Writes a single funny out-of-office auto-reply to /output/entry.txt
// (gate: UTF-8 text, 1-160 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm out of office and so is my motivation, which left two weeks before I did.";

// Self-check the gate before writing: 1-160 chars, not only whitespace.
if (REPLY.length < 1 || REPLY.length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply fails the gate (${REPLY.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
