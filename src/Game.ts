import Mower from './model/Mower';
import Lawn from './model/Lawn';
import Position, { Instruction } from './model/Position';
import IMoveableObject from './interfaces/IMoveableObject';
import GameConfigReader from './GameConfigReader';

export default class Game {

  private readonly _mowers = new Map<number, IMoveableObject>();
  private _lawn: Lawn;

  constructor () {
    this.initializeMap = this.initializeMap.bind(this);
    this.addMoveableObject = this.addMoveableObject.bind(this);
    this.executeInstruction = this.executeInstruction.bind(this);
  }

  public play (file: string): void {
    const reader = new GameConfigReader(file);
    reader.on('map', this.initializeMap);
    reader.on('object', this.addMoveableObject);
    reader.on('instruction', this.executeInstruction);
  }

  private initializeMap (width: number, height: number): void {
    this._lawn = new Lawn(width, height);
  }

  private addMoveableObject (id: number, position: Position): IMoveableObject {
    const mower: IMoveableObject = new Mower(this._lawn, position, id);
    this._mowers.set(id, mower);
    return mower;
  }

  private executeInstruction (id: number, instruction: Instruction, isLast: boolean): void {
    if (this._mowers.has(id)) {
      const newPosition: Position = this._mowers.get(id).move(instruction);
      if (isLast) {
        console.log(`Final position for object ${id} is ${newPosition.toString()}`);
      }
    }
  }

}