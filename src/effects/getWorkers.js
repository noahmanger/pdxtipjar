import config from '../config';

const getWorkers = async ({
  pageNum = 1,
  numPerPage = 50,
  random = false,
  query = '',
}) => {
  const { apiUrl } = config;
  const baseUrl = `${apiUrl}/workers`;
  const offset = numPerPage * (pageNum - 1);
  const url = random
    ? `${baseUrl}/random`
    : `${baseUrl}?limit=${numPerPage}&offset=${offset}&q=${query}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
      Accept: 'application/json'
      },
    });

    return await response.json();
  } catch (error) {
    // no-op
  }
};

export default getWorkers;
