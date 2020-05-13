import React from "react";
import ReactDOM from "react-dom";

import Button from './components/Button.jsx';

const App = () => {
  return (
    <div>
        <Button text='click =)' />
        Hello React,Webpack 4 & Babel 7! =)
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));