import BowlingGame from ".././bowling.js";
import chai, { expect } from "chai";

it("should return 0 for a game of only gutter balls", () => {
  const game = new BowlingGame();

  for (let x = 0; x < 20; x++) {
    game.roll(0);
  }

  expect(game.score).to.equal(0);
});

it("should return 20 for a game where all rolls knock down one pin", () => {
  const game = new BowlingGame();

  for (let x = 0; x < 20; x++) {
    game.roll(1);
  }

  expect(game.score).to.equal(20);
});
