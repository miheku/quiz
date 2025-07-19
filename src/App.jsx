import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Question from './Question'
function App() {
  const[question,setQuestion] = useState()
  const[count,setCount] = useState(0)
  const[points,setPoint] = useState({
    correct: 0,
    incorrect: 0,
    finished: false
  })
  const[dis,setDis] = useState(true)
  const[start,setStart] = useState(false)
  function reset(){
  setQuestion()
    fetch(`https://opentdb.com/api.php?amount=10&category=${document.querySelector('option:checked').value}&difficulty=easy&type=multiple`)
.then(res => res.json())
.then(data => (setQuestion(data.results)))

setCount(0)
setPoint(({correct: 0, incorrect:0, finished: false}))
setStart(true)
  }

  
  function next(){
    if(count < 9){
      setCount(prev => prev+1)
   document.querySelector('input[name=answer]:checked').value === question[count].correct_answer? setPoint(prev => ({...prev, correct: prev.correct+1})) : setPoint(prev => ({...prev, incorrect: prev.incorrect+1 }))
    document.querySelector('input[name=answer]:checked').checked = false
    }else{
      setPoint(prev =>({...prev,finished: true}))
      document.querySelector('input[name=answer]:checked').value === question[count].correct_answer? setPoint(prev => ({...prev, correct: prev.correct+1})) : setPoint(prev => ({...prev, incorrect: prev.incorrect+1 }))
    }
    
  
  }
function recall(){
  console.log(start)
  setStart(false)
  setPoint(prev =>({...prev, finished:false}))
}

console.log(question)
  return (
    <>
    {start===false?<div className='start-container'>
<select name="category">
        <option value="9">General Knowledge</option>
        <option value="10">Books</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="18">Computer</option>
      </select>
      <button  type='button' onClick={reset} className='reset-button'>Start</button>
    </div>:null}
      
      {question&&start===true?<Question {...question} count ={count} next={next}/>:null}
      {points.finished?<div className='answer-points'>
        <div className='answer-points-card'>
<span className='score-lable'>Your Score: </span>
        <p>{points.correct}/{question.length}</p>
          <button type="button" onClick={recall} className='reset-button'>New?</button>

        </div>

      </div>:null}

    </>
  )
}

export default App
