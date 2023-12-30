import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title, description, imageUrl,newsUrl}=this.props;
        return (
            <div>
                <div class="card " style={{width: "18rem",height:"34rem"}}>
                    <img src={imageUrl} class="card-img-top" alt="." />
                    <div class="card-body">
                        <h5 class="card-title" >{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    <a href={newsUrl} target="_blank" rel="noreferrer" class="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}
