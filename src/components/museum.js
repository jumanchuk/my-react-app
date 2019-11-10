import React from 'react';

function Museum(props) {
  return (


  <div class="card col-4" id="cardstyle">
    <div class="card-body">
      <h5 class="card-title">{props.nombre}</h5>
      <p class="card-text">{props.direccion}</p>
      <a href={'' + props.link}>Sitio Web</a>
    </div>
  </div>


  );
}

export default Museum;