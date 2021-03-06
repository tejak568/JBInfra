import {
    Container, Grid, Typography,Card,CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import GoToTop from './../GoToTop'
import App1 from './carousel.js';

const useStyles = makeStyles({
    container:{
        // backgroundPosition: 'left',
        backgroundSize:'100% auto',
        backgroundRepeat: 'no-repeat',
        // height:'400px',
        width:'100%',
        maxWidth:'100%',
        marginTop:'-200px',
        paddingTop:'100px',
        position:'relative',
        height:'1000px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-130px',
            paddingTop:'50px',
            height:'1700px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-150px',
            paddingTop:'125px',
            height:'1100px'
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-250px',
            paddingTop:'150px',
            height:'800px'
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-300px',
            paddingTop:'220px',
            height:'850px'
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'-400px',
            paddingTop:'280px',
            height:'650px'
          },
    },
    grid:{
        marginTop:'50px',
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        color:'#f78320',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            marginTop:'20px',
          },
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
        marginBottom:'20px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
            lineHeight: '22px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            lineHeight: '24px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '14px',
            lineHeight: '28px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '16px',
            lineHeight: '32px',
          },
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
    cardRoot:{
        // position:'relative',
        maxWidth: '100%',
        height:'100%',
        boxShadow: 'none',
        
    },
    media:{
        width: '100%',
        height:'100%',
        backgroundSize:'contain',
        backgroundPosition:'top',
       
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro.gif")',
        margin:0,
        padding:0,
        maxWidth: '100%',
        height:'auto',
       
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
          height:'200px'
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          height:'400px'
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
          height:'600px'
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          height:'750px'
        },
        ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
          height:'800px'
        },
  
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
    gridItems:{
      height:220
    }
})

export const ProjectHome = (props)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    console.log(props.project)
    const projectHighlights = props.project.valuesproject;
    const locationHighlights = props.project.valueslocation;

    const curve = 'url("'+props.projectName+'curve.png")'
    console.log(curve)
    const images = ['sv1.jpg', 'sv2.jpg','sv3.jpg','sv4.jpg','sv5.jpg','sv6.jpg','sv7.jpg','sv8.jpg','sv9.jpg','sv10.jpg','sv11.jpg','sv12.jpg','sv13.jpg','sv14.jpg'];
    useEffect(()=>{
        
    },[])
    const [projects,setProjects] = useState({});
    if(!window.location.hash){
      window.location = window.location + '#'
      window.location.reload()
      window.scrollTo(0, 0);
    }

    return (
        <Container className={classes.container} style={{backgroundImage: curve}}>
            <Grid className={classes.grid} container xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>OVERVIEW</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.description}>{props.project.overview}</Typography>
                </Grid>
                <Grid className={classes.gridItems} item xs={12}>
                    <div>
                        <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />

                        <div>
                        <App1 autoPlay={true} images={images}/>
                        </div>
                    </div>
                    {/* <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false}/>; */}
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.title}>PROJECT IMAGE</Typography>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <Card classes={{root: classes.cardRoot}}>
                    
                    <CardMedia
                        
                        className={classes.media}
                        image={`${projectName}.jpg`}
                        controls
                    />
                   
                </Card> 
             
            </Container>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titleproject}</Typography>
                    <ul>
                    {
                        projectHighlights.map( (value)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title}>{props.project.titlelocation}</Typography>
                    <ul>
                    {
                        locationHighlights.map( (value)=>{
                            return (
                                <li className={classes.listItem}>{value}</li>
                            )
                        })
                    }
                    </ul>
                </Grid>
            </Grid>
            
            

        </Container> 
        
    )
}