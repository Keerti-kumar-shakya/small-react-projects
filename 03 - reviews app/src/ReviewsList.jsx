import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa6";
const ReviewsList = ({id, name, job, image, text, increase, decrease, randomResult}) => {
 
  return (
  <>
  <div className="img-container">
    <img className="image-person" src= {image} alt={name} />
    <span className="quote-img"> 
    <FaQuoteRight/> 
    </span>
  </div>

  <div className="name-occupation-container">
   <p className="name">{name}</p>
   <p className="occupation">{job}</p>
  </div>

  <p className="desc">{text}</p>

  <div className="btn-inc-dec-container">

    <button 
    className="decrease"
    onClick={() => decrease()}
    >
      <FaAngleLeft/>
    </button>

    <button 
    className="increase"
    onClick={() => increase()}
    >
      <FaAngleRight/>
    </button>

  </div>

  <button 
  className="btn-surprise"
 onClick={() => randomResult()}
  >surprise me
  </button>
  </>
  )
}

export default ReviewsList
