import "./Login.css";
import axios from "axios";

export function Login(props) {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted login form");
  }

  return (
    <div className="login-form">
      <h1>{props.pageTitle}</h1>
      <div className="cat-container">
        <div className="content-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div >
              <input type="text" id="username" name="name" placeholder="Enter User Name"/>
              <input type="password" id="password" name="password" placeholder="Enter Password"/>
            </div>
            <button type="submit" value="submit">Submit</button>
          </form>
        </div>
        <div className="right-ear"></div>
      </div>
    </div>
  );
}
