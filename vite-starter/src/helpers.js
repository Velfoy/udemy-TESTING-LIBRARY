export function kebabToCamelCase(colorName) {
  const colorWithSpaces = colorName.replaceAll("-", " ");
  const colorsCapitalized = colorWithSpaces.replaceAll(/\b[a-z]/g, (letter) =>
    letter.toUpperCase()
  );
  return colorsCapitalized;
}
