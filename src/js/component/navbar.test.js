import Navbar from './navbar';

test('debería renderizar el componente Navbar', () => {
  const navbar = new Navbar();
  expect(navbar).toBeDefined();
});

test('debería tener un título', () => {
  const navbar = new Navbar();
  expect(navbar.title).toBe('Título del Navbar');
});