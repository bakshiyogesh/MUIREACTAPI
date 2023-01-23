// function Thead(props){
//     //console.log( props);
//     //console.log("data:",JSON.stringify(props));
//     console.log(props)
//     return(
//       props&&props.arraydata&&Object.keys(props.arraydata[0]).map((element,numb)=>{return <th key={numb}>{(element)}</th>})
//     )
   
//   }
 import TableHead from '@mui/material/TableHead'
 import { TableCell, TableRow } from '@mui/material'
  import React from 'react'
  
  export default function Showtable(props) {
    console.log("data :", JSON.stringify(props))
    return (
      props && props.arraydata && props.arraydata.length > 0 && Object.keys(props.arraydata[0]).map((element,numb)=>{return <TableCell key={numb} sx={{fontSize:"20px"}}>{(element)}</TableCell>})
    )
  }
//export default Thead;