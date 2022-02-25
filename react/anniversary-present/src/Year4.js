import React from "react";
import August from './Components/Modules/Year4/August/August'
import January from './Components/Modules/Year4/January/January'
import February from './Components/Modules/Year4/February/February'
import March from './Components/Modules/Year4/March/March'
import April from './Components/Modules/Year4/April/April'
import July from './Components/Modules/Year4/July/July'
import June from './Components/Modules/Year4/June/June'
import May from './Components/Modules/Year4/May/May'
import September from './Components/Modules/Year4/September/September'
import October from './Components/Modules/Year4/October/October'
import November from './Components/Modules/Year4/November/November'
import December from './Components/Modules/Year4/December/December'



const components = [
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
]

export const Year4 = () => {
  return components.map(component =>
   <div style={{margin: "auto", padding: "100px", maxWidth: "50vw"}}> 
    {component()}
   </div>
  )
}

