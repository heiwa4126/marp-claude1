import { existsSync, mkdirSync, rmSync, cpSync } from "node:fs";

const src = "slides/images";
const destDir = "dist";
const dest = "dist/images";

mkdirSync(destDir, { recursive: true });
rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
