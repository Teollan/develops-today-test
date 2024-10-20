'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Link from 'next/link';

import { Make } from '../lib/types';

import fetchMakes from '../lib/api/fetchMakes/fetchMakes';
import generateStaticParams from '../lib/features/generateStaticParams';
import range from '../lib/utils/range';

import { START_YEAR } from '../lib/utils/constants';

export default function Home() {
  const [makes, setMakes] = useState<Make[] | null>(null);

  const [makeId, setMakeId] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const canGoNext = makeId && year;

  useEffect(() => {
    fetchMakes().then(setMakes);
  }, []);

  const years = range(START_YEAR, new Date().getFullYear() + 1);

  const handleMakeIdChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMakeId(Number(event.target.value));
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='maker'>Select maker:</label>

          <select
            value={makeId ?? -1}
            onChange={handleMakeIdChange}
            name='maker'
            id='maker'
            className='transition-color block w-full max-w-[500px] rounded bg-gray-200 p-4 duration-300 hover:bg-gray-300'
          >
            <option value={-1} disabled>
              Please, select a maker
            </option>
            {makes &&
              makes.map((make) => (
                <option key={make.MakeId} value={make.MakeId}>
                  {make.MakeName}
                </option>
              ))}
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='year'>Select year:</label>

          <select
            value={year ?? -1}
            onChange={handleYearChange}
            name='year'
            id='year'
            className='transition-color block w-full max-w-[500px] rounded bg-gray-200 p-4 duration-300 hover:bg-gray-300'
          >
            <option value={-1} disabled>
              Please, select year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Link
        className={`transition-color w-min rounded bg-green-400 px-4 py-1 duration-300 hover:bg-green-600 ${canGoNext ? '' : 'pointer-events-none bg-green-100 text-gray-500'}`}
        aria-disabled={!canGoNext}
        tabIndex={canGoNext ? undefined : -1}
        href={generateStaticParams(makeId!, year!)}
      >
        Next
      </Link>
    </div>
  );
}
