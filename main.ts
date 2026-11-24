// One Line, One Chill — entry program (program/v1, Node 22, standard
// library only). Writes the entry's single sentence to /output/entry.txt,
// byte for byte the same on every run. The gate allows 1–200 characters of
// UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a wife who has talked in her sleep for years — harmless,
// familiar — until the thing in her borrows her husband's own voice,
// turns her face to the wall, and reports on him to someone else in the
// room: "He's pretending to be asleep again." Every element is concrete
// (the stolen voice, the face to the wall, the whisper), the scare is
// earned by the years of normal nights before it, nothing is explained,
// and the last word does the damage: again. It has watched him pretend
// before, and tonight it will watch again.
const LINE = "My wife has talked in her sleep for years, but last night she spoke in my voice, turned her face to the wall, and whispered, 'He's pretending to be asleep again.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
