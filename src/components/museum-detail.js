import React, { Fragment } from 'react';
import Museum from './museum'

function MuseumDetail(props){

    return(
      
        props.records.map((m) => 
        {return (
          
            <Museum  key={m.id} nombre={m.nombre}  direccion={m.direccion} link={m.link}/>
          );})
    )  

  }

export default MuseumDetail;