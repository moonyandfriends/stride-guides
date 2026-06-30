#!/usr/bin/env node
// Validates that manifest.json and the .md files stay in sync.
//
// stride-site fetches manifest.json + each `<slug>.md` live at runtime, so a
// slug pointing at a missing file (or a renamed .md left out of the manifest)
// silently 404s a guide. This check fails CI when they drift.
import { readFileSync, readdirSync } from "node:fs";

const errors = [];

let manifest;
try {
  manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
} catch (err) {
  console.error(`Could not read/parse manifest.json: ${err.message}`);
  process.exit(1);
}

const pages = Array.isArray(manifest.pages) ? manifest.pages : null;
if (!pages) {
  console.error('manifest.json must have a "pages" array.');
  process.exit(1);
}

const mdFiles = new Set(readdirSync(".").filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md"));
const referenced = new Set();

pages.forEach((page, i) => {
  if (!page || typeof page.slug !== "string" || !page.slug) {
    errors.push(`pages[${i}] is missing a string "slug".`);
    return;
  }
  if (typeof page.title !== "string" || !page.title) {
    errors.push(`pages[${i}] ("${page.slug}") is missing a string "title".`);
  }
  const file = `${page.slug}.md`;
  referenced.add(file);
  if (!mdFiles.has(file)) {
    errors.push(`Manifest slug "${page.slug}" has no matching file "${file}".`);
  }
});

for (const file of mdFiles) {
  if (!referenced.has(file)) {
    errors.push(`File "${file}" is not referenced by any manifest slug.`);
  }
}

if (errors.length > 0) {
  console.error("Manifest validation failed:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Manifest OK: ${pages.length} pages, ${mdFiles.size} content files in sync.`);
