import { ProjectCard } from "./ProjectCard";
import {
    Button,
Typography,


} from '@material-ui/core';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
  
  });


const useStyles = makeStyles({
    cardbutton:{
      fontSize: '13px',
      fontFamily: 'Montserrat',
      backgroundColor: '#f78320',
      color:'#fff',
      paddingLeft: '30px',
      paddingRight:'30px',
      "&:hover": {
          backgroundColor: '#fff',
          color:'#f78320',
          border:'1px solid #f78320',
      },
      
    },
    root:{
        width: '100%',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',
        marginTop:'0px',
    },
    caption:{
        width: '100%',
        color: '#4a4a4a',
        fontSize: '13px',
        fontFamily: 'Montserrat',
        //backgroundColor: '#fff',

    },
    typojourney:{
        paddingTop:'50px',
    },
    timelinecontentalternative:{
        float:'right',
    },
    timelineDotColor:{
        backgroundColor: '#f78320 !important',
    },
  
  });

const projectList = [
    {
        id: 1029,
        title : "JB's GREEN MEADOWS",
        img: 'jbgm.jpg',
        name: 'greenmeadows',
        description : "JB’S Green Meadows is a 40 Acre Residential Plotting Venture at Kongara Kalan, near Adibatla"
    },
    {
        id: 1040,
        title : 'JB RESORT',
        img: 'jbr.jpg',
        name: 'jbresorts',
        description : "JB Resorts is a Resort Living Plotting Project offering modern clubhouse in 100 acre layout"
    },
    {
        id: 1048,
        title : 'JASMINE CITY II',
        img: 'jc2.jpg',
        name: 'jasminecityll',
        description : "Jasmine City - II is HMDA Approved 12 Acre Plotting Project at Mangalpally Village, near fast developing zone of Adibatla"
    },
    {
        id: 1043,
        title : 'JASMINE CITY',
        img: 'jc.jpg',
        name: 'jasminecity',
        description : "Jasmine City is HMDA Approved 12 Acre Plotting Project at Mangalpally Village, near to ORR and IT Hub Adibatla"
    },
]

export const ProjectTimeline = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.typojourney}>
        <Typography  classes={{ root : classes.root}}>OUR JOURNEY</Typography>
        <Typography  classes={{ root : classes.caption}}>Completed Projects</Typography>
        
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDotColor}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-up">
            <ProjectCard project={projectList[0]}/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDotColor}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-up">
            <div className={classes.timelinecontentalternative}>
                <ProjectCard project={projectList[1]}/>
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDotColor}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-up">
            <ProjectCard project={projectList[2]}/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  className={classes.timelineDotColor}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-up">
            <div className={classes.timelinecontentalternative}>
                <ProjectCard project={projectList[3]}/>
            </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    /*    
    <section id="timeline">
        <div className={classes.typojourney}>
        <Typography  classes={{ root : classes.root}}>OUR JOURNEY</Typography>
        <Typography  classes={{ root : classes.caption}}>Completed Projects</Typography>
        </div>
	<div className="demo-card-wrapper">
		<div className="demo-card demo-card--step1" data-aos="fade-up">
			<div className="head">
				<div className="number-box">
					<ProjectCard project={projectList[0]}/>
				</div>
			</div>
		</div>
        <div className="demo-card demo-card--step2" data-aos="fade-up">
			<div className="head">
				<div className="number-box">
                    <ProjectCard project={projectList[1]}/>
				</div>
			</div>
			
		</div>
        <div className="demo-card demo-card--step3" data-aos="fade-up">
			<div className="head">
				<div className="number-box">
                    <ProjectCard project={projectList[3]}/>
				</div>
			</div>
			
		</div>
        <div className="demo-card demo-card--step4" data-aos="fade-up">
			<div className="head">
				<div className="number-box">
                    <ProjectCard project={projectList[2]}/>
				</div>
			</div>
			
		</div>
    
	</div>
    <Button className={classes.cardbutton}>
        Read More
    </Button>
    </section>

    */
    )
}

// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';
// import { ProjectCard } from "./ProjectCard";

// const projectList = [
//         {
//             id: 1029,
//             title : 'SERENE CITY',
//             name: 'serenecity',
//             description : " JB's Serene city is a 540 acre layout with Residential Plotting"
//         },
//         {
//             id: 1040,
//             title : 'SERENE VILLAS',
//             name: 'serenvillas',
//             description : " Serene Villas is HMDA approved 42 Acre Villa Project at Adibatla"
//         },
//         {
//             id: 1048,
//             title : 'SERENE RESORT',
//             name: 'sereneresort',
//             description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
//         },
//         {
//             id: 1043,
//             title : 'SERENE NATURE VALLEY',
//             name: 'serenenaturevalley',
//             description : " JB's Serene Resort is Resort style living plotting project offering modern clubhouse"
//         },
//     ]

// export const  ProjectTimeline = () => {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
        
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//             <ProjectCard project={projectList[0]}/>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//             <ProjectCard project={projectList[1]}/>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//             <ProjectCard project={projectList[2]}/>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//             <ProjectCard project={projectList[3]}/>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }
