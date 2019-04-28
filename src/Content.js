import React, {Component} from 'react'
import './base.css'
import Home from './Home'
import Projects from './Projects'
import About from './About'

export default class Content extends Component{
    render() {
        return (
            <div data-spy="scroll" data-target=".navbar" style={{height: '1000px', overflowY: 'scroll'}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        </ul>
                    </div>
                </nav>

                <section id="home" className="section-body"><Home/></section>
                <section id="projects" className="section-body"><Projects/></section>
                <section id="about" className="section-body"><About/></section>
            </div>
        )
    }
}