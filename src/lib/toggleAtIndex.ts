export function toggleAtIndex(bools: Array<boolean>, index: number) {
  if (index > bools.length - 1) {
    return bools;
  }
  return [...bools.slice(0, index), !bools[index], ...bools.slice(index + 1)];
}
