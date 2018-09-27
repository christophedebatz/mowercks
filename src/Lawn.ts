export default class Lawn {

  private readonly _width: number;
  private readonly _height: number;

  constructor (width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public get width (): number {
    return this._width;
  }

  public get height (): number {
    return this._height;
  }
}