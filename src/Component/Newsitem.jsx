import React from 'react'

const Newsitem = (props) => {


  let { title, description, imageurl, newsurl, author, date } = props;
  return (
    <div className='my-3'>

      <div className="card">
        <img src={!imageurl ? "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2026-06/260604-job-seekers-vsb-1928-55b709.jpg" : imageurl} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "anuoun" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noopener noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark"> Read more</a>
        </div>
      </div>
    </div>
  )
}


export default Newsitem
