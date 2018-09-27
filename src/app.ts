import { readFileSync } from 'fs';
import Game from './Game';
import Position, { PositionHelper } from './Position';
import Mower from './Mower';

class Mowercks {

  private static game: Game = new Game();

  public static main (file: string): void {
    const lines: string[] = Mowercks.getConfigLines(file);
    for (let i = 0; i < lines.length; i++) {
      let mower: Mower = null;
      const currentLine: string = lines[i];
      if (i === 0) {
        const sizes: string[] = currentLine.split(' ');
        if (sizes.length !== 2) {
          throw new Error('invalid.config.format[sizes]');
        }
        Mowercks.game.setLawn(
          parseInt(sizes[0], 10),
          parseInt(sizes[1], 10)
        );
      } else if (!(i % 2)) {
        const positions: string[] = currentLine.split(' ');
        if (positions.length !== 3) {
          throw new Error('invalid.config.format[position]')
        }
        const position: Position = new Position(
          parseInt(positions[0], 10),
          parseInt(positions[1], 10),
          PositionHelper.mapDirection(positions[2])
        );
        mower = Mowercks.game.addMower(position);
      } else {
        for (let j = 0; j < currentLine.length; j++) {
          mower.move(PositionHelper.mapInstruction(currentLine.charAt(j)));
        }
      }
    }
  }

  private static getConfigLines (file: string): string[] {
    const lines: string[] = readFileSync(file).toString().split('\n') || [];
    if (lines.length === 0) {
      throw new Error('empty.config.file');
    }
    return lines;
  }

}

Mowercks.main('input.txt');