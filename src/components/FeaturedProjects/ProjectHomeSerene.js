import {
    Container, Grid, Typography, Card, CardMedia, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import "./../../styles/scss/image-gallery.scss"
import App1 from './carousel.js';
import App2 from './ViewImage.js';
import "react-image-lightbox/style.css";

const useStyles = makeStyles({
    container:{
        backgroundImage:  'url("serenecitycurve.png")',
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
    gridInner:{
        marginTop:'30px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            display:"inline"
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            display:"inline"
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            display:"inline"
          },
    },

    gridInner_m:{
        marginTop:'30px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            display:"inline"
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display:"inline"
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },

    },

    gridItems:{
        marginLeft:'0px',
        marginRight:'20px',
        height:220
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
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
        marginTop:'20px',
        position: 'relative'    
    },
    media:{
        width: '100%',
        height:'100%',
        backgroundSize:'contain',
        backgroundPosition:'top',
       
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    buttonName:{
        fontFamily: 'Montserrat',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '18px',
        marginBottom:'10px',
        color:'#f78320',
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
          height:'1100px'
        },
  
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
    tabshandle:{

        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            
          },

    },
    tabshandle_m:{
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            
          },
          ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            display:"none"
          },

    }

})

// const images = [
//     {
//         original: 'serenenaturevalley.jpg',
//         thumbnail: 'serenenaturevalley.jpg',
//       },
//       {
//         original: 'sereneresorts.jpg',
//         thumbnail: 'sereneresorts.jpg',
//       },
//       {
//         original: 'serenevillas.jpg',
//         thumbnail: 'serenevillas.jpg',
//       },
// ]

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

export const ProjectHomeSerene = (props)=>{
    const classes = useStyles();
    const projectName = props.projectName;
    console.log(projectName)
    console.log(props.project)
    const projectHighlights = props.project.valuesproject;
    const locationHighlights = props.project.valueslocation;
    const images = ['sc3.jpg', 'sc1.jpg','sc2.jpg','sc7.jpg','sc8.jpg','sc5.jpg','sc6.jpg'];
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className={classes.container}>
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
                <Grid className={classes.gridInner} item xs={12} sm={12}>
                    <Tabs value={value}
                        onChange={handleChange}
                        centered>
                        <Tab label="Phase I" />
                        <Tab label="Phase II" />
                        <Tab label="Phase III" />
                        <Tab label="Phase IV" />
                        <Tab label="Extension: Phase IV" />
                        <Tab label="Phase V" />
                        <Tab label="Phase VI" />
                        <Tab label="Phase VII" />
                        <Tab label="Phase VIII and IX" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                        <div>
                        <Button className={classes.buttons}><a href='s1.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s1.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                        <div>
                        <Button className={classes.buttons}><a href='s2.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s2.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s3.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s3.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s4.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s4.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s4e.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s4e.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s5.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s5.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s6.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s6.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s7.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s7.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s8.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s8.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    
                </Grid>

























                <Grid className={classes.gridInner_m} item xs={12} sm={12}>
                    <Tabs value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example" 
                        centered>
                        <Tab label="Phase I" />
                        <Tab label="Phase II" />
                        <Tab label="Phase III" />
                        <Tab label="Phase IV" />
                        <Tab label="Extension: Phase IV" />
                        <Tab label="Phase V" />
                        <Tab label="Phase VI" />
                        <Tab label="Phase VII" />
                        <Tab label="Phase VIII and IX" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                        <div>
                        <Button className={classes.buttons}><a href='s1.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s1.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container fixed classes={{root : classes.containerRoot}}>
                        <div>
                        <Button className={classes.buttons}><a href='s2.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s2.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s3.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s3.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s4.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s4.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s4e.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s4e.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s5.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s5.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s6.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s6.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s7.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s7.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                    <Container fixed classes={{root : classes.containerRoot}}>
                    <div>
                    <Button className={classes.buttons}><a href='s8.jpg' style={{textDecoration:"none"}} download><Typography className={classes.buttonName}>Click to Download Layout</Typography></a></Button>
                        <App2 image={'s8.jpg'}/>
                        </div>
                        <Grid container xs={12}>
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
                    </TabPanel>
                    
                </Grid>
            </Grid>
        </Container> 
    )
}