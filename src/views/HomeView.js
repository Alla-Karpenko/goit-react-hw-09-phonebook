import React from "react";
import img from './img.jpg'

const HomeView = () => (
  <div>
    <h1>
      Главнная страница{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
    {/* <img src={img} alt="" width="600" /> */}
  </div>
);

export default HomeView;
