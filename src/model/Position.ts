export default class Position {

  private readonly _x: number;
  private readonly _y: number;
  private readonly _direction: Direction;

  constructor (x: number, y: number, direction: Direction) {
    this._x = x;
    this._y = y;
    this._direction = direction;
  }

  public get x () {
    return this._x;
  }

  public get y () {
    return this._y;
  }

  public get direction (): Direction {
    return this._direction;
  }

  public toString (): string {
    return `(X: ${this.x}, Y: ${this.y}, ${this.direction})`
  }
}

export enum Instruction {

  Left = 'left',
  Right = 'right',
  Forward = 'forward'

}

export enum Direction {

  North = 'N',
  East = 'E',
  West = 'W',
  South = 'S'

}

export class PositionHelper {

  public static mapDirection (direction: string): Direction {
    switch (direction.toUpperCase()) {
      case 'N': return Direction.North;
      case 'E': return Direction.East;
      case 'W': return Direction.West;
      case 'S': return Direction.South;
      default: throw new Error('invalid.direction.format');
    }
  }

  public static mapInstruction (instruction: string): Instruction {
    switch (instruction.toUpperCase()) {
      case 'L': return Instruction.Left;
      case 'R': return Instruction.Right;
      case 'F': return Instruction.Forward;
      default: throw new Error('invalid.instruction.format');
    }
  }

}