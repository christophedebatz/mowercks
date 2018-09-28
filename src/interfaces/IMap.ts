import { default as Position } from '../model/Position';

export default interface IMap {

  getWidth (): number;

  getHeight (): number;

  intersectMap (position: Position): boolean;

}