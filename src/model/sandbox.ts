export function calculateWeight(length: number, width: number, depth: number): number {
    return Math.ceil(length * width * depth * 0.0016)
}

export function calculate_price(weight: number): number {
    return weight * 0.10;
}

export const euroCurrency = Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
});