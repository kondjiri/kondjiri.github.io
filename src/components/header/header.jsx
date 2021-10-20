import { CodeOutlined, ContactSupportOutlined,Home,PersonOutline, PortraitOutlined,TimelineOutlined } from '@mui/icons-material';
import {Avatar, BottomNavigation, BottomNavigationAction,Paper} from '@mui/material';
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
        <div className="desktop m-0 p-0 bg-portfolio" style={{height: '70px',top: 0,zIndex:1000}}>
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

        <div className="mobile m-0 p-0 position-fixed" style={{height: '300px',width:'40px' ,right: '5px',bottom: '50px',zIndex: 1000}}>
                {/* <div className={this.state.open?sidebarOn:sidebarOff}>
                    <Tooltip placement="left" title="Home" arrow>
                      <IconButton href="#home" className="text-white navbarItemFooter"><Home/></IconButton>
                    </Tooltip>
                    <Tooltip placement="left" title="About" arrow>
                      <IconButton href="#about" className="text-white navbarItemFooter"><PersonOutline/></IconButton>
                    </Tooltip>
                    <Tooltip placement="left" title="Skills" arrow>
                      <IconButton href="#skills" className="text-white navbarItemFooter"><CodeOutlined/></IconButton>
                    </Tooltip>
                    <Tooltip placement="left" title="Expérience" arrow>
                      <IconButton href="#experience" className="text-white navbarItemFooter"><TimelineOutlined/></IconButton>
                    </Tooltip>
                    <Tooltip placement="left" title="Portfolio" arrow>
                      <IconButton href="#portfolio" className="text-white navbarItemFooter"><PortraitOutlined/></IconButton>
                    </Tooltip>
                    <Tooltip placement="left" title="Contact" arrow>
                      <IconButton href="#contact" className="text-white navbarItemFooter"><ContactSupportOutlined/></IconButton>
                    </Tooltip>
              </div>
            <button onClick={this.handleSmallSideMenu} className="btn btn-sm shadow bg-portfolio position-absolute rounded-pill d-flex justify-content-center align-items-center text-light" style={{width: '40px',height: '40px',bottom: '5px',right: '5px',boxShadow: 'none'}}>
              {!this.state.open?<MoreHoriz/>:<Close/>}
            </button> */}
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
      </Fragment>
    )
  }
}
