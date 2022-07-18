import { useState,useEffect } from "react";
import '../css/Question.css';
import Question from '../../Questions/questions.json';
import Question1 from "./Question1";
import { useNavigate } from "react-router-dom";

const useCountdown = () => {

    const [countDown, setCountDown] = useState(300);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDown-1);
      }, 1000);

  
      return () => clearInterval(interval);
    });
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown) => {
    const minutes = Math.floor(countDown / 60);
    const seconds = Math.floor(countDown % 60);
  
    return [minutes, seconds];
  };

function StateHandler(){
    const [id,setId] = useState(1);
    const [marked,setMarked] = useState([false,false,false,false,false,false,false]);  // to increase question
    const [optionMarked,setOptionMarked] = useState([0,0,0,0,0,0,0]); // to increase question
    const navigate = useNavigate();
    const [minutes, seconds] = useCountdown();

    function QuestionSelector(id){
        return <Question1 optionMarked={optionMarked} setOptionMarked={setOptionMarked} questionId={id} setId={setId} marked={marked} setMark={setMarked}/>
    }

    function ButtonClassSelector(quesId){
        if(marked[Number(quesId-1)]==true)
            return "marked";
        else if(id==quesId)
            return "active";
        else if(optionMarked[Number(quesId-1)]==0)
            return "not";
        else    
            return "attempted";
    }
    
    function ButtonSpawner(quesId){  // pass id of question
        return(
            <button className={ButtonClassSelector(quesId)} onClick={()=> setId(quesId)}>  
                {quesId} 
            </button>
        );
    }

    function SubmitAnswer(){
        var marks = 0;
        for(var i=0;i<Question.length;i++){
            if(optionMarked[i]==0){
                marks+=0;
            }
            else if(optionMarked[i]==Question[i].correct){
                marks+=4;
            }
            else
                marks-=1;
        }
        console.log(marks);
        navigate('/result',{state:{optionMarked,marks}})
    }

    return(
       <>
         <div className="question-holder">
                {QuestionSelector(id)}
            </div>
            <div className="navigator">
                <div className="timer-holder">
                {(minutes>-1 && seconds >= 0)?<>Time Left: <b>{minutes+":"+seconds}</b></>:<>{SubmitAnswer()}</>}
                </div>
                <br />
                {Question.map( question =>
                <span className="button-span" key={question.id}>
                    {ButtonSpawner(question.id)}
                </span>
                )}
                <button onClick={SubmitAnswer} className="submit-button">
                    Submit
                </button>
            </div>
       </>
    );
    
}

export default StateHandler;