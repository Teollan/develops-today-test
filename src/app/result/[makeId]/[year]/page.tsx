'use client';

import Loading from '@/components/Loading';
import MakeName from '@/components/MakeName';
import Models from '@/components/Models';
import fetchMakes from '@/lib/api/fetchMakes/fetchMakes';
import fetchModels from '@/lib/api/fetchModels/fetchModels';
import { Make, Model } from '@/lib/types';
import { Suspense, useEffect, useState } from 'react';

type RouteParams = {
  makeId: string;
  year: string;
};

type ResultProps = {
  params: RouteParams;
};

export default function Result({ params }: ResultProps) {
  const makeId = Number(params.makeId);
  const year = Number(params.year);

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-center text-2xl'>
        Results for{' '}
        <Suspense fallback={<Loading />}>
          <MakeName makeId={makeId} />
        </Suspense>{' '}
        ({year})
      </h1>

      <Suspense fallback={<Loading />}>
        <Models makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
