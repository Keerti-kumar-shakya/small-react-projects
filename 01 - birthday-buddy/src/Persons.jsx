
const Persons = ({person, deleteDate}) => {
const {name, age, image, id} = person;
  return (
  <article className="person">
    <div className="image-bio-container">
    <img className="image-person" src= {image} />
      <div className="bio-data-container">
        <p className="name">{name}</p>
        <p className="date-of-birth">{age} years</p>
      </div>
    </div> 
    <button 
    className="btn-delete"
    onClick={() => deleteDate(id)}
    >delete</button> 
  </article>
  )
}

export default Persons
