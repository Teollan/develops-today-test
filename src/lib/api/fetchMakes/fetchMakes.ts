import { Make } from '../../types';
import { client } from '../fetchClient';

type Response = {
  Results: Make[];
};

export default async function fetchMakes() {
  const data = await client.get<Response>(
    'GetMakesForVehicleType/car?format=json'
  );

  return data.Results;
}
