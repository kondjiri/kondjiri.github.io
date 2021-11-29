
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
import {data} from '../../stores/store'

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
          <div className="container-fluid m-0 paddingTop bg-portfolio" style={{minHeight: '100vh',paddingLeft:0,paddingRight:0}}>
              <div className="container-fluid p-0 d-flex justify-content-center align-items-center">
                  <div className="col-lg-8 m-auto col-md-12 flex-column col-sm-12 col-12 d-flex justify-content-between align-items-center p-0">
                      <div id="home" className="container-fluid" style={{minHeight: '60vh'}}>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center py-3">
                             <Avatar src={data.porfile}  sx={{ width: 400, height: 400,display:"flex",alignItems:"center",justifyContent:"center" }} variant="circular"/>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-3">
                            <h6 className="text-portfolio">{data.messageAcceuil}</h6>
                            <h1 className="text-left text-white" style={{fontWeight:"bolder"}}>{data.nom +' '+data.prenom}</h1>
                            <h3 className="mb-4 text-left text-portfolio" style={{fontWeight:"bolder"}}>{data.job}</h3>
                            <p className="text-white">
                              {data.description}
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
                                <h6 className="text-portfolio">By the way, My name is</h6>
                                <h1 className="text-left text-white" style={{fontWeight:"bolder"}}>{data.nom +' '+data.prenom}</h1>
                                <h5 className="mb-4 text-left text-portfolio" style={{fontWeight:"lighter"}}>{data.job}</h5>
                                  <p className="text-white"  style={{textAlign:'left'}}>
                                   {data.about.description}
                                  </p>
                                  <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0 text-" style={{fontWeight:900}}>{data.about.experiences}+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Expériences</p>
                                      </div>
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0" style={{fontWeight:900}}>{data.about.projects}+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Projects</p>
                                      </div>
                                      <div className="container my-5 d-flex flex-column text-center justify-content-center align-items-center">
                                        <h3 className="p-0 m-0" style={{fontWeight:900}}>{data.about.company}+</h3>
                                        <p className="p-0 m-0" style={{fontSize:'small'}}>Company</p>
                                      </div>
                                  </div>
                                  <a href="files/fane_kondjiri_cv_version_francais.pdf" download><button  size="large" className="btn btn-lg btn-portfolio"><Download/>DOWNLOAD MY CV</button></a>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                                  <Avatar src={data.imgDesc} variant="rounded" style={{width:'100%',height:'100%'}} />
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
                                      {
                                            data.skills.frontend.map(front=>
                                              <div className="mb-2">
                                                  <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                      <span>{front.name}</span>
                                                      <span>{front.percent}%</span>
                                                  </p>
                                                  <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={front.percent} />
                                              </div>
                                              
                                              )
                                          }
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
                                        <Typography className='container  rounded p-2 portfolio-border'>
                                              {
                                                data.skills.backend.map(back=>
                                                  <div className="mb-2">
                                                      <p className="p-0 mb-2 d-flex justify-content-between  text-white" style={{fontSize:'small'}}>
                                                          <span>{back.name}</span>
                                                          <span>{back.percent}%</span>
                                                      </p>
                                                      <LinearProgress variant="determinate" className="rounded-pill" style={{height:8,width:'100%'}} value={back.percent} />
                                                  </div>
                                                  
                                                  )
                                              }
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
                                      <Typography className='container  rounded p-2 portfolio-border' style={{backgroundColor:"#14203f"}}>
                                          <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>
                                                LAN, WAN, RIP (v1 & v2), OSPF, BGP, MPLS, ACL, NAT, PAT, IPV4, IPV6, PPP, AAA, PPoE,
                                                VLAN, VTP, DHCP, HDLC, DNS, HTTP, VPN, TCP/IP
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
                                      <Typography className='container rounded p-2 portfolio-border'  style={{backgroundColor:"#14203f"}}>
                                        <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>
                                          Technologies Radio Mobiles(4G), DBS & Swap d’Antenne, Cryptographie (Symétrique
                                          & Asymétrique), Réseaux de Transport Numérique (MIC, PDH & SDH), Fibres Optiques,
                                          VoIP, Traitement de Signaux Numériques et Analogiques, IPTV, FTTH, ATM, RRU
                                          (5502,5508,5509), RRH, DCDU (12B,16B), BBU (5900 & 3900), Antenne GSM (Hexabande,
                                          bibande, tribande), RTN, ATN, Faisceau Hertzien (Liaison & Configuration)
                                        </p>
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                                  <Accordion className="shadow-none bg-portfolio border-0 p-0 m-0" expanded={this.state.expanded==='panel5'}>
                                  <AccordionSummary className="container-fluid bg-portfolio p-0 m-0 d-flex container-fluid justify-content-between align-items-center" aria-controls="panel1d-content" id="panel1d-header">
                                            <FlutterDash className="text-portfolio" style={{fontSize:'3rem'}}/>
                                          <Typography className="d-flex container-fluid align-items-center">
                                              <Typography>
                                                    <h5 className="p-0 m-0  text-white" style={{fontWeight:'bolder'}}>&#x27E8;Informatiques&#x27E9;</h5>
                                                    <p className="p-0 m-0  text-white" style={{fontSize:'small'}}>Projects</p>
                                              </Typography>
                                          </Typography>
                                        <IconButton className=" text-white text-on" onClick={()=>{this.handleChange('panel5')}}><KeyboardArrowDown/></IconButton> 
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-portfolio">
                                      <Typography className='container  rounded p-2 portfolio-border'  style={{backgroundColor:"#14203f"}}>
                                        <p className="p-0 m-0 text-white" style={{fontSize:'small'}}>
                                            Virtualisation (Stockage, Réseaux, Application, Docker), Cloud Storage (OpenFiler),
                                            Système Distribué, programmation réseaux, Data mapping,
                                        </p>
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion>
                          </div>
                      </div>
                      <div id="experience" className="container-fluid my-4">
                            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                              <h2 className="p-0 m-0 border-bottom" style={{fontWeight:900}}>&#x27E8; <span className="" style={{fontSize:"small",color:'#576ee0'}}>03.</span>Expériences&#x27E9;</h2>
                              <p className="p-0 m-0">Qualifications</p>
                            </div>
                            <div className="d-flex mb-5 justify-content-center align-items-center">
                                <Button className={this.state.experience?"mx-2 text-white btn-portfolio":"mx-2 text-on text-white"} onClick={this.handleExperienceOn}>&#x27E8; <CastForEducation style={{fontSize:'16px'}}/>Educations&#x27E9;</Button>
                                <Button className={!this.state.experience?"mx-2 text-white btn-portfolio":"mx-2 text-on text-white"} onClick={this.handleExperienceOff}>&#x27E8; <WorkOutline style={{fontSize:'16px'}}/>xpériences Professionnels&#x27E9;</Button>
                            </div>
                            <div className="row container-fluid">
                            {this.state.experience?<Timeline position="alternate">
                            {
                                  data.skills.educations.map(edu=>
                                <TimelineItem>
                                  <TimelineOppositeContent className="text-portfolio" sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                        {edu.annee}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                      <TimelineConnector />
                                        <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                        <CastForEducation/>
                                        </TimelineDot>
                                        <TimelineConnector />
                                      </TimelineSeparator>
                                    <TimelineContent>
                                      <h5>{edu.diplome}</h5>
                                      <h6 className="text-muted d-flex align-tems-center"> <Avatar src={edu.img} style={{height:25,width:'auto',marginRight:5}} variant="square"/> {edu.school}</h6>
                                    </TimelineContent>
                                </TimelineItem>)}
                              </Timeline>:
                            <Timeline position="alternate">
                                {
                                  data.skills.experiences.map(exp=>
                                    <TimelineItem>
                                        <TimelineOppositeContent className="text-portfolio"  sx={{ m: 'auto 0',fontWeight:'lighter' }}>
                                            {exp.period}
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                          <TimelineConnector />
                                            <TimelineDot className="text-portfolio" style={{backgroundColor:"#14203f"}}>
                                            <Work/>
                                            </TimelineDot>
                                            <TimelineConnector />
                                          </TimelineSeparator>
                                        <TimelineContent>
                                          <h5>{exp.job}</h5>
                                          <h6 className="text-muted d-flex align-items-center"><Avatar src={exp.img} style={{height:25,width:'auto',marginRight:5}} variant="square"/> {exp.company}</h6>
                                          <p className="" style={{fontSize:12}}>{exp.target}</p>
                                        </TimelineContent>
                                      </TimelineItem>
                                    )
                                }
                              </Timeline>}
                            </div>
                      </div>
                      <div className="container-fluid rounded p-0" style={{height:400,overflow:'hidden',backgroundColor:"#14203f"}}>
                          <div className='row p-0'>
                              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                  <h2 className="text-portfolio mx-3 my-2 text-left container rounded">My Personnal Advise</h2>
                                  <h6 className="mx-3 container my-2" style={{fontWeight:'lighter'}}> {data.conseil}
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
                                  data.skills.portfolio.map(port=>
                                    <Typography className="shadow-sm rounded m-2" component='div' style={{height:200,width:200,backgroundColor:"#14203f"}}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <FolderOutlined className="text-portfolio"/>
                                            <IconButton href={port.link}><GitHub className="text-portfolio"/></IconButton>
                                        </div>
                                        <h6 style={{fontWeight:'lighter'}}>{port.title}</h6>
                                        <p className="text-muted" style={{fontSize:'small',fontWeight:'lighter',overflow:'hidden',height:80}}>
                                        {port.description}
                                        </p>
                                        <p className="text-portfolio" style={{fontSize:'small',fontWeight:'lighter'}}>
                                           {port.technologies}
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
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>{data.tel}</h5>
                                               </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-6 col-12 text-white d-flex align-items-center my-3">
                                                <span className=" d-flex align-items-center justify-content-center rounded-circle p-2 border-portfolio" style={{width:50,height:50}}><MailOutline className="text-portfolio"/></span>
                                               <div>
                                                  <h6 className="mx-2 my-0 p-0 text-portfolio" style={{fontSize:12}}>E-mail</h6>
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>{data.mail}</h5>
                                               </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-6 col-12 text-white d-flex align-items-center my-3">
                                                <span className=" d-flex align-items-center justify-content-center rounded-circle p-2 border-portfolio" style={{width:50,height:50}}><Room className="text-portfolio"/></span>
                                               <div>
                                                  <h6 className="mx-2 my-0 p-0 text-portfolio" style={{fontSize:12}}>Location</h6>
                                                  <h5 className="mx-2 my-0 p-0" style={{fontWeight:'lighter'}}>{data.location}</h5>
                                               </div>
                                            </div>
                                          </div>
                                  </div>
                                  <div className="row container-fluid col-lg-8 col-md-8 col-sm-12">
                                      <div className="col-md-6 col-sm-12 my-3">
                                          <div className="border-portfolio rounded  px-2 py-1 bg-portfolio-input">
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Nom & Prenom <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-12 my-3">
                                      <div className="border-portfolio rounded  px-2 py-1 bg-portfolio-input">
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>E-mail <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-md-12 col-sm-12 my-3">
                                      <div className="border-portfolio rounded  px-2 py-1  bg-portfolio-input">
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Objet <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <input type="text" className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 my-3">
                                      <div className="border-portfolio rounded px-2 py-1 bg-portfolio-input">
                                            <div>
                                              <label htmlFor="nom" className="text-white"  style={{fontSize:15,fontWeight:'lighter'}}>Message <ArrowDownwardOutlined style={{fontSize:15}}/></label>
                                            </div>
                                            <textarea type="text" style={{resize:'none',height:200}} className="form-control border-0 shadow-none bg-transparent text-white rounded"/>
                                          </div>
                                      </div>
                                      <div className="container my-3">
                                        <button size="large" className="btn btn-lg btn-portfolio"><BoltOutlined/>ENVOYER VOTRE MESSAGE</button>
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
