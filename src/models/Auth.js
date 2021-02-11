export default class Auth {

  static register ( data ) {
    return fetch( `${process.env.REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( data ),
    })
    .then(request => request.json());
  }

};