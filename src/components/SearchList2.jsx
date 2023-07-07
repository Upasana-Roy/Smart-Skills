import React from 'react';
import Card from './Card';

function SearchList2({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList2;