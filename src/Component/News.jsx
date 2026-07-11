import React from 'react';
import { useEffect, useState } from 'react';
import Newsitem from './Newsitem.jsx';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';

const  News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState()
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false)
    props.setProgress(100);
    } 
   useEffect (()=> {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
     updateNews();
   }, [])
 
  

  const previoushandlerclick = async () => {
     setPage(page-1)
     updateNews();
  };

  const nexthandlerclick = async () => {
    setPage(page+1)
    updateNews();
  }
    
  

   const fetchMoreData = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
   let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
  };

return (
      <>
        <h1 className='text-center' style={{ margin: '35px 0px', marginTop: "90px" }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
       {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 45) : "Title not available"}
                      description={element.description ? element.description.slice(0, 88) : "Description not available"}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      source={element.source?.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

  News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
export default News;