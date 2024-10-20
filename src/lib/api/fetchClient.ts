const BASE = process.env.API_BASE;

async function get<T>(endpoint: string) {
  const responce = await fetch(`${BASE}/${endpoint}`);

  if (!responce.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: T = await responce.json();

  return data;
}

export const client = {
  get,
};
