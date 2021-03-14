export class Transform {
  constructor(origin, current) {
    this.origin = origin;
    this.current = current;
  }

  get translate() {
    return {
      x: this.current.get("x") - this.origin.get("x"),
      y: this.current.get("y") - this.origin.get("y"),
    };
  }
}
