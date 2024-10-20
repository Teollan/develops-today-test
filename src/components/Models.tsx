import fetchModels from '@/lib/api/fetchModels/fetchModels';

type Props = {
  makeId: number;
  year: number;
};

export default async function Models({ makeId, year }: Props) {
  const models = await fetchModels(makeId, year);

  return (
    <section className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4'>
      {models.map((model) => (
        <article
          key={model.Model_ID}
          className='transition-color block w-full rounded bg-gray-200 p-4 duration-300 hover:bg-gray-300'
        >
          {model.Model_Name}
        </article>
      ))}
    </section>
  );
}
