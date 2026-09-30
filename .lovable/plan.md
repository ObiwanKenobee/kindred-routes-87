# Route-synced navigation and resilient platform pages

## Goal
Make every left-sidebar item navigable by URL, keep the correct top-level and submenu states highlighted after refresh or direct entry, add useful breadcrumbs, and show consistent loading/error states throughout AEON GENESIS OS.

## Implementation

1. **Create one navigation source of truth**
   - Define every top-level platform section and its submenu labels, URL slugs, and icons in a shared navigation model.
   - Reuse it for the top navigation, left sidebars, breadcrumbs, and deep-link validation so labels and active states cannot drift apart.
   - Preserve the existing People & Discipleship URLs and map all currently non-clickable sidebar items to stable nested URLs.

2. **Make the left sidebar route-aware**
   - Upgrade sidebar items from buttons to TanStack Router links.
   - Derive active styling from the current pathname, using exact matching for dashboard entries and nested matching for sections.
   - Automatically show and highlight the correct section when a nested URL is opened directly.
   - Keep sidebar groups expanded when one of their descendants is active.

3. **Add breadcrumbs to every dashboard**
   - Render breadcrumbs inside the shared dashboard shell above the page title.
   - Use the shared navigation model to produce `Overview / Section / Subsection` trails.
   - Make previous breadcrumb levels clickable with accessible current-page labeling.

4. **Enable stable deep links for submenu items**
   - Add nested route handling for each top-level dashboard that currently exposes non-functional submenu items.
   - Keep each existing dashboard at its current URL and route submenu URLs to a consistent feature view while preserving the section shell and sidebar.
   - Reject unknown submenu slugs with the existing not-found experience instead of silently showing the wrong page.
   - Keep all existing People nested pages as dedicated routes and include them in the same shared navigation model.

5. **Add shared loading and error experiences**
   - Add a dashboard-shaped loading skeleton with stable sidebar, heading, metrics, and panel placeholders.
   - Add a route-level error boundary that retains AEON navigation, identifies the affected section, and offers retry and safe navigation actions.
   - Configure these as router defaults so every current and future platform route inherits them, while allowing route-specific overrides later.
   - Respect reduced-motion settings for skeleton animation.

6. **Validate navigation end to end**
   - Check generated route IDs without editing the generated route tree.
   - Verify top-level navigation, several submenu links, browser refresh on nested URLs, breadcrumb navigation, active/expanded states, unknown nested URLs, and desktop/mobile layout.
   - Confirm the latest preview build and runtime logs are clean.

## Technical notes
- TanStack Router remains the only router.
- Nested URLs will use one path segment per submenu, for example `/education/courses` and `/platform/api-gateway`.
- Existing dashboard presentation and data remain unchanged; this work only adds navigation structure and resilience.
- The routing/navigation architecture decision will be recorded in `AGENTS.md`.
