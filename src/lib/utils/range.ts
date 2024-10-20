export default function range(from: number, to: number, step: number = 1) {
  if (step === 0) {
    throw new Error("Can't create Range with step === 0.");
  }

  if ((from < to && step < 0) || (from > to && step > 0)) {
    throw new Error(
      `Can\'t create Range from ${from} to ${to} with step ${step}.`
    );
  }

  const result = [];

  for (let i = from; i < to; i += step) {
    result.push(i);
  }

  return result;
}
