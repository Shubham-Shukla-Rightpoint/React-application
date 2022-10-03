import React from "react";

const ShowCardDetails = (props) => {
  const {name="Prateek", cardnumber="000000000000000", month="00", year="00", cvv="000"} = props
  return(
    <>
      <div className="card-front">
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
        <p>{cardnumber}</p>
        <div className="details">
          <div className="user-name">
            <p>{name}</p>
          </div>
          <div className="exp-date">
            <span>{month}</span>/
            <span>{year}</span>
          </div>
        </div>
      </div>
      <div className="card-back">
        <div className="black-box"></div>
        <div className="cvv">
          {cvv}
        </div>
      </div>
    </>
  )
}

export default ShowCardDetails
