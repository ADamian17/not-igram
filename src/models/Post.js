export default class Post {
  static all() {
    return fetch(`${process.env.REACT_APP_API_URL}/posts`).then( response => response.json());
  }

  static create( data ) {
    return fetch( process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(request => request.json());
  }
}