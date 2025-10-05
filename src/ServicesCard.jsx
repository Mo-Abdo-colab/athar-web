import { Link } from "react-router-dom";
import "./ServicesCard.css";
function ServicesCard(props) {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 mt-2">
      <div id="serviceCard">
        <img src={props.img} class="card-img-top" alt={props.title} />
        <div class="card-body servicescardtext">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
          <Link to={"/booking"} className="btn btn-primary">
            {props.link}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
