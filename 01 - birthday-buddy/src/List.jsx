import Persons from "./Persons"

const List = ({people, deleteDate}) => {
  return (
    <section>
      {people.map( (person) => <Persons 
      deleteDate = {deleteDate} 
      key={person.id} 
      person = {person}
      />)}
    </section>
  )
}

export default List
