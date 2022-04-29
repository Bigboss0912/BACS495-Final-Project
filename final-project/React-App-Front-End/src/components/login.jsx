import React, {useState} from "react";
import axios from 'axios';
import '../static/css/login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [resPass, setResPass] = useState('');
  const [resName, setResName] = useState('');


  const emailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError(true);
    } else {

      const user = {
        email: email
      }

      axios.patch('http://localhost:9000/users/login', user)
        .then(res => setResName(res.data[0].email));

      axios.patch('http://localhost:9000/users/login', user)
        .then(res => setResPass(res.data[0].password));

      if(password === resPass && email === resName) {
        setSubmitted(true);
        setError(false);
        setError2(false);
      } else {
        setError(false);
        setError2(true);
      }
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success-message"
        style={{
          display: submitted ? '' : 'none',
        }}>
          <h4>User: {email} successfully logged in!</h4>
        </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error-message"
        style={{
          display: error ? '' : 'none',
        }}>
          <h4>Please enter all fields!</h4>
        </div>
    );
  };

  const errorMessage2 = () => {
    return (
      <div
        className="error-message"
        style={{
          display: error2 ? '' : 'none',
        }}>
          <h4>Email or Password Wrong</h4>
        </div>
    );
  };
  

  return (
    <div>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0 picture-size"
              src={ require("../static/images/norway.jpg") }
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <div>
              <h1 className="font-weight-light">Login</h1>
            </div>

            <div className="messages">
              {successMessage()}
              {errorMessage()}
              {errorMessage2()}
            </div>

            <form>
              
              <label className="label">Email</label>
              <input
                className="input"
                onChange={emailChange}
                value={email}
                type="email"
              />

              <label className="label">Password</label>
              <input
                className="input"
                onChange={passwordChange}
                value={password}
                type="password"
              />

              <div>
                <button
                  className="btn btn-primary submit-btn"
                  onClick={submitHandler}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;