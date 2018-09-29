import Game from './Game';
import * as path from 'path';

class Mowercks {

  public static main (file: string): void {
    try {
      new Game().play(file);
    } catch (e) {
      console.error(`An error occured, error message is ${e.message}`);
    }
  }

}

Mowercks.main(path.join(__dirname, '../inputs/input1.txt'));
