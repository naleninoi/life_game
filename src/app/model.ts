export class Cell {
  id: number;
  row: number;
  col: number;
  isAlive: boolean;
  nbrs: any;

  constructor(id: number, row: number, col: number, isAlive: boolean, nbrs: any) {
    this.id = id;
    this.row = row;
    this.col = col;
    this.isAlive = false;
    this.nbrs = [];
  }
}

export class NbrCell {
  row: number;
  col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}
