
import React, { useEffect, useState } from 'react';
import "./Login.css"
import { setUserSession } from '../../Ultis/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Warpper from '../../Warpper/Warpper';
function Login() {
  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");  
  return (
    <div>
      <Warpper />
      <div className="modal__login">
        <div className="modal__login-inner">
          <p>Sign up</p>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="modal__login-content">
          <input type="text" {...username} autoComplete="new-password" onChange={(e) => setUsername} name="username" id="username" placeholder="Username" />
          <input type="password" {...password} autoComplete="new-password" onChange={(e)=>setPassword} name="password" id="password" placeholder="Password" />
          <button className="btn__login">Login</button>
          <p className="signwith">or sign up with</p>
          <div className="login-with-social">
            <FontAwesomeIcon icon={faFacebook} className='fa-facebook-f' />
            <FontAwesomeIcon icon={faGoogle} className='fa-google' />
            <FontAwesomeIcon icon={faTwitter} className='fa-twitter' />
          </div>
          <div className="login__create">
            <p>Don't have an account?</p>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;