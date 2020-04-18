import config from '../config';

const deleteWorker = async ({ userId, token }) => {
  if (!userId) {
    throw new Error('No user ID present.')
  }

  const { apiUrl } = config;
  const baseUrl = `${apiUrl}/workers`;
  const url = `${baseUrl}/${userId}`;
  const auth = `Bearer ${token}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
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

export default deleteWorker;
