
import React, { Component, Fragment } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import {Accordion, AccordionDetails, AccordionSummary, Button, IconButton, LinearProgress,Typography} from "@mui/material"
import {BoltOutlined, CodeOffOutlined, Download,KeyboardArrowDown, RssFeed, SettingsInputAntenna, Storage} from '@mui/icons-material'

export default class Home extends Component {
  state={
    expanded:''
  }
  handleChange=(message)=>{
    this.setState({expanded:message})
  }
  render() {
    return (
      <Fragment>
          <Header/>
          <div className="container-fluid m-0 paddingTop" style={{minHeight: '100vh'}}>
              <div className="container-fluid p-0 d-flex justify-content-center align-items-center">
                  <div className="col-lg-8 m-auto col-md-12 flex-column col-sm-12 col-12 d-flex justify-content-between align-items-center">
                      <div id="home" className="container-fluid border" style={{height: '60vh'}}>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-5 col-12 d-flex justify-content-center align-items-center py-3">

                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-7 col-12 py-3">
                            <h1 style={{fontWeight:"bolder"}}>Fané Kondjiri</h1>
                            <h3 className="mb-4 text-justify" style={{fontWeight:"bolder"}}>Ingénieur Télécom | Informatiques | Réseaux</h3>
                            <p className="text-justify">
                              Je suis passionné par la Technologie<br/>
                              Ma plus grande motivation est de pouvoir mettre en place<br/>
                              des solutions informatiquesqui contribuent au <br/>
                              développement du Pays
                            </p>
                            <Button size="large" className="btn btn-lg btn-hover btn-portfolio rounded text-white"><BoltOutlined/>CONTACT ME</Button>
                          </div>
                        </div>
                      </div>
                      <div id="about" className='container-fluid my-4 border-bottom pb-3'>
                          <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>About Me</h2>
                            <p className="p-0 m-0">My Introduction</p>
                          </div>
                          <div className="row container-fluid">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                  <img src="images/fane.png" className="rounded-pill shadow-sm bg-portfolio" style={{width:"100%",height:"100%"}} alt="" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center flex-column">
                                  <p className="">
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
                                  <div className="d-flex justify-content-between align-items-center">
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0" style={{fontWeight:900}}>3+</h3>
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
                                  <Button size="large" className="btn btn-lg btn-hover btn-portfolio rounded text-white"><Download/>DOWNLOAD MY CV</Button>
                              </div>

                          </div>
                      </div>
                      <div id="skills" className='container-fluid my-4'>
                          <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Skills</h2>
                            <p className="p-0 m-0">What I master</p>
                          </div>
                          <div className="row container-fluid">
                                  <Accordion className="shadow-none border-0 p-0 m-0" expanded={this.state.expanded==='panel1'}>
                                    <AccordionSummary className="container-fluid p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <CodeOffOutlined className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0" style={{fontWeight:'bolder'}}>FrontEnd Dev</h5>
                                                    <p className="p-0 m-0" style={{fontSize:'small'}}>Cursus Scolaire/Plus de 3 ans d'experience</p>
                                              </Typography>
                                          </Typography>
                                          <IconButton onClick={()=>{this.handleChange('panel1')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography className='container'>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Reactjs</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>HTML & CSS</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Bootstrap</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>JavaScript</span>
                                                  <span>75%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Git</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Angular Js</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Jquery</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Ionic/Angular</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Material UI</span>
                                                  <span>90%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={90} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Semantic UI</span>
                                                  <span>60%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={60} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Prime NG</span>
                                                  <span>65%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={65} />
                                          </div>
                                        </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none border-0  p-0 m-0" expanded={this.state.expanded==='panel2'}>
                                  <AccordionSummary className="container-fluid d-flex p-0 m-0 container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <Storage className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0" style={{fontWeight:'bolder'}}>BackEnd Dev</h5>
                                                    <p className="p-0 m-0" style={{fontSize:'small'}}>Cursus Scolaire/Plus de 3 ans d'experience</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton onClick={()=>{this.handleChange('panel2')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='container'>
                                        <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>NodeJs</span>
                                                  <span>60%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={60} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>ExpressJs</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Java/Spring Boot</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>PHP</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>SQL/NoSQL</span>
                                                  <span>70%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={70} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>Mongo/Mongoose</span>
                                                  <span>75%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={75} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>MySQL</span>
                                                  <span>85%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={85} />
                                          </div>
                                          <div className="mb-2">
                                              <p className="p-0 mb-2 d-flex justify-content-between" style={{fontSize:'small'}}>
                                                  <span>SquelPro</span>
                                                  <span>80%</span>
                                              </p>
                                              <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={80} />
                                          </div>
                                          </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none border-0 p-0 m-0" expanded={this.state.expanded==='panel3'}>
                                  <AccordionSummary className="container-fluid p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <RssFeed className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0" style={{fontWeight:'bolder'}}>Networking</h5>
                                                    <p className="p-0 m-0" style={{fontSize:'small'}}>Cursus Scolaire</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton onClick={()=>{this.handleChange('panel3')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography className='container'>
                                          <p className="p-0 m-0" style={{fontSize:'small'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                          </p>
                                        </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none border-0 p-0 m-0" expanded={this.state.expanded==='panel4'}>
                                  <AccordionSummary className="container-fluid p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <SettingsInputAntenna className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0" style={{fontWeight:'bolder'}}>Telecoms</h5>
                                                    <p className="p-0 m-0" style={{fontSize:'small'}}>Cursus Scolaire</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton onClick={()=>{this.handleChange('panel4')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography className='container'>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>
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
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Experiences</h2>
                              <p className="p-0 m-0">Qualifications</p>
                            </div>
                            <div className="row container-fluid">

                            </div>
                      </div>
                      <div id="portfolio" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Portfolio</h2>
                              <p className="p-0 m-0">Recents Works</p>
                            </div>
                            <div className="row container-fluid">

                            </div>
                      </div>
                      <div  className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Testomonials</h2>
                              <p className="p-0 m-0">What they think about me</p>
                            </div>
                            <div className="row container-fluid">

                            </div>
                      </div>
                      <div id="contact" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>Contact</h2>
                              <p className="p-0 m-0">Get in touch/Leave a questions</p>
                            </div>
                            <div className="row container-fluid">

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
