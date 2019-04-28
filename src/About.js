import React, {Component} from 'react'
import './base.css'

export default class About extends Component {
    render() {
        return (
                <div id="about">
                    <h1 className="title">About</h1>
                    <div className="row cards-row">
                        <div className="col-sm-1"></div>
                        <div className="card col-sm-4" style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/16105673_10154145800201766_1769067621572158091_n.jpg?_nc_cat=106&_nc_ht=scontent.fykz1-1.fna&oh=6dab3baf138c66a02adadc098269dd2f&oe=5D31BFDC" alt="Card image cap"/>
                            <div className="card-body">
                                <h3>Mustafa Omran</h3>
                                <p className="card-text">Mustafa is a front-end developer who spends his time creating beautiful user-friendly websites.</p>
                            </div>
                        </div>  
                        <div className="col-sm-2"></div>
                        <div className="card col-sm-4" style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://scontent.fykz1-1.fna.fbcdn.net/v/t31.0-8/14444766_10211210519449919_8075170483152025416_o.jpg?_nc_cat=103&_nc_ht=scontent.fykz1-1.fna&oh=829a8ae1de6a8316da4c4d578b665598&oe=5D3A7FB4" alt="Card image cap"/>
                            <div className="card-body">
                                <h3>Muher Thalayasingam</h3>
                                <p className="card-text">Muher is a back-end developer who builds the different functionalities behind the scenes.</p>
                            </div>
                        </div> 
                        <div className="col-sm-1"></div>
                    </div>
                </div>
        )
    }
}