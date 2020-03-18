import React from 'react'

import IMCMsg from './IMCMsg'

var imc;

export default(props)=>{
    let imc = props.peso / props.altura ** 2;
    return <div>
        <h2>IMC = {imc}</h2>
        <IMCMsg> imc = {imc}</IMCMsg>
    </div>
}
    
      