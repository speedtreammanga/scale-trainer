import { getRandomInt } from '../helpers'

test('getRandomInt', () => {
  const notes = ['C']
  const modifiers = ['Maj', 'min']
  const tones = ['(regular)']

  const note = getRandomInt(0, notes.length - 1)
  const modifier = getRandomInt(0, modifiers.length - 1)
  const tone = getRandomInt(0, tones.length - 1)

  expect(note).toBe(0)
  expect(modifier).toBeLessThanOrEqual(1)
  expect(tone).toBe(0)
});
