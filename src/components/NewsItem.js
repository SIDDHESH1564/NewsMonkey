import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card " style={{ width: "18rem", height: "34rem" }}>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}> {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-body-secondary">By {author ? author : "Source"} on {new Date(date).toGMTString()}</small></p>
                    </div>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
