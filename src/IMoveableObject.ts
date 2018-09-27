import { Instruction, default as Position } from './Position';

export default interface IMoveableObject {

  move (instruction: Instruction): Position;

  getPosition (): Position;

  getId (): number;

}