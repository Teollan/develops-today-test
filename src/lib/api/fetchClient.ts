const BASE = process.env.API_BASE;

async function get<T>(endpoint: string) {
  const response = await fetch(`${BASE}/${endpoint}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: T = await response.json();

  return data;
}

export const client = {
  get,
};
