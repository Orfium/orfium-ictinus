const transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const spacingReplaceMap = {
    'theme.spacing.xsm': "theme.globals.spacing.get('3')",
    'theme.spacing.sm': "theme.globals.spacing.get('4')",
    'theme.spacing.md': "theme.globals.spacing.get('6')",
    'theme.spacing.lg': "theme.globals.spacing.get('8')",
    'theme.spacing.xl': "theme.globals.spacing.get('9')",
    'props.theme.spacing.xsm': "props.theme.globals.spacing.get('3')",
    'props.theme.spacing.sm': "props.theme.globals.spacing.get('4')",
    'props.theme.spacing.md': "props.theme.globals.spacing.get('6')",
    'props.theme.spacing.lg': "props.theme.globals.spacing.get('8')",
    'props.theme.spacing.xl': "props.theme.globals.spacing.get('9')",
    'theme.typography.weights.regular': "theme.globals.typography.fontWeight.get('regular')",
    'theme.typography.weights.medium': "theme.globals.typography.fontWeight.get('medium')",
    'theme.typography.weights.bold': "theme.globals.typography.fontWeight.get('bold')",
    'props.theme.typography.weights.regular':
      "props.theme.globals.typography.fontWeight.get('regular')",
    'props.theme.typography.weights.medium':
      "props.theme.globals.typography.fontWeight.get('medium')",
    'props.theme.typography.weights.bold': "props.theme.globals.typography.fontWeight.get('bold')",
    "theme.typography.fontSizes['10']": "theme.globals.typography.fontSize.get('1')",
    "theme.typography.fontSizes['11']": "theme.globals.typography.fontSize.get('1')",
    "theme.typography.fontSizes['12']": "theme.globals.typography.fontSize.get('2')",
    "theme.typography.fontSizes['13']": "theme.globals.typography.fontSize.get('3')",
    "theme.typography.fontSizes['14']": "theme.globals.typography.fontSize.get('3')",
    "theme.typography.fontSizes['15']": "theme.globals.typography.fontSize.get('4')",
    "theme.typography.fontSizes['16']": "theme.globals.typography.fontSize.get('4')",
    "theme.typography.fontSizes['20']": "theme.globals.typography.fontSize.get('7')",
    "theme.typography.fontSizes['22']": "theme.globals.typography.fontSize.get('7')",
    "theme.typography.fontSizes['24']": "theme.globals.typography.fontSize.get('8')",
    "theme.typography.fontSizes['28']": "theme.globals.typography.fontSize.get('9')",
    "theme.typography.fontSizes['32']": "theme.globals.typography.fontSize.get('10')",
    'theme.typography.fontSizes[10]': "theme.globals.typography.fontSize.get('1')",
    'theme.typography.fontSizes[11]': "theme.globals.typography.fontSize.get('1')",
    'theme.typography.fontSizes[12]': "theme.globals.typography.fontSize.get('2')",
    'theme.typography.fontSizes[13]': "theme.globals.typography.fontSize.get('3')",
    'theme.typography.fontSizes[14]': "theme.globals.typography.fontSize.get('3')",
    'theme.typography.fontSizes[15]': "theme.globals.typography.fontSize.get('4')",
    'theme.typography.fontSizes[16]': "theme.globals.typography.fontSize.get('4')",
    'theme.typography.fontSizes[20]': "theme.globals.typography.fontSize.get('7')",
    'theme.typography.fontSizes[22]': "theme.globals.typography.fontSize.get('7')",
    'theme.typography.fontSizes[24]': "theme.globals.typography.fontSize.get('8')",
    'theme.typography.fontSizes[28]': "theme.globals.typography.fontSize.get('9')",
    'theme.typography.fontSizes[32]': "theme.globals.typography.fontSize.get('10')",

    "props.theme.typography.fontSizes['10']": "props.theme.globals.typography.fontSize.get('1')",
    "props.theme.typography.fontSizes['11']": "props.theme.globals.typography.fontSize.get('1')",
    "props.theme.typography.fontSizes['12']": "props.theme.globals.typography.fontSize.get('2')",
    "props.theme.typography.fontSizes['13']": "props.theme.globals.typography.fontSize.get('3')",
    "props.theme.typography.fontSizes['14']": "props.theme.globals.typography.fontSize.get('3')",
    "props.theme.typography.fontSizes['15']": "props.theme.globals.typography.fontSize.get('4')",
    "props.theme.typography.fontSizes['16']": "props.theme.globals.typography.fontSize.get('4')",
    "props.theme.typography.fontSizes['20']": "props.theme.globals.typography.fontSize.get('7')",
    "props.theme.typography.fontSizes['22']": "props.theme.globals.typography.fontSize.get('7')",
    "props.theme.typography.fontSizes['24']": "props.theme.globals.typography.fontSize.get('8')",
    "props.theme.typography.fontSizes['28']": "props.theme.globals.typography.fontSize.get('9')",
    "props.theme.typography.fontSizes['32']": "props.theme.globals.typography.fontSize.get('10')",
    'props.theme.typography.fontSizes[10]': "props.theme.globals.typography.fontSize.get('1')",
    'props.theme.typography.fontSizes[11]': "props.theme.globals.typography.fontSize.get('1')",
    'props.theme.typography.fontSizes[12]': "props.theme.globals.typography.fontSize.get('2')",
    'props.theme.typography.fontSizes[13]': "props.theme.globals.typography.fontSize.get('3')",
    'props.theme.typography.fontSizes[14]': "props.theme.globals.typography.fontSize.get('3')",
    'props.theme.typography.fontSizes[15]': "props.theme.globals.typography.fontSize.get('4')",
    'props.theme.typography.fontSizes[16]': "props.theme.globals.typography.fontSize.get('4')",
    'props.theme.typography.fontSizes[20]': "props.theme.globals.typography.fontSize.get('7')",
    'props.theme.typography.fontSizes[22]': "props.theme.globals.typography.fontSize.get('7')",
    'props.theme.typography.fontSizes[24]': "props.theme.globals.typography.fontSize.get('8')",
    'props.theme.typography.fontSizes[28]': "props.theme.globals.typography.fontSize.get('9')",
    'props.theme.typography.fontSizes[32]': "props.theme.globals.typography.fontSize.get('10')",

    "theme.elevation['01']": "theme.globals.elevation['01']",
    "theme.elevation['02']": "theme.globals.elevation['02']",
    "theme.elevation['03']": "theme.globals.elevation['03']",
    "props.theme.elevation['01']": "props.theme.globals.elevation['01']",
    "props.theme.elevation['02']": "props.theme.globals.elevation['02']",
    "props.theme.elevation['03']": "props.theme.globals.elevation['03']",

    'theme.palette.white': 'theme.globals.oldColors.white',
    'theme.palette.black': 'theme.globals.oldColors.black',
    "theme.palette['white']": "theme.globals.oldColors['white']",
    "theme.palette['black']": "theme.globals.oldColors['black']",
    'theme.palette.primary[400]': 'theme.globals.oldColors.primary[400]',
    'props.theme.palette.white': 'props.theme.globals.oldColors.white',
    'props.theme.palette.black': 'props.theme.globals.oldColors.black',
    "props.theme.palette['white']": "props.theme.globals.oldColors['white']",
    "props.theme.palette['black']": "props.theme.globals.oldColors['black']",
    'props.theme.palette.primary[400]': 'props.theme.globals.oldColors.primary[400]',
  };

  // Function to create a replacement expression from a string
  const createReplacementExpression = (replacement) => {
    const parts = replacement.split('.');
    let expression = j.identifier(parts[0]);

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      if (part.includes('(')) {
        // Handle method calls like get('9')
        const methodName = part.substring(0, part.indexOf('('));
        const methodArgsStr = part.substring(part.indexOf('(') + 1, part.lastIndexOf(')'));
        const args = methodArgsStr.split(',').map((arg) => {
          // Remove the surrounding quotes
          const trimmedArg = arg.trim().replace(/^['"]|['"]$/g, '');

          return j.literal(trimmedArg);
        });
        expression = j.callExpression(
          j.memberExpression(expression, j.identifier(methodName)),
          args
        );
      } else {
        expression = j.memberExpression(expression, j.identifier(part));
      }
    }

    return expression;
  };

  // Replace member expressions
  root.find(j.MemberExpression).forEach((path) => {
    let sourceCode = j(path).toSource();

    // Special handling for numeric index
    if (path.node.property.type === 'Literal' && !isNaN(path.node.property.value)) {
      sourceCode = `${j(path.node.object).toSource()}[${path.node.property.value}]`;
    }

    if (spacingReplaceMap[sourceCode]) {
      const newExpression = createReplacementExpression(spacingReplaceMap[sourceCode]);
      j(path).replaceWith(newExpression);
    }
  });

  // Replace import paths
  root.find(j.ImportDeclaration).forEach((path) => {
    if (path.node.source.value.startsWith('@orfium/ictinus/')) {
      path.node.source.value = '@orfium/ictinus';
    }
  });

  return root.toSource();
};
export default transform;
