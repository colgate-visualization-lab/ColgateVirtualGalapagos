export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export function toTitleCase(
  text: string,
  delimiter: string,
  toDelimiter: string
) {
  return text
    .split(delimiter)
    .map((w) => capitalize(w))
    .join(toDelimiter || delimiter);
}
