import "./Login.css";

function Login() {
  return (
    <div className="container">
      <h1>HesList</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter Email" />
        <label htmlFor="password">Email</label>
        <input type="password" name="password" id="password" placeholder="Enter Password"/>
      </form>
    </div>
  );
}

export default Login;
