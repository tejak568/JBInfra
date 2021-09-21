import {
    Container,
    Typography

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardRoot:{
        position:'relative',
        width: '540px',
        height:'350px',
        backgroundColor: 'transparent',
        backgroundImage:  'url("laptop.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100% auto',
        boxShadow: 'none',

    },
    media:{
        backgroundSize: 'contain',
        position: 'absolute',
        top: '0',
        left:'0',
        width: '100%',
        height: '100%',
        padding:'3% 14% ',
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro1.gif")',
        // backgroundImage:  'url("intro2.png")',
        // backgroundSize:'100% auto',
        height:'850px',
        width:'100%',
        backgroundRepeat: 'no-repeat',
        margin:'0',
        padding:'0',
    },
    img:{
        width:'100%',
        height:'auto',
    },
    textFirst:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'200px',
        marginTop:'100px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    textSecond:{
        color:'#fff',
        fontSize:'28px',
        marginLeft:'200px',
        fontFamily: 'Avenir next',
        fontWeight:500,
    },
    verticalBar:{
        width:'50%',
        height:'30px',
        backgroundColor:'#fff',
        marginLeft:'-160px',
        color:'#f78320',
        textAlign:'right',
        fontFamily:'Avenir next',
        paddingRight:'30px',
        paddingTop:'5px',
    }
})

export const Introduction = (props:any)=>{
    const classes = useStyles();
    console.log(props)
    return (
        <Container fixed classes={{root : classes.containerRoot}}>
            <img className={classes.img} src={props.image} ></img>
        </Container>
    )
}