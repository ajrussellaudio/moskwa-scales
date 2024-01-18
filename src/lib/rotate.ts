export function rotateLeft<T>(arr: T[], amount: number): T[] {
  const index = amount % arr.length;
  return [...arr.slice(index), ...arr.slice(0, index)];
}

export function rotateRight<T>(arr: T[], amount: number): T[] {
  return rotateLeft(arr, arr.length - amount);
}
