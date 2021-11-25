import { sortByHealth } from '../js/app';

const sortCharacters = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];

const unsortCharacters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];


test('sorting unsort list not to be sort list', () => {
  expect([...unsortCharacters].sort(sortByHealth)).not.toBe(sortCharacters);
});

test('sorting sort list to equal sort list', () => {
  expect([...sortCharacters].sort(sortByHealth)).toEqual(sortCharacters);
});

test('sorting unsort list to equal sort list', () => {
  expect([...unsortCharacters].sort(sortByHealth)).toEqual(sortCharacters);
});