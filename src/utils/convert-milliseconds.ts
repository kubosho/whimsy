function splitNumberAndUnit(input: string): { value: number, unit: string } {
  const re = /(\d*\.)?(\d*)(ms|s|m|h)/
  // ["100ms", undefined, "100", "ms", index: 0, input: "1000ms"]
  // ["1.5s", "1.", "5", "s", index: 0, input: "1.5ms"]
  const splitedValue = input.match(re)

  if (!splitedValue) {
    return
  }

  const value = !splitedValue[1]
    ? splitedValue[2]
    : `${splitedValue[1]}${splitedValue[2]}`
  const unit = splitedValue[3]

  return {
    value: Number(value),
    unit,
  }
}

export default function convertMilliseconds(target: string): number {
  const numberAndUnit = splitNumberAndUnit(target)

  if (!(numberAndUnit && numberAndUnit.unit)) {
    throw new TypeError('The value is unexpected. Expect a value with unit.')
  }

  if (numberAndUnit.unit === 's') {
    return numberAndUnit.value * 1000
  }

  if (numberAndUnit.unit === 'm') {
    return numberAndUnit.value * 1000 * 60
  }

  if (numberAndUnit.unit === 'h') {
    return numberAndUnit.value * 1000 * 60 * 60
  }

  return numberAndUnit.value
}
