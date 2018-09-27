export default class Position {

  private readonly _x: number;
  private readonly _y: number;
  private readonly _angle: number;

  constructor (x: number, y: number, angle: number) {
    this._x = x;
    this._y = y;
    this._angle = angle;
  }

  public get x () {
    return this._x;
  }

  public get y () {
    return this._y;
  }

  public get angle (): number {
    return this._angle;
  }

}

export enum Instruction {

  Left,
  Right,
  Forward

}

export enum Direction {

  North,
  East,
  West,
  South

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

  public static computeInstruction (position: Position, instruction: Instruction): Position {
    if (instruction === Instruction.Left) {
      switch (position) {
        case
      }
    }
  }

}