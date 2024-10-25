export const SeriesCard = (props) => {
    const {img_url,name,rating,description,watch_url,genre} = props.currentSeries;
    const ratingClass = (rating >= 8.5) ? "super-hit":"average"
    return (<li className="netflix-card">
                <div className="card-image-container">
                    <img className="card-image" src={img_url} alt={img_url} width="60%" height="40%" /> 
                </div>
                <div className="card-info">
                <h2>{name}</h2>
                <p>{description} </p>
                <p>{genre.join(", ")}</p>
                {/* Another class is not defined just to show the template string use */}
                <h3>Ratings: <span className={`another-class , ${ratingClass}`}>{rating}</span> <a href={watch_url} target="_blank">
                <button className="watch-now-btn">Watch Now</button>
                </a> </h3>
                </div>         
    </li>);
}
