import indicateHealth from '../app';

test('should indicate health', () => {
  const value = { name: 'Маг', health: 90 };
  const result = indicateHealth(value);
  expect(result).toBe('healthy');
});

test('should indicate health', () => {
  const value = { name: 'Маг', health: 25 };
  const result = indicateHealth(value);
  expect(result).toBe('wounded');
});

test('should indicate health', () => {
  const value = { name: 'Маг', health: 5 };
  const result = indicateHealth(value);
  expect(result).toBe('critical');
});
