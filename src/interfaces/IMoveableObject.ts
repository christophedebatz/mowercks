import { Instruction, default as Position } from '../model/Position';

export default interface IMoveableObject {

  getId (): number;

  move (instruction: Instruction): Position;

}