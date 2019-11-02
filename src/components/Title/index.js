import React from "react";
import "./style.css";

function Title(props) {
  return (<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#"/>
    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
    <h1 id="logo">Clicky Game</h1>
</nav>);
}

export default Title;
