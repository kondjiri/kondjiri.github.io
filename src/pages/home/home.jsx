
import React, { Component, Fragment } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import {Accordion,Button, AccordionDetails, AccordionSummary, Avatar, IconButton, LinearProgress,Typography} from "@mui/material"
import {ArrowDownwardOutlined, BoltOutlined, Call, CastForEducation, CodeOffOutlined, Download,FlutterDash,FolderOutlined,GitHub,KeyboardArrowDown, MailOutline, Room, RssFeed, SettingsInputAntenna, Storage, Work, WorkOutline} from '@mui/icons-material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default class Home extends Component {
  state={
    expanded:'panel1',
    experience:true
  }
  handleChange=(message)=>{
    this.setState({expanded:message})
  }
  handleExperienceOn=()=>{this.setState({experience:true})}
  handleExperienceOff=()=>{this.setState({experience:false})}
  render() {
    return (
      <Fragment>
          <Header/>
          <div className="container-fluid m-0 paddingTop" style={{minHeight: '100vh',paddingLeft:0,paddingRight:0}}>
              <div className="container-fluid p-0 d-flex justify-content-center align-items-center">
                  <div className="col-lg-8 m-auto col-md-12 flex-column col-sm-12 col-12 d-flex justify-content-between align-items-center p-0">
                      <div id="home" className="container-fluid" style={{minHeight: '60vh'}}>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center py-3">
                             <Avatar src="images/kfane02.jpeg"  sx={{ width: 400, height: 400,display:"flex",alignItems:"center",justifyContent:"center" }} variant="circular"/>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                            <h6 className="text-portfolio">Hi, they call me</h6>
                            <h1 className="text-left text-white" style={{fontWeight:"bolder"}}>Fané Kondjiri</h1>
                            <h3 className="mb-4 text-left text-muted" style={{fontWeight:"bolder"}}>Ingénieur Télécom | Informatiques | Réseaux</h3>
                            <p className="text-white" style={{textAlign:'justify'}}>
                              Je suis passionné par la Technologie<br/>
                              Ma plus grande motivation est de pouvoir mettre en place<br/>
                              des solutions informatiquesqui contribuent au <br/>
                              développement du Pays
                            </p>
                            <a size="large" href="#contact" className="btn btn-lg btn-portfolio"><BoltOutlined/>CONTACT ME</a>
                          </div>
                        </div>
                      </div>
                      <div id="about" className='container-fluid my-4 pb-3'>
                          <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="p-0 m-0 border-bottom text-white" style={{fontWeight:900}}>&#x27E8; <span className="" style={{fontSize:"small",color:'#576ee0'}}>01.</span> About Me&#x27E9;</h2>
                            <p className="p-0 m-0 text-white">My Introduction</p>
                          </div>
                          <div className="row container-fluid">
                            
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex mt-4 flex-column">
                                  <p className="text-muted"  style={{textAlign:'left'}}>
                                    Je suis passionné par la Technologie<br/>
                                    Ma plus grande motivation est de pouvoir mettre en place<br/>
                                    des solutions informatiquesqui contribuent au <br/>
                                    développement du Pays
                                    My name's Younes AGABI. I am an artificial intelligence engineer and
                                     a front-end developer with +3 years of experience. 
                                     I did my internship at the University of Deakin in Australia
                                      and i'm interested in UI & UX Web Design trends.
                                       I mainly use Vue js to realize my web projects as
                                        well as some knowledge in Laravel for the BackEnd. 
                                        I like to make fun and interactive things with code
                                         because in the end, there are three possible reactions
                                          to any design: yes, no and WAHOU!, the third one is 
                                          the one I'm aiming for.
                                  </p>
                                  <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0 text-" style={{fontWeight:900}}>3+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Expériences</p>
                                      </div>
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0" style={{fontWeight:900}}>3+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Projects</p>
                                      </div>
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0" style={{fontWeight:900}}>3+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Company</p>
                                      </div>
                                  </div>
                                  <button size="large" className="btn btn-lg btn-portfolio"><Download/>DOWNLOAD MY CV</button>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                                  <Avatar src="images/kfane01.jpeg" variant="rounded" style={{width:'100%',height:'100%'}} />
                              </div>

                          </div>
                      </div>
                      <div id="skills" className='container-fluid my-4 '>
                          <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>&#x27E8; <span className="" style={{fontSize:"small",color:'#576ee0'}}>02.</span> Skills&#x27E9;</h2>
                            <p className="p-0 m-0">What I master</p>
                          </div>
                          <div className="row container-fluid">
                                  <Accordion className="shadow-none bg-portfolio border-0 p-0 m-0" expanded={this.state.expanded==='panel1'}>
                                    <AccordionSummary className="container-fluid bg-portfolio p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <CodeOffOutlined className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0 text-white" style={{fontWeight:'bolder'}}>&#x27E8;FrontEnd Dev&#x27E9;</h5>
                                                    <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>Cursus Scolaire/Plus de 3 ans d'experience</p>
                                              </Typography>
                                          </Typography>
                                          <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel1')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-portfolio">
                                      <Typography className='container'>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Reactjs</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>HTML & CSS</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Bootstrap</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>JavaScript</span>
                                                  <span>75%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Git</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Angular Js</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Jquery</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Ionic/Angular</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Material UI</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Semantic UI</span>
                                                  <span>60%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={60} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Prime NG</span>
                                                  <span>65%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={65} />
                                          </div>
                                        </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none border-0 bg-portfolio  p-0 m-0" expanded={this.state.expanded==='panel2'}>
                                  <AccordionSummary className="container-fluid bg-portfolio d-flex p-0 m-0 container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <Storage className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0 text-white" style={{fontWeight:'bolder'}}>&#x27E8;BackEnd Dev&#x27E9;</h5>
                                                    <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>Cursus Scolaire/Plus de 3 ans d'experience</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel2')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-portfolio">
                                        <Typography className='container'>
                                        <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>NodeJs</span>
                                                  <span>60%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={60} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>ExpressJs</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Java/Spring Boot</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>PHP</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>SQL/NoSQL</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>Mongo/Mongoose</span>
                                                  <span>75%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>MySQL</span>
                                                  <span>85%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={85} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                  <span>SquelPro</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none bg-portfolio border-0 p-0 m-0" expanded={this.state.expanded==='panel3'}>
                                  <AccordionSummary className="container-fluid bg-portfolio p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <RssFeed className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0 text-white" style={{fontWeight:'bolder'}}>&#x27E8;Networking&#x27E9;</h5>
                                                    <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>Cursus Scolaire</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel3')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography className='container'>
                                          <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                          </p>
                                        </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none bg-portfolio border-0 p-0 m-0" expanded={this.state.expanded==='panel4'}>
                                  <AccordionSummary className="container-fluid bg-portfolio p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <SettingsInputAntenna className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0  text-white" style={{fontWeight:'bolder'}}>&#x27E8;Telecoms&#x27E9;</h5>
                                                    <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>Cursus Scolaire</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel4')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-portfolio">
                                      <Typography className='container'>
                                        <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                          sit amet blandit leo lobortis eget.
                                        </p>
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none bg-portfolio border-0 p-0 m-0" expanded={this.state.expanded==='panel5'}>
                                  <AccordionSummary className="container-fluid bg-portfolio p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <FlutterDash className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0  text-white" style={{fontWeight:'bolder'}}>&#x27E8;AI&#x27E9;</h5>
                                                    <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>Projects</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel5')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-portfolio">
                                      <Typography className='container'>
                                        <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                          sit amet blandit leo lobortis eget.
                                        </p>
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                          </div>
                      </div>
                      <div id="experience" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>&#x27E8; <span className="" style={{fontSize:"small",color:'#576ee0'}}>03.</span> Expériences&#x27E9;</h2>
                              <p className="p-0 m-0">Qualifications</p>
                            </div>
                            <div className="d-flex mb-5 justify-content-center align-items-center">
                              <Button className={this.state.experience?"mx-2 text-white btn-portfolio":"mx-2 text-on text-white"} onClick={this.handleExperienceOn}>&#x27E8; <CastForEducation style={{fontSize:'16px'}}/>Educations&#x27E9;</Button>
                              <Button className={!this.state.experience?"mx-2 text-white btn-portfolio":"mx-2 text-on text-white"} onClick={this.handleExperienceOff}>&#x27E8; <WorkOutline style={{fontSize:'16px'}}/>xpériences Professionnels&#x27E9;</Button>
                            </div>
                            <div className="row container-fluid">
                            {this.state.experience?<Timeline position="alternate">
                                <TimelineItem>
                                  <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                      2015-2020
                                  </TimelineOppositeContent>
                                  <TimelineSeparator>
                                    <TimelineConnector />
                                      <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                      <CastForEducation/>
                                      </TimelineDot>
                                      <TimelineConnector />
                                    </TimelineSeparator>
                                  <TimelineContent>
                                    <h5>Diplôme d’Ingénieur d’État en Télécommunications</h5>
                                    <h6 className="text-muted">Institut National des Télécommunications et des TICs (INTTIC) |Oran Algérie</h6>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineOppositeContent className="text-portfolio" sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                        2012-2015
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                      <TimelineConnector />
                                        <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                        <CastForEducation/>
                                        </TimelineDot>
                                        <TimelineConnector />
                                      </TimelineSeparator>
                                    <TimelineContent>
                                      <h5>Attestation Baccalauréat</h5>
                                      <h6 className="text-muted">Lycée BAminata Coulibaly (LBAC) | Bamako Mali</h6>
                                    </TimelineContent>
                                </TimelineItem>
                              </Timeline>:
                            <Timeline position="alternate">
                                <TimelineItem>
                                  <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                      07/2021- 10/2021
                                  </TimelineOppositeContent>
                                  <TimelineSeparator>
                                    <TimelineConnector />
                                      <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                      <Work/>
                                      </TimelineDot>
                                      <TimelineConnector />
                                    </TimelineSeparator>
                                  <TimelineContent>
                                    <h5>STAGES</h5>
                                    <h6 className="text-muted">NG System | Full Stack Developper & Designer</h6>
                                    <p className="" style={{fontSize:12}}>Logiciels Informatiques, Angular, Reactjs, Java Spring Boot, Nodejs, PHP, JavaScript, Photoshop, Illustration, ionic, React Native, Java, Web Service &API</p>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                      03/2021- 07/2021
                                      </TimelineOppositeContent>
                                      <TimelineSeparator>
                                        <TimelineConnector />
                                          <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                          <Work/>
                                          </TimelineDot>
                                          <TimelineConnector />
                                        </TimelineSeparator>
                                      <TimelineContent>
                                        <h5>FORMATIONS & STAGES</h5>
                                        <h6 className="text-muted"> AFRO Engineering & TC SARL – Installation Télécom & Drive Test & Rapport</h6>
                                        <p className="" style={{fontSize:12}}>Faisceau Hertzien (FH), DCDU, BBU, ATN, RTN, Antenne GSM (Hexa bande, Tribande, Quatribande), Swap d’Antenne Huawei & Nokia, PHU, GNEX Assistant, 4G, 3G, 2G, FPFH, BTS, Baie d’Énergie, Câble d’Alimentation, Câble Jaune-Vert (TER ou Mise à la terre), Câble Jumper, Fibre Optique, Coupleur (1+0 & 1+1), Câble IF.</p>
                                      </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                    02/2020-04/2020
                                      </TimelineOppositeContent>
                                      <TimelineSeparator>
                                        <TimelineConnector />
                                          <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                            <Work/>
                                          </TimelineDot>
                                          <TimelineConnector />
                                        </TimelineSeparator>
                                      <TimelineContent>
                                        <h5>STAGE : Initiation à la Télédétection </h5>
                                        <h6 className="text-muted">ASA (Agence Spatiales d’Algérie) & CTS (Centre des Techniques Spatiales d’Algérie)</h6>
                                        <p className="" style={{fontSize:12}}>Machine Learning, Deep Learning, Images Satellitaires, Classification et Segmentation des Images, Python, Tensorflow (Keras API), Probabilités et Statistiques, Optimisation, Analyse des Données de la Télédétection, PCA, Notions de base sur la Télédétection.</p>
                                      </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                    02/2020-05/2020
                                      </TimelineOppositeContent>
                                      <TimelineSeparator>
                                        <TimelineConnector />
                                          <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                          <Work/>
                                          </TimelineDot>
                                          <TimelineConnector />
                                        </TimelineSeparator>
                                      <TimelineContent>
                                        <h5>STAGE : Projet de Fin d’Étude</h5>
                                        <h6 className="text-muted">CDS (Centre de Dévéloppement Satellitaires) – Implémentation et Analyse des Images Satellitaires en utilisant Machine Learning & Deep Learning | Oran Algérie</h6>
                                        <p className="" style={{fontSize:12}}>Segmentation des Images Satellitaires avec les Deep Learning et CNN et proposé une technique d’amélioration des méthodes</p>
                                      </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                    07/2019-08/2019
                                      </TimelineOppositeContent>
                                      <TimelineSeparator>
                                        <TimelineConnector />
                                          <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                          <Work/>
                                          </TimelineDot>
                                          <TimelineConnector />
                                        </TimelineSeparator>
                                      <TimelineContent>
                                        <h5>STAGES- Introduction Pratique en Réseaux & Informatiques</h5>
                                        <h6 className="text-muted"> HTA – HASNAOUI TELECOM ALGERIA</h6>
                                        <p className="" style={{fontSize:12}}>Administration Réseaux, Sécurité des Réseaux, Automatisation Réseaux, Cloud Storage, Compression des Données, Traitement des Signaux et Images, Réseaux de Nouvelles Génération (2G,3G & 4G), MSAN (DSLAM), IPTV, Modem.</p>
                                      </TimelineContent>
                                </TimelineItem>
                              </Timeline>}
                            </div>
                      </div>
                      <div className="container-fluid rounded p-0" style={{height:400,overflow:'hidden',backgroundColor:"#14203f"}}>
                          <div className='row p-0'>
                              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                  <h2 className="text-portfolio mx-3 my-2 text-left container rounded">Be challengeable forever</h2>
                                  <h6 className="mx-3 container my-2" style={{fontWeight:'lighter'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, 
                                    eius distinctio dicta illo unde voluptas perferendis! Ab, assumenda provident consectetur, 
                                    temporibus cum reiciendis quisquam ex maiores adipisci illum commodi. Qui!
                                  </h6>
                                  <div className="container my-3">
                                    <a size="large" href="#contact" className="btn btn-lg btn-portfolio"><BoltOutlined/>CONTACT ME</a>
                                  </div>
                              </div>
                              <div className="col-md-6 col-sm-12 d-flex justify-content-end p-0" style={{height:400}}>
                                <Avatar src="images/fane_kondjiri_cover.png" variant="rounded" style={{width:400,height:400}}/>
                              </div>
                          </div>
                      </div>
                      <div id="portfolio" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Portfolio</h2>
                              <p className="p-0 m-0">Recents Works</p>
                            </div>
                            <div className="row container-fluid d-flex justify-content-center align-items-center">
                                {
                                  [1,2,3,4,5,6,7,8].map(item=>
                                    <Typography className="shadow-sm rounded m-2" component='div' style={{height:200,width:200,backgroundColor:"#14203f"}}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <FolderOutlined className="text-portfolio"/>
                                            <IconButton href="#"><GitHub className="text-portfolio"/></IconButton>
                                        </div>
                                        <h6 style={{fontWeight:'lighter'}}>Moodle website</h6>
                                        <p className="text-muted" style={{fontSize:'small',fontWeight:'lighter',overflow:'hidden',height:80}}>
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ut quibusdam 
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ut quibusdam 
                                        </p>
                                        <p className="text-portfolio" style={{fontSize:'small',fontWeight:'lighter'}}>
                                            Reactjs. VueJs
                                        </p>
                                    </Typography>
                                    
                                    )
                                }
                            </div>
                      </div>
                      {/* <div  className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Testomonials</h2>
                              <p className="p-0 m-0">What they think about me</p>
                            </div>
                            <div className="row container-fluid">

                            </div>
                      </div> */}
                      <div id="contact" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Contact</h2>
                              <p className="p-0 m-0">Get in touch/Leave a questions</p>
                            </div>
                              <div className="container-fluid">
                                  <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="row my-2">
                                            <div className="col-lg-12 col-md-12 col-sm-6 col-12 text-white d-flex align-items-center my-3">
                                                <span className=" d-flex align-items-center justify-content-center rounded-circle p-2 border-portfolio" style={{width:50,height:50}}><Call className="text-portfolio"/></span>
                                               <div>
                                                  <h6 className="mx-2 my-0 p-0 text-portfolio" style={{fontSize:12}}>Téléphone</h6>
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>+22379773329</h5>
                                               </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-6 col-12 text-white d-flex align-items-center my-3">
                                                <span className=" d-flex align-items-center justify-content-center rounded-circle p-2 border-portfolio" style={{width:50,height:50}}><MailOutline className="text-portfolio"/></span>
                                               <div>
                                                  <h6 className="mx-2 my-0 p-0 text-portfolio" style={{fontSize:12}}>E-mail</h6>
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>kondjirif@gmail.com</h5>
                                               </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-6 col-12 text-white d-flex align-items-center my-3">
                                                <span className=" d-flex align-items-center justify-content-center rounded-circle p-2 border-portfolio" style={{width:50,height:50}}><Room className="text-portfolio"/></span>
                                               <div>
                                                  <h6 className="mx-2 my-0 p-0 text-portfolio" style={{fontSize:12}}>Location</h6>
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>Yirimadio (Bamako-Mali)</h5>
                                               </div>
                                            </div>
                                          </div>
                                  </div>
                                  <div className="row container-fluid col-lg-8 col-md-8 col-sm-12">
                                      <div className="col-md-6 col-sm-12 my-3">
                                          <div className="border-portfolio rounded  px-2 py-1" style={{backgroundColor:"#14203f"}}>
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Nom & Prenom <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-12 my-3">
                                      <div className="border-portfolio rounded  px-2 py-1" style={{backgroundColor:"#14203f"}}>
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>E-mail <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-md-12 col-sm-12 my-3">
                                      <div className="border-portfolio rounded  px-2 py-1" style={{backgroundColor:"#14203f"}}>
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Objet <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 my-3">
                                      <div className="border-portfolio rounded px-2 py-1" style={{backgroundColor:"#14203f"}}>
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Message <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <textarea type="text" style={{resize:'none',height:200}} className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      </div>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </Fragment>
    )
  }
}
