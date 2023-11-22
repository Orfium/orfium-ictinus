// vite.config.ts
import path from "path";
import { optimizeLodashImports } from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/@optimize-lodash/rollup-plugin/dist/index.mjs";
import react from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/vite-plugin-dts/dist/index.mjs";
import svgr from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { coverageConfigDefaults, configDefaults } from "file:///Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus/node_modules/vitest/dist/config.js";

// package.json
var package_default = {
  name: "@orfium/ictinus",
  version: "0.0.0",
  main: "./dist/index.umd.js",
  module: "./dist/index.js",
  types: "./dist/index.d.ts",
  type: "module",
  license: "MIT",
  sideEffects: false,
  devDependencies: {
    "@amanda-mitchell/semantic-release-npm-multiple": "^3.9.0",
    "@commitlint/cli": "^17.7.2",
    "@commitlint/config-conventional": "^17.7.0",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/babel-preset-css-prop": "^11.11.0",
    "@emotion/eslint-plugin": "^11.11.0",
    "@emotion/jest": "^11.11.0",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@optimize-lodash/rollup-plugin": "^4.0.1",
    "@rollup/plugin-node-resolve": "^15.0.1",
    "@semantic-release/changelog": "^6.0.3",
    "@semantic-release/git": "^10.0.1",
    "@storybook/addon-a11y": "^7.5.3",
    "@storybook/addon-actions": "^7.5.3",
    "@storybook/addon-designs": "^7.0.5",
    "@storybook/addon-docs": "^7.5.3",
    "@storybook/addon-knobs": "^7.0.2",
    "@storybook/addon-links": "^7.5.3",
    "@storybook/addon-mdx-gfm": "^7.5.3",
    "@storybook/addon-storysource": "^7.5.3",
    "@storybook/addon-themes": "^7.5.3",
    "@storybook/addon-viewport": "^7.5.3",
    "@storybook/addons": "^7.5.3",
    "@storybook/blocks": "^7.5.3",
    "@storybook/builder-vite": "^7.5.3",
    "@storybook/cli": "^7.5.3",
    "@storybook/manager-api": "^7.5.3",
    "@storybook/preset-typescript": "^3.0.0",
    "@storybook/preview-api": "^7.5.3",
    "@storybook/react": "^7.5.3",
    "@storybook/react-vite": "^7.5.3",
    "@storybook/test-runner": "^0.14.0-next.2",
    "@storybook/testing-library": "^0.2.2",
    "@storybook/theming": "^7.5.3",
    "@svgr/webpack": "^8.1.0",
    "@testing-library/dom": "^9.3.3",
    "@testing-library/jest-dom": "^6.1.4",
    "@testing-library/react": "^14.0.0",
    "@testing-library/react-hooks": "^8.0.1",
    "@testing-library/user-event": "^13.5.0",
    "@types/events": "^3.0.0",
    "@types/lodash": "^4.14.149",
    "@types/pluralize": "^0.0.29",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "@types/react-highlight-words": "^0.16.5",
    "@types/react-input-mask": "^3.0.2",
    "@types/react-router-dom": "^5.3.3",
    "@types/react-test-renderer": "^18.0.3",
    "@types/recharts": "^1.8.25",
    "@types/styled-components": "^5.1.7",
    "@types/uuid": "^8.3.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.1.0",
    "@vitest/coverage-v8": "^0.34.6",
    chromatic: "^7.5.0",
    "cross-env": "^7.0.0",
    eslint: "^7.32.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-typescript": "^3.2.4",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-react": "^7.29.4",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-storybook": "^0.6.15",
    express: "^4.17.3",
    history: "^4.10.1",
    husky: "^6.0.0",
    "identity-obj-proxy": "^3.0.0",
    jsdom: "^22.1.0",
    "lint-staged": "^11.0.0",
    prettier: "^2.6.2",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^5.3.4",
    "react-router-dom": "^5.3.4",
    "react-test-renderer": "^18.2.0",
    rimraf: "^3.0.2",
    rollup: "3.9.1",
    "rollup-plugin-delete": "^2.0.0",
    "rollup-plugin-dts": "^5.1.1",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    storybook: "^7.5.3",
    "storybook-addon-pseudo-states": "^2.1.2",
    "styled-components": "^5.2.0",
    "ts-loader": "^9.1.2",
    typedoc: "^0.22.12",
    typescript: "^5.0.2",
    "url-loader": "^4.1.0",
    "vite-plugin-dts": "^3.6.3",
    "vite-plugin-svgr": "^4.1.0",
    "vite-tsconfig-paths": "^4.2.1",
    vitest: "^0.34.6"
  },
  dependencies: {
    "@tippyjs/react": "^4.2.5",
    dayjs: "^1.8.34",
    "emotion-reset": "^3.0.1",
    "eslint-plugin-unused-imports": "^3.0.0",
    lodash: "^4.17.19",
    "patch-package": "^8.0.0",
    pluralize: "^8.0.0",
    polished: "^3.4.4",
    "postinstall-postinstall": "^2.1.0",
    "react-aria": "^3.26.0",
    "react-aria-components": "^1.0.0-alpha.5",
    "react-fast-compare": "^3.2.0",
    "react-highlight-words": "^0.20.0",
    "react-input-mask": "^2.0.4",
    "react-media": "^2.0.0-rc.1",
    "react-range": "^1.8.12",
    "react-switch": "^6.0.0",
    "react-textarea-autosize": "^8.5.3",
    "react-window": "^1.8.6",
    recharts: "^2.8.0",
    tslib: "^2.4.1",
    uuid: "^8.3.2",
    vite: "^4.5.0"
  },
  resolutions: {
    "react-test-renderer": "18.1.0",
    "@testing-library/user-event": "^13.5.0",
    "**/trim": "^1.0.0",
    "**/glob-parent": "^6.0.1",
    "**/postcss": "^8.4.31",
    "**/trim-newlines": "^3.0.1"
  },
  peerDependencies: {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    jackspeak: "2.1.1",
    "prop-types": "^15.7.2",
    react: "^17.0.0",
    "react-dom": "^17.0.0",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0"
  },
  scripts: {
    postinstall: "patch-package",
    prepare: "yarn build:lib && husky install",
    start: "storybook dev -p 6006",
    prebuild: "rimraf dist",
    "build:rollOneBundleDTS": "rollup -c --bundleConfigAsCjs",
    "build:lib": "vite build && yarn build:rollOneBundleDTS",
    build: "storybook build -o build/",
    lint: 'eslint "src/**/*.{ts,tsx}"',
    test: "vitest --run",
    "test:storyshots": "yarn test storybook.test.tsx --run",
    "test:watch": "vitest --watch",
    "test:update": "vitest -u",
    "documentation:generate": "typedoc --out typeDocs src",
    "documentation:up": "node server/docs-server.js",
    chromatic: "chromatic",
    "build-storybook": "yarn build",
    "yalc:push": "yalc publish --push"
  },
  keywords: [
    "Orfium",
    "typescript",
    "react",
    "styled-system",
    "emotion",
    "design system"
  ],
  repository: {
    type: "git",
    url: "git+https://github.com/Orfium/orfium-ictinus.git"
  },
  bugs: {
    url: "https://github.com/Orfium/orfium-ictinus/issues"
  },
  homepage: "https://github.com/Orfium/orfium-ictinus#readme"
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/panagiotisvourtsis/Documents/orfium/orfium-ictinus";
var regexesOfPackages = (externalPackages = []) => externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));
var plugins = [
  react({
    babel: {
      plugins: ["@emotion/babel-plugin"]
    }
  }),
  tsconfigPaths(),
  svgr(),
  dts({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    insertTypesEntry: true,
    exclude: ["__mocks__"]
  }),
  optimizeLodashImports()
];
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "REACT_APP_");
  console.log(mode);
  console.log(env);
  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    publicDir: false,
    envPrefix: "REACT_APP_",
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode)
    },
    plugins,
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
        name: package_default.name,
        // the proper extensions will be added
        fileName: "index"
      },
      minify: "esbuild",
      outDir: "dist",
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "emotion-reset",
          /@emotion\/styled/,
          /@emotion\/react/,
          ...regexesOfPackages([
            "__mocks__",
            ...Object.keys(package_default.dependencies || {}),
            ...Object.keys(package_default.peerDependencies || {})
          ])
        ]
      }
    },
    test: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      coverage: {
        provider: "v8",
        // or 'istanbul'
        exclude: [
          ...coverageConfigDefaults.exclude,
          "**/*.styles.ts",
          "**/styles.ts",
          "**/__mocks__/",
          "src/config/",
          "src/test/"
        ]
      },
      exclude: [...configDefaults.exclude]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BhbmFnaW90aXN2b3VydHNpcy9Eb2N1bWVudHMvb3JmaXVtL29yZml1bS1pY3RpbnVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcGFuYWdpb3Rpc3ZvdXJ0c2lzL0RvY3VtZW50cy9vcmZpdW0vb3JmaXVtLWljdGludXMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BhbmFnaW90aXN2b3VydHNpcy9Eb2N1bWVudHMvb3JmaXVtL29yZml1bS1pY3RpbnVzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgb3B0aW1pemVMb2Rhc2hJbXBvcnRzIH0gZnJvbSAnQG9wdGltaXplLWxvZGFzaC9yb2xsdXAtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHR5cGUgKiBhcyB2aXRlIGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCB7IGNvdmVyYWdlQ29uZmlnRGVmYXVsdHMsIGNvbmZpZ0RlZmF1bHRzIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5jb25zdCByZWdleGVzT2ZQYWNrYWdlcyA9IChleHRlcm5hbFBhY2thZ2VzID0gW10pID0+XG4gIGV4dGVybmFsUGFja2FnZXMubWFwKChwYWNrYWdlTmFtZSkgPT4gbmV3IFJlZ0V4cChgXiR7cGFja2FnZU5hbWV9KC8uKik/YCkpO1xuXG5jb25zdCBwbHVnaW5zID0gW1xuICByZWFjdCh7XG4gICAgYmFiZWw6IHtcbiAgICAgIHBsdWdpbnM6IFsnQGVtb3Rpb24vYmFiZWwtcGx1Z2luJ10sXG4gICAgfSxcbiAgfSksXG4gIHRzY29uZmlnUGF0aHMoKSxcbiAgc3ZncigpLFxuICBkdHMoe1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIGV4Y2x1ZGU6IFsnX19tb2Nrc19fJ10sXG4gIH0pLFxuICBvcHRpbWl6ZUxvZGFzaEltcG9ydHMoKSBhcyB2aXRlLlBsdWdpbixcbl07XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogeyBtb2RlOiBzdHJpbmcgfSk6IFVzZXJDb25maWcgPT4ge1xuICAvLyBMb2FkIGVudiBmaWxlIGJhc2VkIG9uIGBtb2RlYCBpbiB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS5cbiAgLy8gU2V0IHRoZSB0aGlyZCBwYXJhbWV0ZXIgdG8gJycgdG8gbG9hZCBhbGwgZW52IHJlZ2FyZGxlc3Mgb2YgdGhlIGBSRUFDVF9BUFBfYCBwcmVmaXguXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJ1JFQUNUX0FQUF8nKTtcbiAgY29uc29sZS5sb2cobW9kZSk7XG4gIGNvbnNvbGUubG9nKGVudik7XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgcHVibGljRGlyOiBmYWxzZSxcbiAgICBlbnZQcmVmaXg6ICdSRUFDVF9BUFBfJyxcbiAgICAvLyBEZWZpbmUgdGhlc2UgdG8ga2VlcCBjb21wYXRpYmlsaXR5IHdpdGggaWN0aW51cywgdG9vbGJveCBhbmQgU1NPXG4gICAgZGVmaW5lOiB7XG4gICAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShtb2RlKSxcbiAgICB9LFxuICAgIHBsdWdpbnMsXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgICBuYW1lOiBwa2cubmFtZSxcbiAgICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICB9LFxuICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgICBvdXREaXI6ICdkaXN0JyxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgICAncmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nLFxuICAgICAgICAgICdlbW90aW9uLXJlc2V0JyxcbiAgICAgICAgICAvQGVtb3Rpb25cXC9zdHlsZWQvLFxuICAgICAgICAgIC9AZW1vdGlvblxcL3JlYWN0LyxcbiAgICAgICAgICAuLi5yZWdleGVzT2ZQYWNrYWdlcyhbXG4gICAgICAgICAgICAnX19tb2Nrc19fJyxcbiAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMgfHwge30pLFxuICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMocGtnLnBlZXJEZXBlbmRlbmNpZXMgfHwge30pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICAgIGdsb2JhbHM6IHRydWUsXG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0L3NldHVwLnRzJyxcbiAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgIHByb3ZpZGVyOiAndjgnLCAvLyBvciAnaXN0YW5idWwnXG4gICAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgICAuLi5jb3ZlcmFnZUNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsXG4gICAgICAgICAgJyoqLyouc3R5bGVzLnRzJyxcbiAgICAgICAgICAnKiovc3R5bGVzLnRzJyxcbiAgICAgICAgICAnKiovX19tb2Nrc19fLycsXG4gICAgICAgICAgJ3NyYy9jb25maWcvJyxcbiAgICAgICAgICAnc3JjL3Rlc3QvJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZV0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwiQG9yZml1bS9pY3RpbnVzXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC51bWQuanNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBmYWxzZSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFtYW5kYS1taXRjaGVsbC9zZW1hbnRpYy1yZWxlYXNlLW5wbS1tdWx0aXBsZVwiOiBcIl4zLjkuMFwiLFxuICAgIFwiQGNvbW1pdGxpbnQvY2xpXCI6IFwiXjE3LjcuMlwiLFxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xNy43LjBcIixcbiAgICBcIkBlbW90aW9uL2JhYmVsLXBsdWdpblwiOiBcIl4xMS4xMS4wXCIsXG4gICAgXCJAZW1vdGlvbi9iYWJlbC1wcmVzZXQtY3NzLXByb3BcIjogXCJeMTEuMTEuMFwiLFxuICAgIFwiQGVtb3Rpb24vZXNsaW50LXBsdWdpblwiOiBcIl4xMS4xMS4wXCIsXG4gICAgXCJAZW1vdGlvbi9qZXN0XCI6IFwiXjExLjExLjBcIixcbiAgICBcIkBlbW90aW9uL3JlYWN0XCI6IFwiXjExLjExLjFcIixcbiAgICBcIkBlbW90aW9uL3N0eWxlZFwiOiBcIl4xMS4xMS4wXCIsXG4gICAgXCJAb3B0aW1pemUtbG9kYXNoL3JvbGx1cC1wbHVnaW5cIjogXCJeNC4wLjFcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZVwiOiBcIl4xNS4wLjFcIixcbiAgICBcIkBzZW1hbnRpYy1yZWxlYXNlL2NoYW5nZWxvZ1wiOiBcIl42LjAuM1wiLFxuICAgIFwiQHNlbWFudGljLXJlbGVhc2UvZ2l0XCI6IFwiXjEwLjAuMVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hMTF5XCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjogXCJeNy41LjNcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZGVzaWduc1wiOiBcIl43LjAuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1kb2NzXCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWtub2JzXCI6IFwiXjcuMC4yXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLW1keC1nZm1cIjogXCJeNy41LjNcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tc3Rvcnlzb3VyY2VcIjogXCJeNy41LjNcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tdGhlbWVzXCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLXZpZXdwb3J0XCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uc1wiOiBcIl43LjUuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9ibG9ja3NcIjogXCJeNy41LjNcIixcbiAgICBcIkBzdG9yeWJvb2svYnVpbGRlci12aXRlXCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2NsaVwiOiBcIl43LjUuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9tYW5hZ2VyLWFwaVwiOiBcIl43LjUuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9wcmVzZXQtdHlwZXNjcmlwdFwiOiBcIl4zLjAuMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9wcmV2aWV3LWFwaVwiOiBcIl43LjUuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjUuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuNS4zXCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3QtcnVubmVyXCI6IFwiXjAuMTQuMC1uZXh0LjJcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdGluZy1saWJyYXJ5XCI6IFwiXjAuMi4yXCIsXG4gICAgXCJAc3Rvcnlib29rL3RoZW1pbmdcIjogXCJeNy41LjNcIixcbiAgICBcIkBzdmdyL3dlYnBhY2tcIjogXCJeOC4xLjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvZG9tXCI6IFwiXjkuMy4zXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuMS40XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjAuMFwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdC1ob29rc1wiOiBcIl44LjAuMVwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS91c2VyLWV2ZW50XCI6IFwiXjEzLjUuMFwiLFxuICAgIFwiQHR5cGVzL2V2ZW50c1wiOiBcIl4zLjAuMFwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE0LjE0OVwiLFxuICAgIFwiQHR5cGVzL3BsdXJhbGl6ZVwiOiBcIl4wLjAuMjlcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjIxXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjIuN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWhpZ2hsaWdodC13b3Jkc1wiOiBcIl4wLjE2LjVcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1pbnB1dC1tYXNrXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJAdHlwZXMvcmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjMuM1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LXRlc3QtcmVuZGVyZXJcIjogXCJeMTguMC4zXCIsXG4gICAgXCJAdHlwZXMvcmVjaGFydHNcIjogXCJeMS44LjI1XCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNS4xLjdcIixcbiAgICBcIkB0eXBlcy91dWlkXCI6IFwiXjguMy4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4xLjBcIixcbiAgICBcIkB2aXRlc3QvY292ZXJhZ2UtdjhcIjogXCJeMC4zNC42XCIsXG4gICAgXCJjaHJvbWF0aWNcIjogXCJeNy41LjBcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjcuMzIuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl44LjUuMFwiLFxuICAgIFwiZXNsaW50LWltcG9ydC1yZXNvbHZlci10eXBlc2NyaXB0XCI6IFwiXjMuMi40XCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI3LjVcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4yOS40XCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0b3J5Ym9va1wiOiBcIl4wLjYuMTVcIixcbiAgICBcImV4cHJlc3NcIjogXCJeNC4xNy4zXCIsXG4gICAgXCJoaXN0b3J5XCI6IFwiXjQuMTAuMVwiLFxuICAgIFwiaHVza3lcIjogXCJeNi4wLjBcIixcbiAgICBcImlkZW50aXR5LW9iai1wcm94eVwiOiBcIl4zLjAuMFwiLFxuICAgIFwianNkb21cIjogXCJeMjIuMS4wXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xMS4wLjBcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjIuNi4yXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LXJvdXRlclwiOiBcIl41LjMuNFwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjMuNFwiLFxuICAgIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJpbXJhZlwiOiBcIl4zLjAuMlwiLFxuICAgIFwicm9sbHVwXCI6IFwiMy45LjFcIixcbiAgICBcInJvbGx1cC1wbHVnaW4tZGVsZXRlXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLWR0c1wiOiBcIl41LjEuMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1wZWVyLWRlcHMtZXh0ZXJuYWxcIjogXCJeMi4yLjRcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl43LjUuM1wiLFxuICAgIFwic3Rvcnlib29rLWFkZG9uLXBzZXVkby1zdGF0ZXNcIjogXCJeMi4xLjJcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJ0cy1sb2FkZXJcIjogXCJeOS4xLjJcIixcbiAgICBcInR5cGVkb2NcIjogXCJeMC4yMi4xMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjAuMlwiLFxuICAgIFwidXJsLWxvYWRlclwiOiBcIl40LjEuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNi4zXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1zdmdyXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMi4xXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4zNC42XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHRpcHB5anMvcmVhY3RcIjogXCJeNC4yLjVcIixcbiAgICBcImRheWpzXCI6IFwiXjEuOC4zNFwiLFxuICAgIFwiZW1vdGlvbi1yZXNldFwiOiBcIl4zLjAuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi11bnVzZWQtaW1wb3J0c1wiOiBcIl4zLjAuMFwiLFxuICAgIFwibG9kYXNoXCI6IFwiXjQuMTcuMTlcIixcbiAgICBcInBhdGNoLXBhY2thZ2VcIjogXCJeOC4wLjBcIixcbiAgICBcInBsdXJhbGl6ZVwiOiBcIl44LjAuMFwiLFxuICAgIFwicG9saXNoZWRcIjogXCJeMy40LjRcIixcbiAgICBcInBvc3RpbnN0YWxsLXBvc3RpbnN0YWxsXCI6IFwiXjIuMS4wXCIsXG4gICAgXCJyZWFjdC1hcmlhXCI6IFwiXjMuMjYuMFwiLFxuICAgIFwicmVhY3QtYXJpYS1jb21wb25lbnRzXCI6IFwiXjEuMC4wLWFscGhhLjVcIixcbiAgICBcInJlYWN0LWZhc3QtY29tcGFyZVwiOiBcIl4zLjIuMFwiLFxuICAgIFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCI6IFwiXjAuMjAuMFwiLFxuICAgIFwicmVhY3QtaW5wdXQtbWFza1wiOiBcIl4yLjAuNFwiLFxuICAgIFwicmVhY3QtbWVkaWFcIjogXCJeMi4wLjAtcmMuMVwiLFxuICAgIFwicmVhY3QtcmFuZ2VcIjogXCJeMS44LjEyXCIsXG4gICAgXCJyZWFjdC1zd2l0Y2hcIjogXCJeNi4wLjBcIixcbiAgICBcInJlYWN0LXRleHRhcmVhLWF1dG9zaXplXCI6IFwiXjguNS4zXCIsXG4gICAgXCJyZWFjdC13aW5kb3dcIjogXCJeMS44LjZcIixcbiAgICBcInJlY2hhcnRzXCI6IFwiXjIuOC4wXCIsXG4gICAgXCJ0c2xpYlwiOiBcIl4yLjQuMVwiLFxuICAgIFwidXVpZFwiOiBcIl44LjMuMlwiLFxuICAgIFwidml0ZVwiOiBcIl40LjUuMFwiXG4gIH0sXG4gIFwicmVzb2x1dGlvbnNcIjoge1xuICAgIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiOiBcIjE4LjEuMFwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS91c2VyLWV2ZW50XCI6IFwiXjEzLjUuMFwiLFxuICAgIFwiKiovdHJpbVwiOiBcIl4xLjAuMFwiLFxuICAgIFwiKiovZ2xvYi1wYXJlbnRcIjogXCJeNi4wLjFcIixcbiAgICBcIioqL3Bvc3Rjc3NcIjogXCJeOC40LjMxXCIsXG4gICAgXCIqKi90cmltLW5ld2xpbmVzXCI6IFwiXjMuMC4xXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlbW90aW9uL3JlYWN0XCI6IFwiXjExLjExLjFcIixcbiAgICBcIkBlbW90aW9uL3N0eWxlZFwiOiBcIl4xMS4xMS4wXCIsXG4gICAgXCJqYWNrc3BlYWtcIjogXCIyLjEuMVwiLFxuICAgIFwicHJvcC10eXBlc1wiOiBcIl4xNS43LjJcIixcbiAgICBcInJlYWN0XCI6IFwiXjE3LjAuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE3LjAuMFwiLFxuICAgIFwicmVhY3Qtcm91dGVyXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMi4wXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwicGF0Y2gtcGFja2FnZVwiLFxuICAgIFwicHJlcGFyZVwiOiBcInlhcm4gYnVpbGQ6bGliICYmIGh1c2t5IGluc3RhbGxcIixcbiAgICBcInN0YXJ0XCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJwcmVidWlsZFwiOiBcInJpbXJhZiBkaXN0XCIsXG4gICAgXCJidWlsZDpyb2xsT25lQnVuZGxlRFRTXCI6IFwicm9sbHVwIC1jIC0tYnVuZGxlQ29uZmlnQXNDanNcIixcbiAgICBcImJ1aWxkOmxpYlwiOiBcInZpdGUgYnVpbGQgJiYgeWFybiBidWlsZDpyb2xsT25lQnVuZGxlRFRTXCIsXG4gICAgXCJidWlsZFwiOiBcInN0b3J5Ym9vayBidWlsZCAtbyBidWlsZC9cIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgXFxcInNyYy8qKi8qLnt0cyx0c3h9XFxcIlwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCAtLXJ1blwiLFxuICAgIFwidGVzdDpzdG9yeXNob3RzXCI6IFwieWFybiB0ZXN0IHN0b3J5Ym9vay50ZXN0LnRzeCAtLXJ1blwiLFxuICAgIFwidGVzdDp3YXRjaFwiOiBcInZpdGVzdCAtLXdhdGNoXCIsXG4gICAgXCJ0ZXN0OnVwZGF0ZVwiOiBcInZpdGVzdCAtdVwiLFxuICAgIFwiZG9jdW1lbnRhdGlvbjpnZW5lcmF0ZVwiOiBcInR5cGVkb2MgLS1vdXQgdHlwZURvY3Mgc3JjXCIsXG4gICAgXCJkb2N1bWVudGF0aW9uOnVwXCI6IFwibm9kZSBzZXJ2ZXIvZG9jcy1zZXJ2ZXIuanNcIixcbiAgICBcImNocm9tYXRpY1wiOiBcImNocm9tYXRpY1wiLFxuICAgIFwiYnVpbGQtc3Rvcnlib29rXCI6IFwieWFybiBidWlsZFwiLFxuICAgIFwieWFsYzpwdXNoXCI6IFwieWFsYyBwdWJsaXNoIC0tcHVzaFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiT3JmaXVtXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCIsXG4gICAgXCJyZWFjdFwiLFxuICAgIFwic3R5bGVkLXN5c3RlbVwiLFxuICAgIFwiZW1vdGlvblwiLFxuICAgIFwiZGVzaWduIHN5c3RlbVwiXG4gIF0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL09yZml1bS9vcmZpdW0taWN0aW51cy5naXRcIlxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09yZml1bS9vcmZpdW0taWN0aW51cy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09yZml1bS9vcmZpdW0taWN0aW51cyNyZWFkbWVcIlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sVUFBVTtBQUVqQixTQUFTLDZCQUE2QjtBQUN0QyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxjQUFjLGVBQWU7QUFHdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHdCQUF3QixzQkFBc0I7OztBQ1p2RDtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsaUJBQW1CO0FBQUEsSUFDakIsa0RBQWtEO0FBQUEsSUFDbEQsbUJBQW1CO0FBQUEsSUFDbkIsbUNBQW1DO0FBQUEsSUFDbkMseUJBQXlCO0FBQUEsSUFDekIsa0NBQWtDO0FBQUEsSUFDbEMsMEJBQTBCO0FBQUEsSUFDMUIsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsbUJBQW1CO0FBQUEsSUFDbkIsa0NBQWtDO0FBQUEsSUFDbEMsK0JBQStCO0FBQUEsSUFDL0IsK0JBQStCO0FBQUEsSUFDL0IseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIsNEJBQTRCO0FBQUEsSUFDNUIsNEJBQTRCO0FBQUEsSUFDNUIseUJBQXlCO0FBQUEsSUFDekIsMEJBQTBCO0FBQUEsSUFDMUIsMEJBQTBCO0FBQUEsSUFDMUIsNEJBQTRCO0FBQUEsSUFDNUIsZ0NBQWdDO0FBQUEsSUFDaEMsMkJBQTJCO0FBQUEsSUFDM0IsNkJBQTZCO0FBQUEsSUFDN0IscUJBQXFCO0FBQUEsSUFDckIscUJBQXFCO0FBQUEsSUFDckIsMkJBQTJCO0FBQUEsSUFDM0Isa0JBQWtCO0FBQUEsSUFDbEIsMEJBQTBCO0FBQUEsSUFDMUIsZ0NBQWdDO0FBQUEsSUFDaEMsMEJBQTBCO0FBQUEsSUFDMUIsb0JBQW9CO0FBQUEsSUFDcEIseUJBQXlCO0FBQUEsSUFDekIsMEJBQTBCO0FBQUEsSUFDMUIsOEJBQThCO0FBQUEsSUFDOUIsc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsSUFDakIsd0JBQXdCO0FBQUEsSUFDeEIsNkJBQTZCO0FBQUEsSUFDN0IsMEJBQTBCO0FBQUEsSUFDMUIsZ0NBQWdDO0FBQUEsSUFDaEMsK0JBQStCO0FBQUEsSUFDL0IsaUJBQWlCO0FBQUEsSUFDakIsaUJBQWlCO0FBQUEsSUFDakIsb0JBQW9CO0FBQUEsSUFDcEIsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsZ0NBQWdDO0FBQUEsSUFDaEMsMkJBQTJCO0FBQUEsSUFDM0IsMkJBQTJCO0FBQUEsSUFDM0IsOEJBQThCO0FBQUEsSUFDOUIsbUJBQW1CO0FBQUEsSUFDbkIsNEJBQTRCO0FBQUEsSUFDNUIsZUFBZTtBQUFBLElBQ2Ysb0NBQW9DO0FBQUEsSUFDcEMsNkJBQTZCO0FBQUEsSUFDN0Isd0JBQXdCO0FBQUEsSUFDeEIsdUJBQXVCO0FBQUEsSUFDdkIsV0FBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsUUFBVTtBQUFBLElBQ1YsMEJBQTBCO0FBQUEsSUFDMUIscUNBQXFDO0FBQUEsSUFDckMsd0JB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
