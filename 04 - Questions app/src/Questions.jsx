import SingleQuestions from "./SingleQuestions"


const Questions = ({question, toggleQuestion, activeId}) => {
  console.log(question);
  return (
   <section className="question-container">
    <h1>Questions</h1>
    {question.map((quest) => <SingleQuestions 
    key={quest.id}  
    {...quest}
    toggleQuestion = {toggleQuestion}
    activeId = {activeId}
    />
    )}
   </section>
  )
}

export default Questions
