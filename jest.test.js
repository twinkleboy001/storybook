test('test common matcher', () => {
  expect(1 + 1).toBe(2);
  expect(1 + 1).not.toBe(5);
});

test('test to be true or false', () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test('test number', () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(3);
});

test('test object', () => {
  expect({ name: 'viking' }).toEqual({ name: 'viking' });
});
