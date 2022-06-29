const { logger } = require('./script');

const data_logger = logger('bonjour');
// Test de vérification du retour de la fonction logger
test('TEST : Retour fonction LOGGER', () => {
    expect(data_logger).toContain('<td>');
});
// Test du type du retour du logger
test('TEST : Retour fonction LOGGER (typeof)', () => {
    expect(typeof(data_logger)).toBe('string');
});