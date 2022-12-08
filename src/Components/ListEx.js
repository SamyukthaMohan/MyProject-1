
import React from 'react'

export default function ListEx() {
    const cars = ["Nano","800","Maruthi","Scarpio"];
    

    const listCars = cars.map((i) =>i );

    console.log(listCars);
    return(
      <h1>listCars</h1>

    )
  
  
}
