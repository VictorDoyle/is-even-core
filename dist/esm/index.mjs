export default function isEven(n) {
    const num = typeof n === "string" ? parseInt(n, 10) : n;
    if (isNaN(num) || !Number.isInteger(num)) {
        throw new Error(`Invalid input: '${n}' is not a valid integer or numeric string.`);
    }
    return num % 2 === 0;
}
