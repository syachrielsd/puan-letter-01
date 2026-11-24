# One Letter for Your Day — screening notes

Mission: `u-puan-one-letter-for-your-day-e54e9c36` ("One Letter for Your Day",
$5 pool, top 3 paid). The program writes exactly one character, A–Z, to
`/output/entry.txt`. The judge sees only the letter and must infer the word
behind it, then picks the letter whose hidden word feels more vivid, funnier
or more true, weighing the brief's criteria in order:

1. The letter is A–Z, first letter of a word describing the day; a letter
   standing for no day's word loses to any that does.
2. The word is vivid and specific — a sharp picture, not a vague mood.
3. The word is funny or surprising, lands at once, repeatable to a friend.
4. The word feels true to a real day — an honest report, not a performance.
5. The letter suits its word — an initial fitting the sound/shape of the
   word, not the obvious pick where a sharper one exists.
   ("Obscurity for its own sake does not count.")

Two structural facts decide the pick:

- The judge sees ONLY the letter, so the letter must make ONE vivid word
  jump out. The RULES' own examples (A=amazing, F=Friday-feeling,
  Z=zero sleep) are the obvious picks and therefore the trap: many entrants
  will copy them.
- Entries whose files are byte-identical are one member of the field and
  share one rate; the earlier receipt places above its copies. With only 26
  possible entries, a heavily-picked letter means a late receipt among many
  copies. Pick a letter few others will pick, while still satisfying 1–5.

## Candidate list (screened)

