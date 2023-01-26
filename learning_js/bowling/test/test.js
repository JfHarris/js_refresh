import BowlingGame from ".././bowling.js";
import chai, { expect } from "chai";

let game;

beforeEach(() => {
  game = new BowlingGame();
});

it("should return 0 for a game of only gutter balls", () => {
  rollMany(0, 20);

  expect(game.score).to.equal(0);
});

it("should return 20 for a game where all rolls knock down one pin", () => {
  rollMany(1, 20);

  expect(game.score).to.equal(20);
});

it("should return correct score after a spare is rolled", () => {
  game.roll(5);
  game.roll(5);
  game.roll(3);
  rollMany(0, 17);

  expect(game.score).to.equal(16);
});

function rollMany(pins, rolls) {
  for (let x = 0; x < rolls; x++) {
    game.roll(pins);
  }
}