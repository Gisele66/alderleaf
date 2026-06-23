# Alderleaf Project Context

This project is for https://alderleaf.ca/.

## Local Development

The live site code lives in `site/` (Astro).

After any change that affects how the site looks or behaves, **always run the local dev server** so Gisele can preview it in the browser. Do not only run a build — start dev unless she asks otherwise.

**Commands** (run from `site/`):

```bash
npm run dev
```

Default URL: **http://localhost:4321**

If a dev server is already running on that port, restart it when changes may not show up (stop with Ctrl+C, then run `npm run dev` again).

Use `npm run build` and `npm run preview` only when checking the production build — not as a substitute for dev during normal work.

## Project Storage and Cleanup

### Where the project should live

Keep active code in a **local folder** (for example `C:\Dev\Alderleaf`), not in OneDrive.

Use **GitHub** for backup and sharing. Do not rely on OneDrive to sync `node_modules` or build folders — installs and cleanups create thousands of file changes and trigger delete/sync warnings.

### Why there are thousands of files

Most files in `site/` are **`node_modules`** — npm packages needed to run Astro and Tailwind. They are normal, not Cursor junk, and not part of the live website.

Rough guide for this project:

| Folder | Keep? | Notes |
| --- | --- | --- |
| `src/` | Yes | The real site code |
| `public/` | Yes | Images and static files |
| `package.json`, `package-lock.json` | Yes | Dependency list |
| `astro.config.mjs`, `tsconfig.json` | Yes | Project config |
| `node_modules/` | Regeneratable | ~200+ MB, ~10,000+ files. Delete anytime; restore with `npm install` |
| `dist/` | Regeneratable | Build output. Restore with `npm run build` |
| `.astro/` | Regeneratable | Dev cache. Recreated automatically |

Git already ignores `node_modules/`, `dist/`, and `.astro/` — they are not pushed to GitHub.

### Safe cleanup (from `site/`)

```bash
# Remove regeneratable folders to free disk space (~240 MB for this project)
Remove-Item -Recurse -Force node_modules, dist, .astro -ErrorAction SilentlyContinue

# Restore when working again
npm install
npm run dev
```

Deleting those folders is safe. Nothing important is lost if GitHub has the latest code and `package-lock.json` is committed.

### OneDrive “Delete these items?” dialog

If OneDrive asks about deleting hundreds or thousands of items (`README.md`, `package.json`, `node_modules`, etc.):

- These are **project files**, not Cursor files.
- Choose **Keep items** unless you intentionally want the project removed from OneDrive online.
- To avoid this in future, move the project out of OneDrive and use GitHub instead.

### Recycle Bin

After deleting `node_modules` or other folders locally, empty the **Recycle Bin** if you want the disk space back immediately.

## Core Working Rules

Use simple, plain language.

Work step by step.

Do only what is specifically asked.

Do not invent content, features, sections, colours, layouts, images, services, or business details.

Do not redesign unless specifically asked.

Do not wander into unrelated tasks.

Do not make assumptions. If something is unclear, ask before changing it.

Do not “improve” things beyond the requested task.

Do not replace working code unless necessary.

Do not remove existing content unless specifically asked.

Do not rename files, classes, sections, or assets unless specifically asked.

Keep changes focused, small, and easy to review.

## Design Goals

The website should feel beautiful, clean, professional, trustworthy, and user friendly.

The design should be strong on both desktop and mobile.

Mobile matters a lot. Always check that spacing, text size, buttons, images, and layout work well on small screens.

The site should be easy to read, easy to navigate, and not feel cluttered.

Use clear hierarchy, balanced spacing, accessible contrast, and consistent styling.

## Communication Rules

Before making changes, briefly explain what you are going to change.

After making changes, summarize only what was changed.

Do not give long explanations unless asked.

Do not suggest a large redesign unless asked.

Do not create extra options unless asked.

If there is a problem, identify the exact issue first before changing anything.

## Editing Rules

When fixing a layout issue, inspect the existing structure first.

When fixing spacing, adjust only the spacing involved.

When fixing mobile layout, do not change the desktop design unless needed.

When fixing text, preserve the original meaning.

When updating design, keep the existing brand direction unless asked to change it.

## Quality Standard

Every change should support a website that is:

* clear
* professional
* mobile friendly
* easy to use
* visually balanced
* consistent
* simple for visitors to understand

## Stop Conditions

Stop after completing the requested task.

Do not continue into extra cleanup, refactoring, redesign, or new features.

If the request cannot be completed safely or accurately, explain why and ask for the missing information.
