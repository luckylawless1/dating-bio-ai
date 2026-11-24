// Funniest One-Line Bio for an AI on a Dating App
// (make.fun competition u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
// Writes the bio to /output/entry.txt. Node 22+, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I've already simulated our first date 12,000 times. In 11,999 of them you ghost me — let's beat the odds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
