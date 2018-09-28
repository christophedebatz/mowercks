import IMoveableObject from '../interfaces/IMoveableObject';
import { default as Position, Direction, Instruction } from './Position';
import IMap from '../interfaces/IMap';

export default class Mower implements IMoveableObject {

  private readonly _lawn: IMap;
  private readonly _id: number;
  private _position: Position;

  constructor (lawn: IMap, position: Position, id: number) {
    this._lawn = lawn;
    this._position = position;
    this._id = id;
  }

  public getId (): number {
    return this._id;
  }

  public move (instruction: Instruction): Position {
    const nextPosition: Position = this.getNextPosition(instruction);
    if (this._lawn.intersectMap(nextPosition)) {
      this._position = nextPosition;
    }
    return this._position;
  }

  private getNextPosition (instruction: Instruction): Position {
    let nextDirection: Direction = null;
    let nextX: number = this._position.x;
    let nextY: number = this._position.y;

    switch (this._position.direction) {
      case Direction.East:
        nextDirection = instruction === Instruction.Left ? Direction.North : Direction.South;
        nextX = instruction === Instruction.Forward ? this._position.x + 1 : this._position.x;
        break;
      case Direction.West:
        nextDirection = instruction === Instruction.Left ? Direction.South : Direction.North;
        nextX = instruction === Instruction.Forward ? this._position.x - 1 : this._position.x;
        break;
      case Direction.South:
        nextDirection = instruction === Instruction.Left ? Direction.East : Direction.West;
        nextY = instruction === Instruction.Forward ? this._position.y - 1 : this._position.y;
        break;
      default:
        nextDirection = instruction === Instruction.Left ? Direction.West : Direction.East;
        nextY = instruction === Instruction.Forward ? this._position.y + 1 : this._position.y;
        break;
    }
    if (instruction === Instruction.Forward) {
      nextDirection = this._position.direction;
    }
    return new Position(nextX, nextY, nextDirection);
  }
}