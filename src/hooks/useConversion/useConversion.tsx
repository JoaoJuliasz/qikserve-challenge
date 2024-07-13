import { useCallback } from "react";

const localeToCurrencyMap: { [key: string]: string } = {
    'en-US': 'USD',
    'en-GB': 'GBP',
    'pt-BR': 'BRL',
    'fr-FR': 'EUR',
    'de-DE': 'EUR',
    'es-ES': 'EUR',
};

export const useConversion = () => {
    const getCurrencyByLocale = (locale: string) => {
        const defaultCurrency = 'EUR'; // Default to Euro if locale is not found
        return localeToCurrencyMap[locale] || defaultCurrency;
    }

    const formatCurrency = useCallback((value: number) => {
        const locale = navigator.language;
        const currency = getCurrencyByLocale(locale);
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(value);
    }, [])

    return { formatCurrency }
};