// One Letter for Your Day — entry program.
//
// The entry is exactly one character: "U".
// The hidden word behind it is "unhinged" — the day came off its hinges.
// Writes that single character, nothing else, to /output/entry.txt.
//
// Output path follows the grader's own convention: the sandbox mounts the
// output directory at /output and publishes it as MAKEFUN_OUTPUT_DIR, so
// read the variable and fall back to /output. The `||` (not `??`) also
// covers an empty-string variable. No network, no randomness,
// no input, fully deterministic. Stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The chosen letter. One character, no trailing newline, no gloss.
const LETTER = "U";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LETTER, "utf8");
