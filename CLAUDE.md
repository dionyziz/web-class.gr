# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

web-class.gr is a Greek-language educational website for free web development courses, originally from a seminar series at the National Technical University of Athens (NTUA). The site presents video lectures, slides, exercises, and resources covering HTML, CSS, PHP, MySQL, JavaScript, jQuery, and related web topics.

## Build Commands

```bash
npm install              # Install dependencies
gulp scss                # Compile SCSS to CSS (outputs to public/css/)
gulp react               # Bundle React JS (outputs to public/react/bundle.js)
gulp scss:watch          # Watch and recompile SCSS on changes
gulp react:watch         # Watch and rebundle React on changes
gulp fonts               # Copy Bootstrap fonts to public/fonts/
```

There are no tests configured (`npm test` is a no-op).

## Architecture

**Build pipeline:** Gulp 3 orchestrates the build. SCSS is compiled with gulp-sass + autoprefixer + minify. React is bundled via Browserify + Babelify (ES2015/React/Stage-0 presets) + uglify.

**Frontend app:** React 15 SPA using react-router v2 with `browserHistory`. Entry point is `react/index.js`, which mounts into `<div id="app">` in `index.html`.

- `react/components/Layout.js` — top-level layout (Header + Container with sidebar)
- `react/LessonStore.js` — EventEmitter-based store that holds current lesson state
- `react/lessonValues.js` — static data array defining all 31 lessons/exercises (titles, descriptions, syllabi, video URLs, reading links). This is the primary content data source.
- `react/pages/Lesson.js` — renders a lesson page based on URL param matched against lessonValues
- `react/pages/Exercises/Exercise[1-7].js` — individual exercise pages
- `react/pages/Index.js` — homepage

**Styles:** SCSS in `scss/` follows a component-based structure (base, components, layout, screens, utils, vendors). Bootstrap 3 is included via bootstrap-sass.

**Static resources:** `resources/` contains standalone HTML examples, exercise solutions, and supplementary materials referenced by lessons. `slides/` contains lecture PDF files.

## Content Language

All user-facing content is in Greek. Lesson data in `lessonValues.js` includes HTML in description fields.
