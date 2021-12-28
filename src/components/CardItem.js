import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <a className="card-item-link" href={props.path}>
          <figure className="card-item-pic-wrap" data-category={props.label}>
            <img className="card-item-img" alt="Project" src={props.src} />
          </figure>
          <div className="card-item-info">
            <h3>{props.title}</h3>
            <h5 className="card-item-text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
