import { ArrowUpward, CodeOutlined, ContactSupportOutlined,FacebookOutlined,Home,Instagram,LinkedIn,PersonOutline, PortraitOutlined,TimelineOutlined, Twitter } from '@mui/icons-material';
import {Avatar, BottomNavigation, BottomNavigationAction,IconButton,Paper, Tooltip} from '@mui/material';
import React, { Component, Fragment } from 'react'

export default class Header extends Component {
  state={
    open:false,
    navValue:'recents'
}
handleNavChange=(event,value)=>{
    this.setState({navValue:value})
}
handleSmallSideMenu = () =>{this.setState({open:!this.state.open})}
handleSmallSideMenuOff = () =>{this.setState({open:false})}
  render() {
    return (
      <Fragment>
        <div id="top" className="desktop m-0 p-0 bg-portfolio" style={{height: '70px',top: 0,zIndex:1000}}>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="col-lg-8 m-auto col-md-12 col-sm-12 col-4 d-flex justify-content-between align-items-center">
              <div className="">
                <a href="#home" className="text-decoration-none marginItem text-light">
                  <Avatar src="images/Fane.png" variant="circular"/>
                </a>
              </div>
              <div className="my-4">
                <a href="#about" className="text-decoration-none navbarItem"> <span className="" style={{fontSize:"small",color:'#576ee0'}}>01.</span> About</a>
                <a href="#skills" className="text-decoration-none navbarItem"> <span className="" style={{fontSize:"small",color:'#576ee0'}}>02.</span> Skills</a>
                <a href="#experience" className="text-decoration-none navbarItem"> <span className="" style={{fontSize:"small",color:'#576ee0'}}>03.</span> Experience</a>
                <a href="#contact" className="text-decoration-none navbarItem"> <span className="" style={{fontSize:"small",color:'#576ee0'}}>04.</span> Contact</a>
              </div>
            </div>
          </div>
        </div>

        
            <div className="position-fixed" style={{height: '300px',width:'40px' ,left: '5px',top:"30%",zIndex: 1000}}>
                   <div className="desktop">
                    <Tooltip placement="left" title="Facebook" arrow>
                        <IconButton href="https://www.facebook.com/kondjiri.fane" target="_blank" className="text-white navbarItemFooter"><FacebookOutlined/></IconButton>
                      </Tooltip>
                      <Tooltip placement="left" title="LinkedIn" arrow>
                        <IconButton href="https://www.linkedin.com/in/fane-kondjiri-16521b19a/" target="_blank"  className="text-white navbarItemFooter"><LinkedIn/></IconButton>
                      </Tooltip>
                      <Tooltip placement="left" title="Instagram" arrow>
                        <IconButton href="https://www.instagram.com/kfane___/" target="_blank"  className="text-white navbarItemFooter"><Instagram/></IconButton>
                      </Tooltip>
                      {/* <Tooltip placement="left" title="Mail" arrow>
                        <IconButton href="kondjiri.fane@ngsystem.net" target="_blank"  className="text-white navbarItemFooter"><MailOutline/></IconButton>
                      </Tooltip> */}
                      <Tooltip placement="left" title="Twitter" arrow>
                        <IconButton href="#portfolio" target="_blank"  className="text-white navbarItemFooter"><Twitter/></IconButton>
                      </Tooltip>
                   </div>
          </div>
          <div className="mobile m-0 p-0 position-fixed" >
            <Paper className="bg-portfolio rounded-pill mobile" sx={{ position: 'fixed', bottom: 5, left: 10, right: 10 }} elevation={3}>
                  <BottomNavigation className="bg-portfolio rounded-pill text-white" style={{width:'100%'}} value={this.state.navValue} onChange={this.handleNavChange}>
                    <BottomNavigationAction className="navbarItemFooter" href="#home" label="Home" value="home" icon={<Home/>}/>
                    <BottomNavigationAction className="navbarItemFooter"
                      href="#about"
                      label="About"
                      value="about"
                      icon={<PersonOutline/>}
                    />
                    <BottomNavigationAction className="navbarItemFooter"
                      href="#skills"
                      label="Skills"
                      value="skills"
                      icon={<CodeOutlined/>}
                    />
                    <BottomNavigationAction className="navbarItemFooter mobile-small"
                      href="#experiences"
                      label="Expériences"
                      value="experiences"
                      icon={<TimelineOutlined/>}
                    />
                     <BottomNavigationAction className="navbarItemFooter mobile-small"
                      href="#portfolio"
                      label="Portfolio"
                      value="portfolio"
                      icon={<PortraitOutlined/>}
                    />
                    <BottomNavigationAction className="navbarItemFooter mobile-small"
                      href="#contact"
                      label="Contact"
                      value="contact"
                      icon={<ContactSupportOutlined/>}
                    />
                  </BottomNavigation>
            </Paper>
    </div>
    <div className="position-fixed" style={{right: '15px',bottom:'15px',zIndex: 1000}}>
      <Tooltip title="Aller en haut" arrow placement="left-end">
        <IconButton href="#top" className="btn-portfolio"><ArrowUpward/></IconButton>
      </Tooltip>
    </div>
      </Fragment>
    )
  }
}
