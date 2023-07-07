import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <h4 className="h3">{person.name}</h4>
      <div>
        <p>{person.prof}</p>
        <p>{person.email}</p>
        <p>{person.address}</p>
      </div>
    </div>
  );
}

export default Card;