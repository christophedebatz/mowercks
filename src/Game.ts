import Mower from './Mower';
import Lawn from './Lawn';
import Position from './Position';

export default class Game {

  private _mowers: Mower[] = [];
  private _lawn: Lawn;

  public setLawn (lawnWidth: number, lawnHeight: number): void {
    this._lawn = new Lawn(lawnWidth, lawnHeight);
  }

  public addMower (position: Position): Mower {
    const mower: Mower = new Mower(this._lawn, position, this._mowers.length + 1);
    this._mowers.push(mower);
    return mower;
  }

  public get lawn (): Lawn {
    return this._lawn;
  }

  public get mowers (): Mower[] {
    return this._mowers;
  }

}