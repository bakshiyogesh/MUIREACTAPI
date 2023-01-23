// import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'
let Tbody=(tabledata)=>{
    console.log("BodyData",JSON.stringify(tabledata));
          // let array=JSON.parse(tabledata);
          // console.log(array);
        return (Array.from(tabledata.bodydata).map((Elem)=>{
          return <TableRow>{Object.values(Elem).map((element,index)=>
          {
          
              return <TableCell key={index}>{(element)}</TableCell>

        })
      }</TableRow>
      }))
  }
  export default Tbody;