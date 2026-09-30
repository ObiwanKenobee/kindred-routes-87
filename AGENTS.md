<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep all platform navigation labels, submenu slugs, breadcrumbs, and section metadata in `src/lib/platform-navigation.ts` so direct URLs and active states remain synchronized.
- Use the root catch-all route for generic platform submenu workspaces; preserve dedicated route files where a feature already has a purpose-built page.
