import { useState } from 'react';
import Auth from '../../models/Auth';
 
const Register = ( props ) => {
  console.log( {props} )

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      username,
      email,
      password
    }

    Auth.register(data).then( () =>  props.history.push('/') )

  } 

  return (
    <main className="center-form">
      <h1>register</h1>

      <form className="for-login-register" onSubmit={handleRegister}>

          <input type="text" name="firstName" placeholder="first name" onChange={ (e) => setFirstName(e.target.value) } required/>
          <input type="text" name="lastName" placeholder="last name" onChange={ (e) => setLastName(e.target.value) } required/>
          <input type="text" name="username" placeholder="username" onChange={ (e) => setUsername(e.target.value) } required/>
          <input type="email" name="email" placeholder="email" onChange={ (e) => setEmail(e.target.value) } required/>
          <input type="password" name="password" placeholder="password" onChange={ (e) => setPassword(e.target.value) } required/>

          <input type="submit" value="register" />
      </form>

      <small>
        already a member <a href="/login">login</a>
      </small>
    </main>
  );
};

export default Register;
