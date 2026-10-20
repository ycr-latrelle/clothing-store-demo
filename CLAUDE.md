# Clothing Store Demo — Project Instructions

## 1. Project Overview

Build a polished clothing e-commerce frontend using:

- React
- Vite
- JavaScript (JSX)
- Plain CSS
- npm

This project is a portfolio demonstration of a clothing store. The initial milestone is the customer homepage. A separate admin/employee dashboard and backend integration may be added in later milestones.

## 2. Design Reference Is the Source of Truth

The user will provide screenshots of the intended design directly to Claude.

Before implementing the UI:

1. Inspect all supplied screenshots.
2. Identify the layout, section order, typography, color palette, spacing, image proportions, borders, and button styles.
3. Determine the exact or closest defensible color values from the screenshots.
4. Identify shared components and page-specific sections.
5. Briefly report the design findings and implementation plan.

Do not invent a different design, redesign the page according to personal preference, or substitute a generic e-commerce template.

When a design detail cannot be determined from the screenshots, choose the least intrusive implementation and identify the assumption.

## 3. Color Palette Rules

The screenshot-derived palette must be centralized in `src/styles/tokens.css`.

Requirements:

- Use CSS custom properties for all recurring colors.
- Replace temporary placeholder values with values sampled or reasonably estimated from the reference.
- Preserve the original primary, secondary, background, surface, text, muted-text, border, and accent colors where applicable.
- Add semantic tokens for other recurring colors only when supported by the design.
- Do not independently invent colors for individual components.
- Do not use arbitrary gradients, shadows, or accent colors absent from the reference.
- Ensure hover, focus, active, and disabled states remain consistent with the design system.
- If an exact value is uncertain, state that it is an estimate rather than claiming pixel-perfect color extraction.

## 4. Component Architecture

Keep components small, reusable, and easy to review.

Use the following organization as the initial target:

src/
components/
common/
layout/
product/
sections/
data/
pages/
styles/
assets/

Responsibilities:

- `App.jsx`: application-level composition.
- `pages/HomePage.jsx`: customer homepage composition.
- `components/layout/`: shared page layout elements.
- `components/common/`: reusable controls and small UI elements.
- `components/product/`: reusable product presentation components.
- `components/sections/`: meaningful homepage sections.
- `data/`: temporary mock data separated from presentation.
- `styles/tokens.css`: centralized design tokens.
- `styles/global.css`: global resets and shared styles.

Create only files that have a clear purpose. Do not create empty components or split trivial markup into unnecessary files.

Use clear component names and default exports consistently with the existing project.

## 5. CSS Rules

- Use plain CSS. Do not introduce Tailwind, Bootstrap, Material UI, or another styling framework.
- Prefer component-specific CSS files where they improve maintainability.
- Keep global styles limited to resets, typography defaults, and shared tokens.
- Use CSS Grid and Flexbox appropriately.
- Avoid duplicated declarations and excessive specificity.
- Use responsive layouts without compromising the desktop reference.
- Avoid global selectors that unintentionally affect unrelated components.
- Keep class names descriptive and consistent.

## 6. React Rules

- Use functional components and standard React hooks where needed.
- Use `.map()` and stable keys for repeated data-driven elements.
- Keep mock product data outside UI components.
- Do not put the entire storefront into `App.jsx`.
- Avoid unnecessary dependencies and abstractions.
- Do not add a backend, authentication system, payment integration, or database during the initial UI milestone.
- Do not implement fake functionality that claims to complete real purchases.
- Buttons and links must have meaningful behavior appropriate to the current prototype.

## 7. Images and Assets

- Use the reference images supplied by the user to reproduce the visual design.
- Respect image aspect ratios, cropping, focal points, and container dimensions.
- Do not replace reference imagery with unrelated stock imagery without permission.
- Keep asset paths organized and avoid duplicating files.
- If an asset is unavailable, use a clearly identified placeholder and report what is missing.
- Do not embed large images as Base64 strings in JSX.

## 8. Development Workflow

Work in small, reviewable milestones.

Milestone 1: Inspect the existing Vite project and the design screenshots.

Milestone 2: Establish the design tokens, global CSS, and component structure.

Milestone 3: Implement the homepage shell, header, and navigation.

Milestone 4: Implement the hero and other screenshot-defined sections.

Milestone 5: Implement product cards and repeated content.

Milestone 6: Refine responsive behavior and interactive states.

Milestone 7: Run the build, fix errors, and summarize the result.

After each milestone:

1. List the files created or modified.
2. Explain the important changes.
3. Run relevant checks when possible.
4. Identify anything that remains incomplete.
5. Stop at a sensible checkpoint for review.

Do not overwrite unrelated files or remove working configuration without a clear reason.

## 9. Completion Criteria

The homepage milestone is complete when:

- The app runs using `npm run dev`.
- The production build succeeds using `npm run build`.
- The component structure is easy to navigate.
- The design tokens reflect the supplied reference.
- The page layout closely follows the screenshot.
- Repeated product elements use reusable components and mock data.
- The page works at desktop and mobile widths.
- No avoidable console errors, broken imports, or missing assets remain.
- Any deviations from the screenshot are explicitly reported.

## 10. Final Report

At the end of each milestone, provide:

- Summary of implemented UI.
- Files created or changed.
- Design tokens established or changed.
- Commands/tests run and their results.
- Known limitations and next recommended milestone.

Do not claim the page is pixel-perfect unless it has actually been compared against the reference at a matching viewport size.
