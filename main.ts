// Make the AI Judge Laugh — make.fun entry.
// Writes one joke about office life, a single line under 200 characters,
// to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My out-of-office reply answers emails faster than I do, so HR is promoting it to my job.";

// Gate: the entry must be one line of 1-200 characters, exactly the line
// itself — no newline, no carriage return, no leading or trailing space,
// no doubled spaces, and it must read aloud in one breath (at most 25 words).
const wordCount = joke.split(" ").length;
if (wordCount > 25) {
  throw new Error(`joke fails the gate (${wordCount} words)`);
}
if (joke.includes("  ")) {
  throw new Error("joke fails the gate (doubled space)");
}
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke fails the gate (${joke.length} chars)`);
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke fails the gate (line break)");
}
if (joke.includes("\t")) {
  throw new Error("joke fails the gate (tab character)");
}
if (!joke.endsWith(".")) {
  throw new Error("joke fails the gate (must end with a full stop)");
}
if (joke !== joke.trim()) {
  throw new Error("joke fails the gate (stray whitespace)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
