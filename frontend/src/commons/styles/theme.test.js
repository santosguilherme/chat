import theme, { darkTheme } from './theme';

describe('theme', () => {
  describe('default', () => {
    test('should have the default theme', () => {
      expect(theme).toBeDefined();
    });
  });

  describe('dark', () => {
    test('should be defined', () => {
      expect(darkTheme).toBeDefined();
    });

    test('should have a type dark in palette attribute', () => {
      expect(darkTheme.palette).toHaveProperty('type', 'dark');
    });
  });

  describe('custom palette colors', () => {
    test.each([
      ['default', theme],
      ['dark', darkTheme],
    ])('should be present on the %s theme', (themeName, themeItem) => {
      expect(themeItem.palette).toHaveProperty('chat');
      expect(themeItem.palette.chat).toHaveProperty('content');
      expect(themeItem.palette.chat).toHaveProperty('send');
      expect(themeItem.palette.chat).toHaveProperty('loggedMessage');
    });
  });
});
