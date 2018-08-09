const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('it should two numbers', () => {
  const result = add(2,3);

  // if (result !== 5) {
  //   throw new Error(`Added 2 and 3. Expected 5. Got ${result}`);
  // };

  expect(result).toBe(5);
});

test('it should return generate a greeting', () => {
  const result = generateGreeting('Joe');

  expect(result).toBe('Hello Joe!')
});

test('it should generate anonymous greeting', () => {
  const result = generateGreeting();

  expect(result).toBe(`Hello Anonymous!`);
});