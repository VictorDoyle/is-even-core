export default function isEven(n: number | string): boolean {
  const num = typeof n === "string" ? parseFloat(n) : n;
  if (isNaN(num) || !Number.isInteger(num)) {
    throw new Error(`Invalid input: '${n}' is not a valid integer or numeric string.`);
  }
  return num % 2 === 0;
}