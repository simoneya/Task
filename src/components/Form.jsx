
import React from "react";
import "semantic-ui-css/semantic.min.css";


function Form () {

  return (
<div class="ui secondary  menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Movies
  </a>
  <a class="item">
    About
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="ui item">
      Submit
    </a>
  </div>
</div>
 );
}

 export default Form;
