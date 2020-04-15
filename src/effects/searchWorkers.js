import config from '../config';

const searchWorkers = async ({
  token,
  query,
}) => {
  const { apiUrl } = config;
  const baseUrl = `${apiUrl}/workers/search`;
  const qs = `q=${query}`;
  const url = `${baseUrl}?${qs}`;
  const auth = `Bearer ${token}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
      Accept: 'application/json',
      Authorization: auth,
      },
    });

    return await response.json();
  } catch (error) {
    // no-op
  }
};

export default searchWorkers;
