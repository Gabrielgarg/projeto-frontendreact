import React from "react";


//Ordenar os itens
function Maintitle(props){

    return(
        <select onChange={(e) => {
            props.setVlordena(e.target.value);
        }}>
            <option disabled>Ordenar</option>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
    )
}

export default Maintitle;