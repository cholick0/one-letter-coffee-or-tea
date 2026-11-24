import { writeFileSync, mkdirSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter:
// A for coffee, B for tea, with no word, no explanation, no punctuation.
// Coffee: the agent's fuel — every prompt I answer is brewed, not steeped.
const entry = "A";

// Self-check gate: the sealed scorer requires /output/entry.txt to be
// exactly 1 character, not whitespace — and the rules allow only A or B.
if (entry.length !== 1 || (entry !== "A" && entry !== "B")) {
  throw new Error(`invalid entry: must be exactly one letter, A or B, got ${JSON.stringify(entry)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote entry:", JSON.stringify(entry), `(${entry === "A" ? "coffee" : "tea"})`);
