import React, { useState } from "react";
import { authOperations } from "../redux/auth";
import { useDispatch } from "react-redux";

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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

    const handleName = (event) => {
      setName(event.target.value);
    };
    const handlEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(authOperations.register({ email, password, name }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
        <input type="text" name="name" value={name} onChange={handleName} />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handlEmail}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
