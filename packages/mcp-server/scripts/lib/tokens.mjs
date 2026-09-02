import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { extractExportedConstObject, flattenTokens } from './parse.mjs';

/**
 * @param {string} repoRoot
 */
export async function generateTokens(repoRoot) {
  const tokensDir = join(repoRoot, 'packages/tokens/src/tokens');
  const semanticDir = join(
    repoRoot,
    'packages/tokens/src/theme/tokens/semantic/variables',
  );

  const [
    colorsSrc,
    spacingSrc,
    sizingSrc,
    borderRadiusSrc,
    borderWidthSrc,
    fontSizeSrc,
    fontWeightSrc,
    fontFamilySrc,
    letterSpacingSrc,
    lineHeightSrc,
    semanticColorsSrc,
    boxShadowSrc,
  ] = await Promise.all([
    readFile(join(tokensDir, 'color.ts'), 'utf8'),
    readFile(join(tokensDir, 'spacing.ts'), 'utf8'),
    readFile(join(tokensDir, 'sizing.ts'), 'utf8'),
    readFile(join(tokensDir, 'borderRadius.ts'), 'utf8'),
    readFile(join(tokensDir, 'borderWidth.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontSize.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontWeight.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontFamily.ts'), 'utf8'),
    readFile(join(tokensDir, 'letterSpacing.ts'), 'utf8'),
    readFile(join(tokensDir, 'lineHeight.ts'), 'utf8'),
    readFile(join(semanticDir, 'colors.ts'), 'utf8'),
    readFile(join(semanticDir, 'boxShadow.ts'), 'utf8'),
  ]);

  const colors = flattenTokens(extractExportedConstObject(colorsSrc, 'colors') ?? {});
  const spacing = flattenTokens(extractExportedConstObject(spacingSrc, 'spacing') ?? {});
  const sizing = flattenTokens(extractExportedConstObject(sizingSrc, 'sizing') ?? {});
  const borderRadius = flattenTokens(
    extractExportedConstObject(borderRadiusSrc, 'borderRadius') ?? {},
  );
  const borderWidth = flattenTokens(
    extractExportedConstObject(borderWidthSrc, 'borderWidth') ?? {},
  );
  const fontSize = flattenTokens(extractExportedConstObject(fontSizeSrc, 'fontSize') ?? {});
  const fontWeight = flattenTokens(
    extractExportedConstObject(fontWeightSrc, 'fontWeight') ?? {},
  );
  const fontFamily = flattenTokens(
    extractExportedConstObject(fontFamilySrc, 'fontFamily') ?? {},
  );
  const letterSpacing = flattenTokens(
    extractExportedConstObject(letterSpacingSrc, 'letterSpacing') ?? {},
  );
  const lineHeight = flattenTokens(
    extractExportedConstObject(lineHeightSrc, 'lineHeight') ?? {},
  );

  const semanticColors = flattenTokens(
    extractExportedConstObject(semanticColorsSrc, 'colors') ?? {},
  );
  const boxShadow = flattenTokens(
    extractExportedConstObject(boxShadowSrc, 'boxShadow') ?? {},
  );

  return {
    colors,
    spacing,
    sizing,
    borderRadius,
    borderWidth,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    lineHeight,
    semanticColors,
    boxShadow,
  };
}
