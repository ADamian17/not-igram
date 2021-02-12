import { useState } from 'react';
import CirclePlus from './CirclePlus';

import './Navbar.scss'

const Navbar = () => {
  const [ show, setShow ] = useState(false);

  return (
    <nav className="nav">

      <h3 className="nav__brand">
        <a href="/">not-gram</a>
      </h3>

      <div className="icon" onClick={ () => setShow( !show ) }>
        <div onClick={ () => setShow( !show ) } className="backdrop" style={{display: show ? 'flex' : 'none' }}>

          <div className="modal">
            here
          </div>
        </div>
        <CirclePlus />
      </div>

      <section className="nav__menu">1</section>
    </nav>
  )
}

export default Navbar;

// <section className="nav__menu"></section>
// <a className="nav__menu--links" href="/">
// <i className="fas fa-home"></i>
// </a>

// <a className="nav__menu--links" href="/addpost">
// <i className="fas fa-plus-square"></i>
// </a>

// <form className="nav__menu--links form__logout" action="/users/logout?_method=DELETE" method="POST">
// <label className="logout-icon" htmlFor="logout">
//   <i className="fas fa-sign-out-alt"></i>
// </label>
// <input id="logout" type="submit" value="logout" style={{display: 'none'}} />
// </form>

// <a className="nav__menu--links" href="/">
// <div className="nav__img__container">
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2k0GVMjK_KqVYjZd6X6dYnrsjfGHN37zh6g&usqp=CAU" alt="avatar" />
// </div>
// </a>