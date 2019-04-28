import React, {Component} from 'react'
import './base.css'

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h1 className="title">Projects</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.bvfd.com/wp-content/uploads/2015/12/placeholder.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.bvfd.com/wp-content/uploads/2015/12/placeholder.jpg" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.bvfd.com/wp-content/uploads/2015/12/placeholder.jpg" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}