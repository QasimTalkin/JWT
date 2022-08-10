// HTTP methods: GET, POST, PUT, DELETE

async function httpPost(data, url) {
  const response = await fetch( url , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

async function httpGet(url) { 
  const response = await fetch(url);
  return response.json();
}