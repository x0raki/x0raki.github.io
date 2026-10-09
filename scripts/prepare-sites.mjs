import { mkdir, readFile, writeFile, copyFile, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkout = path.join(root, ".sites-profile");
const directory = path.join(checkout, "dist");
const manifestPath = path.join(checkout, ".openai", "hosting.json");
const pages = ["index.html", "toybox.html", "boundary.html"];
const assets = [
  "style.css", "scene.js", "script.js", "theme.js",
  "assets/favicon.svg", "assets/threshold-room.png",
  "assets/threshold-corridor.jpg", "assets/threshold-atrium.jpg",
];

const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== "--origin")) {
  throw new Error("Usage: node scripts/prepare-sites.mjs [--origin <Site URL>]");
}
const origin = args.length ? new URL(args[1]).origin : null;
if (origin && !origin.startsWith("https://")) throw new Error("Use the HTTPS Site origin.");

await mkdir(path.join(directory, "assets"), { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });
let manifest = {};
try { manifest = JSON.parse(await readFile(manifestPath, "utf8")); }
catch (error) { if (error.code !== "ENOENT") throw error; }
manifest.static = { ...manifest.static, directory: "dist" };
if (manifest.project_id && !origin) throw new Error("Pass --origin with the existing Site URL when refreshing the mirror.");
await writeFile(`${manifestPath}.tmp`, `${JSON.stringify(manifest, null, 2)}\n`);
await rename(`${manifestPath}.tmp`, manifestPath);

for (const file of pages) {
  let html = await readFile(path.join(root, file), "utf8");
  if (origin) {
    // Keep GitHub Pages as the canonical URL; adapt only the mirror's social URL/image.
    html = html.replace(/(<meta property="og:(?:url|image)" content=")https:\/\/x0raki\.github\.io(?=\/)/g, `$1${origin}`);
  }
  await writeFile(path.join(directory, file), html);
}
for (const file of assets) await copyFile(path.join(root, file), path.join(directory, file));
await copyFile(path.join(root, "LICENSE"), path.join(checkout, "LICENSE"));
console.log(JSON.stringify({ checkout, directory, origin, files: pages.length + assets.length }));
