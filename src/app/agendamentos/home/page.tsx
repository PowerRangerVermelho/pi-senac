import { Fragment } from 'react';
import Link from 'next/link';


 function Home() {
  return (
    <Fragment>
      <div className="login-container">
        <i className="fa-solid fa-user"></i>
        <form action="#" method="post">
          <label>Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label>Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>

      

    </Fragment>
  )
}
export default Home
