import Game from './Game';
import * as path from 'path';

class Mowercks {

  public static main (file: string): void {
    new Game().play(file);
  }

}

Mowercks.main(path.join(__dirname, '../inputs/input1.txt'));