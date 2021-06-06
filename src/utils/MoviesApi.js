class MoviesApi {
  constructor(options) {
    this.headers = options.headers;
    this.baseUrl = options.baseUrl;
  }
  _handleOriginalResponse(res) {
    if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  getFilms() {
    return fetch(`${this.baseUrl}`, {
      headers: {
        // authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
  getUserInfo(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
  editUserInfo(profileInfo, jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: profileInfo.name,
        email: profileInfo.email
      })
    })
    .then(this._handleOriginalResponse)
  }
  postNewCard(newCard, jwt) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      })
    })
    .then(this._handleOriginalResponse)
  }
  likeToCard(cardId, jwt) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
  deleteLikeToCard(cardId, jwt) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
  deleteCard(cardId, jwt) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }
}
//123
const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default moviesApi;
