export default function handleResponseFromAPI(promise) {
  obj = {
    status: 200,
    body: 'success'
  };

  promise.then((obj) => {
    return (obj);
  })
  .catch ((err) => {
    return (err);
  })
  .finally(() => {
    ('Got a response from the API');
  });
}
