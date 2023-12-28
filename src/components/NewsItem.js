import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title, description, imageUrl,newsUrl}=this.props;
        return (
            <div>
                <div class="card " style={{width: "18rem"}}>
                    <img src={imageUrl} class="card-img-top" alt="." />
                    <div class="card-body">
                        <h5 class="card-title" >{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
