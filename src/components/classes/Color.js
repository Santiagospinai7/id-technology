export class Color {
  static colors = [];
  
  constructor(color) {
    this.name = color.name;
    this.code = color.code;
    Color.colors.push(color);
  }

  static getColor(nameColor) {
    const color = Color.colors.find(color => color.name === nameColor);

    if (!color) {
      throw new Error(`Color ${nameColor} not found`);
    }

    return color.code;
  }
}
