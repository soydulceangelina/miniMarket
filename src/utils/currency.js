export const toDollarCurrency = (num) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(num);
