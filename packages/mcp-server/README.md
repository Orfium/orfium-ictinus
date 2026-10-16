# @orfium/ictinus-mcp

## Overview

Ictinus MCP enables AI tools in **VS Code**, **Cursor**, and **Claude Code** to access Orfium's Ictinus design-system documentation, components, patterns, icons, and tokens through the [Model Context Protocol](https://modelcontextprotocol.io/).

## Installation Guide

### Prerequisites

- VS Code, Cursor, or Claude Code
- Node.js 24 or later

Verify Node.js and `npx`:

```bash
node --version
npx --version
```

### Add the MCP server

Pick your AI client below. Each client uses its native MCP config file.

#### VS Code

1. Open the project in VS Code.
2. Create or open `.vscode/mcp.json`.
3. Add the following configuration:

```json
{
  "servers": {
    "Ictinus": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@orfium/ictinus-mcp"]
    }
  }
}
```

4. Save the file.
5. Reload VS Code or restart the GitHub Copilot Chat session.
6. Verify with a prompt, for example: _Find the Ictinus Button component and show its available variants._

More info: [Configure the mcp.json file](https://code.visualstudio.com/docs/agent-customization/mcp-servers#_configure-the-mcpjson-file)

#### Cursor

1. Open the project in Cursor.
2. Create or open `.cursor/mcp.json` (project), or use **Cursor Settings → Customize → MCP**.
3. Add the following configuration:

```json
{
  "mcpServers": {
    "Ictinus": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@orfium/ictinus-mcp"]
    }
  }
}
```

4. Save the file.
5. Open **Cursor Settings → Customize → MCP**, confirm Ictinus appears, and enable it if needed (or reload the window).
6. Verify with a prompt, for example: _Find the Ictinus Button component and show its available variants._

More info: [Model Context Protocol (MCP) | Cursor Docs](https://cursor.com/docs/context/mcp)

### Optional: package install

```bash
# project
pnpm add -D @orfium/ictinus-mcp

# or run without installing
npx @orfium/ictinus-mcp
```

## Troubleshooting

### The server does not start

Check that Node.js is installed and meets the required version. Then test that the package can be resolved:

```bash
npx -y @orfium/ictinus-mcp
```

The MCP server communicates over standard input/output, so it may not display a normal web server page or remain visibly interactive in the terminal.

- **VS Code:** [Troubleshoot and debug MCP servers](https://code.visualstudio.com/docs/agent-customization/mcp-servers#_troubleshoot-and-debug-mcp-servers)
- **Cursor:** Check **Cursor Settings / Customize / MCP** for error output on the Ictinus server — [MCP integrations](https://cursor.com/docs/context/mcp)

### Removing Ictinus MCP

- **VS Code:** Delete the `Ictinus` entry from `.vscode/mcp.json`, then reload VS Code.
- **Cursor:** Delete the `Ictinus` entry from `.cursor/mcp.json` (or disable it in **Cursor Settings / Customize / MCP**), then reload Cursor.

## Tools

| Tool                | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| `search_components` | Find components by name, category, or API (`vanilla` / `legacy`)     |
| `get_component`     | Overview (import, examples); optional `props` search for definitions |
| `get_patterns`      | Storybook composition examples (vanilla ranked first)                |
| `get_tokens`        | Design token maps from `@orfium/tokens`                              |
| `search_icons`      | Vanilla `*Icon` components (`EditIcon`, extends IconPrimitive)       |
| `get_guides`        | Installation, theme, migration, vanilla-vs-legacy                    |

## Agent tips

1. Prefer **`@orfium/ictinus/vanilla`** when both APIs exist.
2. Call `get_guides({ names: "vanilla-vs-legacy getting-started-installation" })` before scaffolding.
3. Call `get_component` for overview, then `get_component({ props: "…" })` when you need prop types; then `get_patterns` before composing.
4. Vanilla components extend **Box** — use sprinkle layout props / `get_tokens` for spacing and color.

## Development

Refresh metadata when APIs/docs change: `pnpm --filter @orfium/ictinus-mcp generate`.

## License

Apache-2.0
