import IMoveableObject from './IMoveableObject';
import { Instruction, default as Position} from './Position';
import Lawn from './Lawn';

export default class Mower implements IMoveableObject {

  private readonly _position: Position;
  private readonly _lawn: Lawn;
  private readonly _id: number;

  constructor (lawn: Lawn, position: Position, id: number) {
    this._lawn = lawn;
    this._position = position;
    this._id = id;
  }

  public move (instruction: Instruction): Position {
    // compute next future position according to instruction
    // for (let x = 0; x < this._lawn.width; x++) {
    //   for (let y = 0; y < this._lawn.height; y++) {
    //     const
    //   }
    // }
    if (instruction === Instruction.Right) {
      this._position.direction = D
    }
    return null;
  }

  public getId (): number {
    return this._id;
  }

  public getPosition (): Position {
    return undefined;
  }

}