import fetchMakes from '@/lib/api/fetchMakes/fetchMakes';

type Props = {
  makeId: number;
};

export default async function MakeName({ makeId }: Props) {
  const makes = await fetchMakes();
  const make = makes.find((item) => item.MakeId === makeId) ?? null;

  return <span>{make?.MakeName}</span>;
}
