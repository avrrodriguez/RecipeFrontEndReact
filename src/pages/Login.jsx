import "./Login.css";
import axios from "axios";

export function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // let params = { name: "username6", password: "password1" };
    let params = { name: event.target.name.value, password: event.target.password.value };
    console.log("submitted login form", event.target.name.value, event.target.password.value);

    axios.post("http://localhost:3000/login", params).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="login-form">
      <h1>{props.pageTitle}</h1>
      <div className="cat-container">
        <div className="content-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <input type="text" id="username" name="name" placeholder="Enter User Name" />
              <input type="password" id="password" name="password" placeholder="Enter Password" />
            </div>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="right-ear"></div>
      </div>
    </div>
  );
}
