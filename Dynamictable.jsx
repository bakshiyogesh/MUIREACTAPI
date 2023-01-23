import { useEffect, useState } from "react";
import Thead from "./Showtable";
import Tbody from "./tablebody";
import '@fontsource/roboto/300.css';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Table  from "@mui/material/Table";
import TableHead from '@mui/material/TableHead';
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import Color from "./onclick";
// import {ThemeProvider,createTheme} from '@mui/material';
function Fetchdata() {
    const [data, setData] = useState([]);
    useEffect(() => {
     const getdata = async()=>{
         const res=await fetch("https://api2.binance.com/api/v3/ticker/24hr").then((res)=>{if(res.ok) { return res.json()
     }})//http://universities.hipolabs.com/search?country=India
    //     //https://api2.binance.com/api/v3/ticker/24hr"
         .then((data)=>{setData(data)
         //console.log(data);
        })
     .catch((err)=>console.log(console.error(":-(",err)))
      };
    getdata();
   },[]);
    
    return(
    <>
   <Typography variant="h3" sx={{width:"100%"}}>Dynamic table</Typography>
    <TableContainer>
        <Table>
           <TableHead>
             <Thead arraydata={data}/>
           </TableHead>
          <TableBody>
             <Tbody bodydata={data}/>
          </TableBody>
       </Table>
    </TableContainer> 
   <Button variant="contained" onclick={<Color/>}>Hello</Button>
      </>)
}
export default Fetchdata;