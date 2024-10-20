import { Model } from '../../types';
import { client } from '../fetchClient';

type Response = {
  Results: Model[];
};

export default async function fetchModels(makeId: number, year: number) {
  const data = await client.get<Response>(
    `GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  return data.Results;
}
