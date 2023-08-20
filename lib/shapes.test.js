const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Triangle should return correct SVG string', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="150,10 290,190 10,190" fill="red" />');
  });

  test('Circle should return correct SVG string', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="90" fill="blue" />');
  });

  test('Square should return correct SVG string', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="60" y="10" width="180" height="180" fill="green" />');
  });
});