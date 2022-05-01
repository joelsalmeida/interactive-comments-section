const BACKEND_URL = `http://${process.env.REACT_APP_BACK_HOST}/`;

const getByEndpoint = async (endPoint) => {
  const response = await fetch(`${BACKEND_URL}${endPoint}`);
  return response.json();
};

export default getByEndpoint;
