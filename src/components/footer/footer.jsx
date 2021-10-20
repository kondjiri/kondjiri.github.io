import { Facebook, GitHub, Instagram, LinkedIn} from '@mui/icons-material'
import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    state={
        open:false
    }
    handleOpen = () =>{this.setState({open:true})}
    handleClose = () => {this.setState({open:false})}

  render() {
      
    return (
      <Fragment>
          <div className="container-fluid m-0 px-0 bg-portfolio border-top" style={{paddingBottom:50,paddingTop:0}}>
                <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
                    <div className="col-lg-8 m-auto row col-md-12 col-sm-12 col-4">
                        <div className="mb-3 mt-3 col-md-4 col-sm-4">
                            <a href="#home" className="text-decoration-none marginItem text-light">
                                <h2 className="m-0 p-0" style={{fontWeight: 700}}>FANE</h2>
                                <p>kondjirif@gmail.com</p>
                            </a>
                        </div>
                        <div className="mb-3 mt-3 col-md-8 col-sm-8 row">
                            <a href="#skills" className="text-decoration-none navbarItemFooter col-md-2 col-sm-2 my-2">#Skills</a>
                            <a href="#experience" className="text-decoration-none navbarItemFooter col-md-2 col-sm-2 my-2">#Qualifs</a>
                            <a href="#portfolio" className="text-decoration-none navbarItemFooter col-md-2 col-sm-2 my-2">#Portfolio</a>
                            <a href="#contact" className="text-decoration-none navbarItemFooter col-md-2 col-sm-2 my-2">#Contact</a>

                        </div>
                    </div>
                    <div className="my-2">
                        <a href="https://github.com/kondjiri" target="_blank" className="text-decoration-none navbarItemFooter mx-2" rel="noreferrer"><GitHub/></a>
                        <a href="https://www.linkedin.com/in/fane-kondjiri-16521b19a/" target="_blank" className="text-decoration-none navbarItemFooter mx-2" rel="noreferrer"><LinkedIn/></a>
                        <a href="https://www.facebook.com/kondjiri.fane" target="_blank" className="text-decoration-none navbarItemFooter mx-2" rel="noreferrer"><Facebook/></a>
                        <a href="https://www.instagram.com/kfane___/" target="_blank" className="text-decoration-none navbarItemFooter mx-2" rel="noreferrer"><Instagram/></a>

                    </div>
                    <div className=" mt-3">
                        <h6 className="text-light" style={{fontWeight: 'lighter',fontSize: 'small'}}>No Rights Reserved</h6>
                    </div>
                   
                </div>
            </div>
      </Fragment>
    )
  }
}
