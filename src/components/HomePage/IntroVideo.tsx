import {
  Container,
  Card,
  CardMedia  
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import { VideoCard } from 'material-ui-player';
import ReactPlayer from 'react-player'
import GoToTop from './../GoToTop';
const useStyles = makeStyles({
    containerRoot :{
        margin:0,
        padding:0
    }
})

export const IntroVideo = ()=>{
    const classes = useStyles();
    return (
        // <Container fixed 
        //  classes={{root : classes.containerRoot}}
        // >
        //    <Card 
        // //    classes={{root: classes.cardRoot}}
        //    >
        //         <CardMedia
        //             component='video'
        //             // className={classes.media}
        //             src={"gearth.mp4"}
        //             autoPlay

        //         />
        //     </Card> 
        // </Container>
        // <VideoCard src={'gearth.mp4'} autoplay={true} loop={true}/>
        <div>
        <ReactPlayer url='home.mp4' playing loop width='100%' height='auto' muted/>
        
            <GoToTop/>
        </div>
    )
}