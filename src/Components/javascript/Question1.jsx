import { useEffect } from 'react';
import { useState } from 'react';
import Questions from '../../Questions/questions.json';
import '../css/Question.css';

function Question1(props){
    
    const [markedQuestion,setMarkedQuestion] = useState(false);

    useEffect(()=>{
    setMarkedQuestion(props.marked[props.questionId-1]);
    });

    var ques = Questions[props.questionId-1]; 
    var options = [props.optionMarked[props.questionId-1]==1,props.optionMarked[props.questionId-1]==2,props.optionMarked[props.questionId-1]==3,props.optionMarked[props.questionId-1]==4]; // yaha change

    console.log(props.optionMarked);

    function OptionSelected(e){
        var newOptions = props.optionMarked;
        if(e.target.checked){
            newOptions[props.questionId-1] = Number(e.target.id); // yaha change
        }
        else{
           newOptions[props.questionId-1] = 0;
        }
        props.setOptionMarked([newOptions[0],newOptions[1],newOptions[2],newOptions[3],newOptions[4],newOptions[5],newOptions[6]]);
        
    }

    function NextQuestion(){
        props.setId(props.questionId+1);
    }

    function ClearAnswer(){
        var newOptions = props.optionMarked;
        newOptions[props.questionId-1] = 0;
        props.setOptionMarked([newOptions[0],newOptions[1],newOptions[2],newOptions[3],newOptions[4],newOptions[5],newOptions[6]]);
    }

    function MarkQuestion(){
        var newMarked = props.marked;
        newMarked[props.questionId-1] = !newMarked[props.questionId-1];
        setMarkedQuestion(props.marked[props.questionId-1]);
        props.setMark([newMarked[0],newMarked[1],newMarked[2],newMarked[3],newMarked[4],newMarked[5],newMarked[6]]);

    }

    return(
        <>
         <div className="Question">
            <h2>
                {ques.id}
            </h2>
            {ques.question}
         </div>
         <div className="options">
            <label className='button-label'>
              1 &nbsp; <input type="checkbox" id={1} onChange={OptionSelected} checked={options[0]}/> &nbsp; {ques.options[0]}
            </label>
            <br />
            <br />
            <label className='button-label'>
               2 &nbsp; <input type="checkbox" id={2} onChange={OptionSelected} checked={options[1]}/> &nbsp; {ques.options[1]}
            </label>
            <br />
            <br />
            <label className='button-label'>
               3 &nbsp; <input type="checkbox" id={3} onChange={OptionSelected} checked={options[2]}/> &nbsp; {ques.options[2]}
            </label>
            <br />
            <br />
            <label className='button-label'>
               4 &nbsp; <input type="checkbox" id={4} onChange={OptionSelected} checked={options[3]}/> &nbsp; {ques.options[3]}
            </label>
            <br />
            <br />
         </div>
         <div className='button-holder'>
            <button className='next-button' disabled={(ques.id==Questions.length)?true:false} onClick={NextQuestion}> Save and Next </button>
            <button className='mark-button'onClick={MarkQuestion}> {markedQuestion || props.marked[props.questionId-1]?"Remove from Marked":"Mark for Review"}</button>
            <button className='clear-button' onClick={ClearAnswer}> Clear Response</button>
         </div>
        </>
    );
}

export default Question1;