import { renderHook } from '@testing-library/react';
import { useConversion } from './useConversion';

describe('useConversion hook', () => {
    const originalNavigator = global.navigator;

    afterEach(() => {
        global.navigator = originalNavigator;
    });

    const mockNavigatorLanguage = (language: string) => {
        Object.defineProperty(global.navigator, 'language', {
            value: language,
            configurable: true,
        });
    };

    const normalizeString = (str: string) => str.normalize('NFKD').replace(/\s+/g, '');


    it('should return USD for en-US locale', () => {
        mockNavigatorLanguage('en-US');

        const { result } = renderHook(() => useConversion());
        expect(normalizeString(result.current.formatCurrency(1000))).toBe(normalizeString('$1,000.00'));
    });

    it('should return GBP for en-GB locale', () => {
        mockNavigatorLanguage('en-GB');

        const { result } = renderHook(() => useConversion());
        expect(normalizeString(result.current.formatCurrency(1000))).toBe(normalizeString('£1,000.00'));
    });

    it('should return BRL for pt-BR locale', () => {
        mockNavigatorLanguage('pt-BR');

        const { result } = renderHook(() => useConversion());
        expect(normalizeString(result.current.formatCurrency(1000))).toBe(normalizeString('R$ 1.000,00')); // Note the space after R$
    });

    it('should return EUR for unsupported locale', () => {
        mockNavigatorLanguage('es-es');

        const { result } = renderHook(() => useConversion());
        expect(normalizeString(result.current.formatCurrency(1000))).toBe(normalizeString('1000,00€'));
    });

    // Add more tests for other locales if necessary
});
