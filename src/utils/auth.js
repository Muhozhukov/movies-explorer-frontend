export const BASE_URL = 'https://backend.movie-explorer.nomoredomains.icu';
function handleOriginalResponse(res)  {
  if(res.ok) {return res.json()}
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(handleOriginalResponse)
  .then((res) => {
    return res;
  })
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(handleOriginalResponse)
  };

  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(handleOriginalResponse)
  }
