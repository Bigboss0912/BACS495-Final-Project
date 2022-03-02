import React, {useState} from "react";
import axios from 'axios';
import '../static/css/register.css';

function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

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

    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError(true);
    } else {

      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }

      axios.post('http://localhost:9000/users', user)
        .then(res => console.log(res.data));

      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}>
          <h4>User {firstName} {lastName} successfully registered!</h4>
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
  

  return (
    <div>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0 picture-size"
              src={ require("../static/images/chicago_overlook.jpg") }
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <div>
              <h1 className="font-weight-light">Sign Up</h1>
            </div>

            <div className="messages">
              {successMessage()}
              {errorMessage()}
            </div>

            <form>
              <label className="label">First Name</label>
              <input
                className="input"
                onChange={firstNameChange}
                value={firstName}
                type="text"
              />
              
              <label className="label">Last Name</label>
              <input
                className="input"
                onChange={lastNameChange}
                value={lastName}
                type="text"
              />

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

export default Register;