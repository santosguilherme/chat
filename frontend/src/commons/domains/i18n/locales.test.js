import { availableLanguages } from './locales';

describe('locales', () => {
  describe('availableLanguages', () => {
    test('should be an array', () => {
      expect(Array.isArray(availableLanguages)).toBeTruthy();
    });

    test('should contain the en-US locale', () => {
      expect(availableLanguages).toContain('en-US');
    });

    test('should contain the pt-BR locale', () => {
      expect(availableLanguages).toContain('pt-BR');
    });
  });
});
