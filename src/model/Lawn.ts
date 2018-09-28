import Position from './Position';
import IMap from '../interfaces/IMap';

export default class Lawn implements IMap {

  private readonly _width: number;
  private readonly _height: number;

  constructor (width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public getWidth (): number {
    return this._width;
  }

  public getHeight (): number {
    return this._height;
  }

  public intersectMap (position: Position): boolean {
    return position.x >= 0 && position.x <= this._width
      && position.y >= 0 && position.y <= this._height;
  }
}