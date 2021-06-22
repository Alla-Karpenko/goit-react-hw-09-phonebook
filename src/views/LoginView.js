import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
   const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  
  const handleEmailChange = evt => {
    setEmail(evt.target.value)
  }
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
   
    setPassword("");
    setEmail("");
  
  };


    return (
      <div>
        <h1>Страница логина</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
}


