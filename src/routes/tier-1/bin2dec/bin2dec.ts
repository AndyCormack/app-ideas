export function bin2Dec(binary: string) {
  const arr = binary.split('')

  if (arr.some((value) => value !== '0' && value !== '1')) {
    throw new Error('Invalid binary number')
  }

  return arr.reduce(
    (acc, value, index) =>
      Number(value) * Math.pow(2, arr.length - 1 - index) + acc,
    0
  )
}
