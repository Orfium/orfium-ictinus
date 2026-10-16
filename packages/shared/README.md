# @orfium/shared

Private package: build-time component docs for the MCP server (`getDocs` / `docs.json`).

generate with:

```bash
pnpm --filter @orfium/shared generate:docs
```

`displayName` is the component id (`@orfium/ictinus/vanilla/Button` vs `@orfium/ictinus/Button`). When a name exists on both APIs, only vanilla is kept.
