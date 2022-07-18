import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../css/HomePage.css'

const useCountdown = () => {

    const [countDown, setCountDown] = useState(10);
  
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
  

function HomePage(){

    const navigate = useNavigate();
    const [minutes, seconds] = useCountdown();

    useEffect(() => {
        document.title = 'Maths Exam';
      });

    return(
        <div className="all-holder">
            <section className='Heading'>
                <h2>
                    Instructions
                </h2>
            </section>
            <section className='instructions'>
                <ul>
                    <li>
                        All questions are compulsory
                    </li>
                    <li>
                        Each question carries +4 marks for correct answer,-1 marks for wrong answer and 0 marks for unattempted question. 
                    </li>
                </ul>
            </section>
            <section className='timer'>
               {(minutes>-1 && seconds > 0)?<>You can start the exam in <b>{minutes+":"+seconds}</b></>: <>Press the start button</>}
            </section>
            <button className='submit' id="exam-nav" disabled={(minutes > -1 && seconds> 0)?true:false} onClick={()=>navigate("/exam")}>
                Go to exam 
            </button>
        </div>
    )
}

export default HomePage;