import React,{useState} from 'react';
import './App.css';

function App() {

  const questions =[
    {
      questionText: 'Столица США ?',
      answerOptions:[
        { answerText:'Бостон',isCorrect:false},
        { answerText:'Вашингтон',isCorrect:true},
        { answerText:'Лос-Анджелес',isCorrect:false},
        { answerText:'Нью-Йорк',isCorrect:false}
      ]
    },
    {
      questionText: 'Какая компания разработала React ?',
      answerOptions:[
        { answerText:'Google',isCorrect:false},
        { answerText:'Samsung',isCorrect:false},
        { answerText:'Apple',isCorrect:false},
        { answerText:'Facebook',isCorrect:true}
      ]
    },
    {
      questionText: 'Какой герой не из вселенной DC Comics',
      answerOptions:[
        { answerText:'Бэтмен',isCorrect:false},
        { answerText:'Харли-Квинн',isCorrect:false},
        { answerText:'Человек Паук',isCorrect:true},
        { answerText:'Супермен',isCorrect:false}
      ]
    },
    {
      questionText: 'Какаи из игр не относится к жанру RPG',
      answerOptions:[
        { answerText:'Fallout',isCorrect:false},
        { answerText:'Withcer',isCorrect:true},
        { answerText:'The elder Scrols',isCorrect:false},
        { answerText:'Call of Duty',isCorrect:true}
      ]
    }
  ]



  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [showScore,setShowScore] = useState(false)


  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect){
      setScore(score+1)
    }

    const nextQuestion = currentQuestion + 1 

    if (nextQuestion <questions.length){
      setCurrentQuestion(nextQuestion)
    } else{
      setShowScore(true)
    }

  }

  const refresh = () =>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="app">

    {
      showScore
      ? <div className="SectionScore">
        <div>Правильных Ответов {score} из {questions.length}</div>
        <button className="refresh_btn" onClick={refresh}>Попробовать ещё раз</button>
        </div>
        : <div className="quizz">
        <div className="question_section">
          <div className="question_count">
            <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
          </div>
          <div className="question_text">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer_section">
          {questions[currentQuestion].answerOptions.map(item=> (<button onClick={()=> handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>))}
        </div>
      </div>
    }
    </div>
  );
}

export default App;
