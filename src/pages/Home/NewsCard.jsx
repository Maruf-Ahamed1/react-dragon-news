import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const NewsCard = ({newsProps}) => {
    const {title,image_url,details,_id} = newsProps;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {
              details.length > 200 ? <span>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold"> Read More....</Link> </span>
              :
              <p>{details}</p>
            }
          </p>
     
        </div>
      </div>
    );
};

export default NewsCard;