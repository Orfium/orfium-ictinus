# @orfium/ictinus-mcp

MCP (Model Context Protocol) server for the [Ictinus](https://github.com/Orfium/orfium-ictinus) design system. Gives AI assistants (Cursor, Claude Code, etc.) accurate component metadata, tokens, icons, and docs.

## Install

```bash
# project
pnpm add -D @orfium/ictinus-mcp

# or run without installing
npx @orfium/ictinus-mcp
```

After publishing:

```json
{
  "mcpServers": {
    "ictinus": {
      "command": "npx",
      "args": ["-y", "@orfium/ictinus-mcp"]
    }
  }
}
```

## Cursor (local monorepo)

Prefer the cwd-independent launcher (works even if Cursor’s process cwd is not the repo root):

```json
{
  "mcpServers": {
    "ictinus": {
      "command": "node",
      "args": ["/Users/george/orfium-ictinus/packages/mcp-server/bin/ictinus-mcp.mjs"]
    }
  }
}
```

Or with workspace-relative paths + explicit `cwd`:

```json
{
  "mcpServers": {
    "ictinus": {
      "command": "node",
      "args": ["./bin/ictinus-mcp.mjs"],
      "cwd": "/Users/george/orfium-ictinus/packages/mcp-server"
    }
  }
}
```

Rebuild before connecting: `pnpm --filter @orfium/ictinus-mcp build`. Then toggle the server off/on in Cursor MCP settings.

## Tools

| Tool | Purpose |
| --- | --- |
| `search_components` | Find components by name, category, or API (`vanilla` / `legacy`) |
| `get_component` | Description, import, prop definitions, starter example |
| `get_patterns` | Storybook composition examples (vanilla ranked first) |
| `get_tokens` | Design token maps from `@orfium/tokens` |
| `search_icons` | Vanilla `*Icon` components and legacy `<Icon name>` |
| `get_guides` | Installation, theme, migration, vanilla-vs-legacy |

## Agent tips

1. Prefer **`@orfium/ictinus/vanilla`** when both APIs exist.
2. Call `get_guides({ names: "vanilla-vs-legacy getting-started-installation" })` before scaffolding.
3. Use `get_component` for props/defaults, then `get_patterns` before composing multiple components.

## Development

```bash
# from repo root
pnpm install
pnpm --filter @orfium/ictinus-mcp generate   # refresh src/data.json
pnpm --filter @orfium/ictinus-mcp build      # generate + tsc → dist/
```

Metadata is generated at build time from:

- Component exports + JSDoc/props in `packages/ictinus`
- Storybook MDX guides in `apps/storybook/docs`
- CSF stories for usage patterns
- Token sources in `packages/tokens`
- Icon unions in `Icon.types.ts`

Commit regenerated `src/data.json` whenever upstream APIs/docs change. The running MCP
reloads `data.json` when its mtime changes; after code changes, restart the MCP server in Cursor.

## License

Apache-2.0
