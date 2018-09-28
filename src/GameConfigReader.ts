import { readFileSync } from 'fs';
import Position, { Instruction, PositionHelper } from './model/Position';
import IMoveableObject from './interfaces/IMoveableObject';

export default class GameConfigReader {

  private readonly _file: string;
  private _hasBeenRead: boolean = false;
  private _onMapSize: (width: number, height: number) => void;
  private _onMoveableObject: (index: number, position: Position) => IMoveableObject;
  private _onInstruction: (index: number, instruction: Instruction, isLast: boolean) => void;

  constructor (file: string) {
    this._file = file;
  }

  public on (event: string, callback: any): void {
    if (event === 'map') {
      this._onMapSize = callback;
    } else if (event === 'object') {
      this._onMoveableObject = callback;
    } else if (event === 'instruction') {
      this._onInstruction = callback;
    } else {
      throw new Error('unrecognized.event');
    }
    if (this._onMapSize && this._onMoveableObject && this._onInstruction && !this._hasBeenRead) {
      this.read();
      this._hasBeenRead = true;
    }
  }

  public read (): void {
    const lines: string[] = GameConfigReader.getConfigLines(this._file);
    let moveableObjectsCount: number = 0;
    let currentMoveableObject: IMoveableObject = null;
    for (let i = 0; i < lines.length; i++) {
      const currentLine: string = lines[i];
      if (i === 0) {
        const sizes: string[] = currentLine.split(' ');
        if (sizes.length !== 2) {
          throw new Error('invalid.config.format[sizes]');
        }
        if (this._onMapSize) {
          this._onMapSize(parseInt(sizes[0], 10), parseInt(sizes[1], 10));
        }
      } else if (( i + 1 ) % 2 === 0) {
        const positions: string[] = currentLine.split(' ');
        if (positions.length !== 3) {
          throw new Error('invalid.config.format[position]');
        }
        const position: Position = new Position(
          parseInt(positions[0], 10),
          parseInt(positions[1], 10),
          PositionHelper.mapDirection(positions[2])
        );
        if (this._onMoveableObject) {
          currentMoveableObject = this._onMoveableObject(++moveableObjectsCount, position);
        }
      } else {
        for (let j = 0; j < currentLine.length; j++) {
          if (this._onInstruction) {
            this._onInstruction(
              currentMoveableObject.getId() || 0,
              PositionHelper.mapInstruction(currentLine.charAt(j)),
              j === currentLine.length - 1
            );
          }
        }
      }
    }
  }

  private static getConfigLines (fileName: string): string[] {
    const lines: string[] = readFileSync(fileName).toString().split('\n') || [];
    if (lines.length === 0) {
      throw new Error('empty.config.file');
    }
    return lines;
  }
}