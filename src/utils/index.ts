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

export function drawFillImageToCanvas(
  img: HTMLImageElement,
  ctx: CanvasRenderingContext2D
) {
  const canvas = ctx.canvas;
  var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  var x = canvas.width / 2 - (img.width / 2) * scale;
  var y = canvas.height / 2 - (img.height / 2) * scale;
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

export function drawCanvasBackgroundImage(
  ctx: CanvasRenderingContext2D,
  imgElement: HTMLImageElement
) {
  ctx.imageSmoothingEnabled = false;
  if (imgElement.complete && imgElement.naturalHeight !== 0) {
    drawFillImageToCanvas(imgElement, ctx);
  }
  imgElement.onload = () => {
    drawFillImageToCanvas(imgElement, ctx);
  };
}
