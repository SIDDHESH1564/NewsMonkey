import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner from "./spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8
  }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c22dd682be34e0e93f76b2e15e745a3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }
  handleNextClick = async () => {
    // console.log("Next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1
    //     }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews()
  };
  handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c22dd682be34e0e93f76b2e15e745a3&page=${this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c22dd682be34e0e93f76b2e15e745a3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };
  render() {
    return (
      <>
        <h1 style={{margin:'5px 0', marginTop:'90px'}} className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <spinner />}
        {!this.state.loading && (<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<spinner />}
        >

          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 my-4 ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 col-sm-6  my-3 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1229%2Fr1271632_1296x729_16%2D9.jpg"
                      }
                      newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>

        </InfiniteScroll>)}

      </>
    );
  }
}
