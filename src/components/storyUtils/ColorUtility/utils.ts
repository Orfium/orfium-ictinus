export function validateColor(colorInput: string): boolean {
  const optionStyleDeclaration = new Option().style;
  optionStyleDeclaration.color = colorInput;

  return Boolean(optionStyleDeclaration.color);
}

export function getPercentage(value: number): string {
  return `${value * 100}%`;
}
