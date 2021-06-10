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
}
//123
const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default moviesApi;