| Letter | Word | Verdict |
|--------|------|---------|
| A | amazing | RULED OUT — RULES example; vague mood, fails 2; heaviest copies. |
| B | burnt-out | Decent picture, mild funny; common letter, hyphenated feel. Mid. |
| C | crashed | Sharp picture (person/machine crashing), funny, true; common letter. Mid. |
| D | doomed | Verdict not a picture — fails 2 (vague mood). Out. |
| E | exhausted | Fails 5 against X: E is the obvious initial where a sharper one exists. Out. |
| F | Friday-feeling | RULED OUT — RULES example; obvious, heavy copies. |
| G | grumpy | Vague mood adjective, fails 2; common pick. Out. |
| H | hangover | TOP CONTENDER — see head-to-heads. |
| I | imploded | Funny, vivid (caving in), true as metaphor; slightly obscure. Mid-high. |
| J | jetlagged | Sharp picture but needs travel context; less universal. Mid. |
| K | knackered | Vivid + funny-sounding; regional slang, judge may underweight it. Mid-high. |
| M | meltdown | Vivid, true, repeatable; common, near-cliché day word. Mid-high. |
| N | nuked | Funny hyperbole, vivid; "napping" (alt) is weak. Mid. |
| O | overwhelmed | Vague mood label, fails 2; very likely heavily picked. Out. |
| P | panicked | Vivid-ish, mild funny; P obvious for it. Mid. |
| Q | queasy | TOP CONTENDER — sharp stomach picture, funny sound, rarest letter. |
| S | screwed | Punchy, funny, true; common letter, slightly crude. Mid. |
| T | toasted | Funny, vivid (burnt toast), true; common slang pick. Mid-high. |
| U | unhinged | **WINNER** — see justification. |
| V | vanquished | Archaic performance, fails 4 (nobody's real day is "vanquished"). Out. |
| W | wrecked | Vivid, funny, true; common slang pick. Mid-high. |
| X | exhausted | RUNNER-UP — best criterion-5 story, near-deterministic inference. |
| Y | yawning | Weak, vague. Out. |
| Z | zero sleep | RULED OUT — RULES example; obvious, heavy copies. |

## Head-to-heads (criteria in order)

- **U vs X:** U wins 2 (a door off its hinges is a sharp picture; "exhausted"
  is a generic tired-mood word) and 3 (unhinged is funnier, more surprising,
  more repeatable to a friend). X wins 5 (X-for-"ex-" is the cleverest
  initial fit in the field) and is the rarest letter. But 2 and 3 outrank 5,
  and U's margin there is bigger than X's margin on 5. **U beats X.**
- **U vs H:** H wins 4 (hangover is the truest, most honest report) and is
  near-equal on 2. U wins 3 (unhinged is more surprising than the familiar
  hangover trope) and wins the structural tie-break: H=hangover will be one
  of the most-picked letters, so our receipt would sit late among many
  byte-identical H copies. **U beats H.**
- **U vs Q:** Q wins on rarity, but U wins 2 (a whole derailed day vs one
  queasy stomach) and 3 (unhinged is the better story to repeat). **U beats Q.**
- **U vs K:** knackered is funny and vivid, but regional slang — the GLM
  judge may underweight it, while "unhinged" is universal internet English
  that lands at once. **U beats K.**
- **U vs M / T / W / N / C:** meltdown, toasted, wrecked, nuked, crashed are
  all solid, but each is a more common slang pick and less surprising than
  unhinged. **U beats each on 3 and on copy-rarity.**

## Chosen letter: U — hidden word "unhinged"

Justification per criterion:

1. **Valid day word:** U is the first letter of "unhinged", a real word
   describing a day (a day that came off its hinges). Passes outright.
2. **Vivid and specific:** "Unhinged" calls up a sharp picture — a door
   ripped off its hinges, a day coming apart at the seams — not a vague mood
   like "amazing", "tired" or "overwhelmed".
3. **Funny / surprising, lands at once:** "Unhinged" is the funniest
   self-report in the field: it is surprising as a diary word, instantly
   repeatable to a friend ("today I was completely unhinged"), and it lands
   in one beat with no explanation needed.
4. **True to a real day:** It reads as an honest report of a real derailed
   day, not a performance — everyone has had a day that came off its hinges.
   It is strange and ordinary at once, exactly what the brief asks for.
5. **Letter suits word:** U is the word's own initial, and it is not the
   obvious pick: the obvious U-words are the flat ones ("unproductive",
   "upset", "unreal"); "unhinged" is the sharper U-word, and no other letter
   fits it. The pick is specific, not obscure for its own sake.

Runner-up: **X = exhausted** — the best criterion-5 story in the field
(X fits the "ex-" sound while E is the obvious pick) and the most
deterministic inference (X maps to "exhausted" almost uniquely). It loses to
U because "exhausted" is a vaguer mood word and less funny: it loses
criteria 2 and 3 to "unhinged", and those outrank 5.

Honest risk noted: U could also retrieve "unproductive" in the judge's mind,
a flatter day word. Mitigation: "unhinged" is the salient U-day word in
current usage and the vivid/funny reading the brief rewards; the judge is
briefed to pick the more vivid, funnier, truer reading, which points at
"unhinged" over "unproductive" whenever both are in play.

## Verification (local, grader-style)

Run from `/tmp` with the output dir pointed elsewhere (repo files never
copied): `MAKEFUN_OUTPUT_DIR=/tmp/puan-out node main.ts`

- First run (v1, `??` fallback): wrote 1 byte; `od -c` shows only `U`.
  One wart: Node printed a `MODULE_TYPELESS_PACKAGE_JSON` warning (ESM
  reparse) because the repo had no `package.json`.
- Revision: `package.json` with `"type": "module"` added (warning gone);
  `??` changed to `||` so an empty-string `MAKEFUN_OUTPUT_DIR` also falls
  back to `/output`.
- Re-run after revision: `python3` readback `b'U'`, length 1,
  `d == b'U'` → True. Gate requirement (UTF-8 text, exactly 1 character,
  not whitespace) satisfied with zero margin for error: 1 byte, no newline.

## Program

`main.ts` (Node 22, stdlib only) writes exactly `U` — one byte, no trailing
newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to
`/output/entry.txt`, the grader's own convention. Deterministic, no network,
no randomness.
