export default class Chesspiece {
  constructor(color, type, coordinates) {
    this.color = color;
    this.type = type;
    this.row = coordinates.x;
    this.column = coordinates.y;
  }
}
