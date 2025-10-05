import "./Card.css";
function Card(props) {
  return (
    <div
      className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3"
      id="cards"
    >
      <div class=" text-center ">
        <div class="card-body" id="cardElements">
          <h5 class="card-title">{props.header}</h5>
          <p class="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
