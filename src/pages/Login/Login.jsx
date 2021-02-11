import { useState, useEffect } from 'react';

/* redux */
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

/* NOTE helpers */
import Auth from '../../models/Auth';

const Login = ( props ) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const { setCurrentUser } = props;
    const data = { email, password };

    Auth.login(data).then( json =>  {
      console.log(json)
      localStorage.setItem("uid", json.signedJwt);
      setCurrentUser(json.signedJwt)
      props.history.push("/feed");
    })
  } 

  return (
    <main className="center-form">
    
      <h1>login</h1>
    
      <form className="for-login-register" onSubmit={handleLogin}>
    
        <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value) } required />
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value) } required />
    
        <input type="submit" value="login" />
      </form>
    
      <small>
        new to us <a href="/register">register</a>
      </small>
    
    </main>
  )

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (token) => dispatch(setCurrentUser(token)),
});
export default connect( null, mapDispatchToProps )(Login);

