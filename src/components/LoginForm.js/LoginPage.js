import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import ContextApi from "../store/ContextApi";
import classes from "./LoginForm.module.css";


const LoginForm = () => {
  const emailRef = useRef()
  const history = useHistory()
    const ctx = useContext(ContextApi)
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    history.replace("/Store")
    ctx.isLoginfunc(email)
  };

  return (
    <section className={`${classes.auth}`}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" ref={emailRef} id="email"  required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" minLength="7" id="password" required />
        </div>
        <div className={classes.actions}>
           <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
