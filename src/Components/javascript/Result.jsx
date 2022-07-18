import { useLocation } from 'react-router-dom';
import Questions from '../../Questions/questions.json';
import '../css/Result.css';

function Result(){

    const location = useLocation();
    const optionsUser = location.state.optionMarked;

    function UserAnswers(quesId){
        if(optionsUser[quesId-1]==0)
            return <span><u>You Marked:</u> -</span>
        else{
            return(
                <span className={optionsUser[quesId-1]==Questions[quesId-1].correct?'correct':'incorrect'}> 
                    <u>You Marked:</u> {Questions[quesId-1].options[optionsUser[quesId-1]-1]}
                </span>
            );
        }
    }


    console.log(optionsUser);
    return(
        <>
        <div className='all-result-holder'>
            <div className="result-holder">
                <div className='marks'>
                    You scored <b><u>{location.state.marks}</u></b> out of {Questions.length*4}.
                </div>
                <div className='answers'>
                    {Questions.map((question) => {
                        return(
                            <span className="correct-answers" key={question.id}>
                                <span> {question.question}</span>
                                <br />
                                <span> <u>Correct Answer:</u> {question.options[question.correct-1]}</span>
                                <br />
                                 {UserAnswers(question.id)}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Result;