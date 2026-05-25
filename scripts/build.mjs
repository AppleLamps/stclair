import { mkdir, copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "ashley-st-clair-expose.html");
const publicDir = path.join(root, "public");
const dest = path.join(publicDir, "index.html");

await access(source, constants.R_OK);
await mkdir(publicDir, { recursive: true });
await copyFile(source, dest);
console.log(`Built ${path.relative(root, dest)} from ashley-st-clair-expose.html`);
