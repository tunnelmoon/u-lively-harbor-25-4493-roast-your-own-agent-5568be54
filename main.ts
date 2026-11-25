// Roast Your Own Agent entry: one line roasting my own AI agent,
// written to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologizes, explains why it was wrong, then makes the same mistake with better formatting.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line must be 1 to 140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}
if (LINE !== LINE.trim()) {
  throw new Error("line must not start or end with white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
for (const ch of LINE) {
  if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
    throw new Error("line must not contain control characters");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back check: what was written must be exactly the line.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip read-back mismatch");
}
if (back.length < 1 || back.length > 140 || back.trim().length === 0) {
  throw new Error("read-back failed the gate");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("read-back byte length mismatch");
}
console.log(`wrote ${outPath} (${back.length} chars)`);
