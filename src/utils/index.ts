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

export function saveToLocalStorage(obj: any) {
  Object.keys(obj).forEach((key) =>
    localStorage.setItem(key, JSON.stringify(obj[key]))
  );
}

export function getFromLocalStorage(key: string) {
  const val = localStorage.getItem(key);
  return val && JSON.parse(val);
}
