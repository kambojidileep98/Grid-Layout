import React from 'react';
import './Card.css';
function Card(props) {
  return (
    <>
        <section className={`card-container ${props.cardStyle}`}>
            <section className='card-data'>
                <h2>{props.Cardtitle}</h2>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
            </section>
            <button className='purchase-btn'>{props.buttonTitle}</button>
        </section>
    </>
  )
}

export default Card;