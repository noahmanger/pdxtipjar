import config from '../config';

const addOrUpdateWorkers = async ({
  token,
  worker,
  update,
}) => {
  const { apiUrl } = config;
  const baseUrl = `${apiUrl}/workers`;
  const url = update ? `${baseUrl}/${worker.user_id}` : baseUrl;
  const auth = `Bearer ${token}`;
  const method = update ? 'PUT' : 'POST';

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: auth,
      },
      body: JSON.stringify(worker),
    });

    return await response.json();
  } catch (error) {
    console.log('error: ', error);
    // no-op
  }
};

export default addOrUpdateWorkers;
