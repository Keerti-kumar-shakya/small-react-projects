
import { AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai';

const SingleQuestions = ({id, title, info, toggleQuestion, activeId}) => {

  const isActive = activeId === id;

  return (
   <article className="single-question-container">
    <div className="question-asked-container">
      <div className="question">{title}</div>
      <button 
      className="question-btn"
      onClick={() => toggleQuestion(id)}
      >
        {isActive? <AiOutlineMinus/> : <AiOutlinePlus />}
      </button>
    </div>
   {isActive && <p className='info'>{info}</p>}
   </article>
  )
}

export default SingleQuestions;
