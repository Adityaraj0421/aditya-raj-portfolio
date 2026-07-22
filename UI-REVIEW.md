# Portfolio UI Review

Audited July 23, 2026 against the local portfolio at desktop (1440 × 900) and mobile (390 × 844), covering the homepage and all five case studies.

## Score

| Pillar | Score | Assessment |
|---|---:|---|
| Copywriting | 3/4 | Strong positioning and generally credible detail, but repeated rhetorical formulas make sections feel machine-shaped. |
| Visuals | 3/4 | Distinctive art direction, weakened by using the same architectural-landscape grammar for nearly every project. |
| Color | 4/4 | Restrained, cohesive, and project accents remain legible without breaking the portfolio system. |
| Typography | 4/4 | Clear hierarchy, expressive display pairing, and strong mobile hero composition. |
| Spacing | 3/4 | Excellent breathing room at section level, but several case studies are overly long and mobile code sections overflow. |
| Experience design | 2/4 | Navigation and hierarchy are clear; horizontal mobile overflow and limited separation between conceptual art and product evidence reduce trust. |

**Overall: 19/24**

## Priority fixes

### P0 — Fix mobile horizontal overflow

At a 390px viewport the document width exceeds the visible 375px layout on:

- Find My Genie: 394px wide
- Claussal: 433px wide
- Naksha Studio: 566px wide

The overflow originates in implementation/code-evidence chapters where `.case-copy`, `.code-evidence`, and `.engineering-grid` inherit an intrinsic width from their code blocks. Add `min-width: 0` to grid children and constrain `pre`/`code` to the container with horizontal scrolling inside the code block. This is visible as a bottom horizontal scrollbar and is the only confirmed release-blocking visual defect.

### P1 — Separate concept art from product proof

The generated scenes are strong campaign art, but they currently occupy most of the evidence area. Recruiters need to distinguish the shipped interface from the art direction immediately.

- Label composites consistently as **Concept visualization using the shipped interface**.
- Include at least one clearly framed, unmodified product capture in each product case study.
- Keep the composite as the chapter opener and put the raw capture beside the implementation or interaction explanation.
- Naksha is the exception: repository structure, terminal output, release history, and evaluation artifacts are better proof than UI screenshots.

### P1 — Reduce the repeated “AI portfolio” visual grammar

Across the homepage and case studies, meadows, stone portals, monumental screens, paths, and golden-hour lighting recur too often. Individually they look premium; together they reveal the generation recipe.

Keep the meadow/portal as the portfolio’s world, but assign each project a more distinct material and compositional rule:

- Find My Genie: paths, branching, live night operations
- ContentOS: warm archive, memory, editorial systems
- Itz Confidential: black stone, evidence, red thread
- Naksha Studio: terminal/repository artifacts, diagrams, monochrome technical field
- Claussal: paper, clauses, redlines, restrained legal archive

Avoid adding more pedestal-mounted screens in landscapes.

### P1 — Shorten recruiter scan time

The case studies range from roughly 8,600 to 13,600 CSS pixels tall. ContentOS and Find My Genie are especially long. Add a compact summary directly after each hero:

- Problem
- What I owned
- Three decisions
- What shipped
- Outcome / current state

Then let deeper evidence follow. A recruiter should understand the project in 60–90 seconds without reading the entire narrative.

### P2 — Break the copy formula

The writing frequently uses the same structures:

- “Not X. Y.”
- “X is not a fallback. It is…”
- “Do not… Instead…”
- a sans-serif setup followed by an italic serif reveal in every major heading

The language is good, but the repetition reads as LLM-assisted. Keep the strongest examples and rewrite roughly one third of the section headings as direct, factual statements. Vary sentence length and occasionally lead with a concrete constraint, artifact, or result.

### P2 — Tighten claim provenance

- Add dates to volatile metrics such as **300+ GitHub stars** and **608+ tests**.
- Keep “reported by the brand” next to Itz Confidential’s 5,000+ and Horror Con claims wherever those appear.
- If a result cannot be independently supported, describe it as scope or current state rather than impact.

### P2 — Standardize external-link safety

ContentOS, Itz Confidential, and Naksha contain external links opened in new tabs without `noopener` in their `rel` value. The existing `noreferrer` is broadly protective, but `rel="noopener noreferrer"` should be the consistent explicit pattern.

### P3 — Resolve identity details

The public contact address is `kang.applies@gmail.com`, which does not match the name or portfolio identity. A name-matched address or custom-domain email would feel more deliberate to recruiters.

## What does not feel like AI slop

- The positioning is specific: product design plus production engineering for AI systems.
- Find My Genie’s HITL controls and Claussal’s reversible, source-linked review model show real product judgment.
- The implementation sections contain concrete state, API, testing, accessibility, and architecture details.
- The project ordering works: operational AI first, internal AI system second, client ownership third, open source fourth, experimental MVP fifth.
- The restrained navigation, typography, and color system feel authored rather than template-derived.

## Recommended order of work

1. Fix mobile overflow on the three affected case studies.
2. Add clear concept/product labels and one raw proof frame per product project.
3. Add a recruiter summary block and shorten the two longest pages.
4. Rewrite repeated headline formulas.
5. Add dates/provenance to metrics and normalize external links.
6. Revisit the contact email when a better address is available.

