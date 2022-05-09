
/**
 * Calculate Percentvalue x% from y equals z
 * @param {number} prozentsatz x% from
 * @param {number} grundwert y
 * @returns Number
 */
export function calcPercentValue(prozentsatz: number, grundwert: number) {
    let x: number;
    x = grundwert / 100;
    x = x * prozentsatz
    let prozentwert = x;

    return prozentwert;
}