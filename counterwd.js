import { Button } from "@wordpress/components";
import { __experimentalGrid as Grid} from "@wordpress/components";
import {useState} from '@wordpress/element';
const Counter=()=>{
    let[state,setState]=useState(0);
    // const increment=()=>{
    //     setState(state++);
    // }
    const decrement=()=>{
        setState(state--);
    }
    return(<>
    <Grid columns={3}>
    <Button onClick={()=>setState(state++)} id='btn2'>+</Button>
    <p>{state}</p>
    <Button onClick={decrement} id='btn2'>-</Button>
    </Grid>
    </>)
}
export default Counter;
