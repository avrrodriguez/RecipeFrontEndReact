import "./Login.css";
import axios from "axios";
import { useState } from "react";

export function Login(props) {
  const [invalidInput, setInvalidInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let params = { name: event.target.name.value, password: event.target.password.value };

    axios
      .post("http://localhost:3000/login", params)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        setInvalidInput(true);

        let formInputName = document.getElementById("login-username");
        let formInputPassword = document.getElementById("login-password");

        formInputName.classList.add("invalid-input");
        formInputName.classList.add("invalid-input-animation");

        formInputPassword.classList.add("class", "invalid-input");
        formInputPassword.classList.add("class", "invalid-input-animation");

        formInputName.addEventListener("animationend", function () {
          formInputName.classList.remove("invalid-input-animation");
        });
        formInputPassword.addEventListener("animationend", function () {
          formInputPassword.classList.remove("invalid-input-animation");
        });
      });
  };

  return (
    <div className="login-form">
      <h1>{props.pageTitle}</h1>
      <div className="cat-container">
        <div className="cat-ears">
          <div className="left-cat-ear"></div>
          <div className="right-cat-ear"></div>
        </div>
        <div className="content-container">
          <form className="login-form" id="login-form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              {invalidInput ? (
                <div className="invalid-input-text">Not a user name or password does not match.</div>
              ) : (
                <></>
              )}
              <input type="text" id="login-username" name="name" placeholder="Enter User Name" />
              <input type="password" id="login-password" name="password" placeholder="Enter Password" />
            </div>
            <button type="submit" value="submit" className="site-button">
              Submit
            </button>
          </form>
        </div>
        <div className="right-ear"></div>
      </div>
    </div>
  );
}
