import {
    Container,
    Typography,


} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { TestimonialCard } from "./TestimonialCard";

const useStyles = makeStyles({
    root:{
        width: '100%',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Avenir next',
        backgroundColor: '#fff',
        marginTop:'20px',
        
    },
    caption:{
        width: '100%',
        color: '#4a4a4a',
        fontSize: '13px',
        fontFamily: 'Avenir next',
        backgroundColor: '#fff',

    },
    containerRoot:{
        marginTop:'50px',
        marginBottom:'50px',
    },
    containerContent:{
        display:'flex',
        marginBottom:'50px',
        justifyContent:'center',
    }
})

const testimonialList = [
    {
        id: 1029,
        name : 'TEJA KASUKURTHI',
        description : " JB's Serene city is a 540 acre layout with Residential Plotting"
    },
    {
        id: 1040,
        name : 'SAI RAJA',
        description : " Serene Villas is HMDA approved 42 Acre Villa Project at Adibatla"
    },
    
]

export const Testimonials = ()=>{
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(item => (item ===  testimonialList.length-1? 0 : item + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <Container fixed classes={{root : classes.containerRoot}}>
            <Typography  classes={{ root : classes.root}}>TESTIMONIALS</Typography>
            <Typography  classes={{ root : classes.caption}}>from our customers</Typography>
        </Container>
        <Container fixed classes={{ root : classes.containerContent}}>
            <TestimonialCard list={testimonialList[index]}></TestimonialCard>
        </Container>
        </>
    )
}