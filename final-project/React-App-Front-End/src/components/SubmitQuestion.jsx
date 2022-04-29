import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import '../static/css/SubmitQuestion.css';

export default function SubmitQuestion() {
    const [question, setQuestion] = useState("");

    const submitQuestion = (e) =>{
        var id = uuidv4();
        var insert = {
                      'id': id, 
                      'question': question
                    }

        fetch('http://localhost:9000/questions', 
            {
                method:'POST', 
                body: JSON.stringify(insert),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }
            })  
          .then(res => res.json())
          .then(data => console.log(data))
      }
    return (
        <div>
            <br></br>
            <div className="card text-center container p-3 mb-2 bg-secondary text-white">
                <div className="card-header text-white bg-dark header">Submit A Question</div>
                <div className="card-body ">
                    <form>
                        <textarea value={question} className="form-control form-control-lg" onChange={(e)=>setQuestion(e.target.value)}></textarea>
                        <br/>
                        <button value="Submit Question" className="btn btn-primary" onClick={submitQuestion}>Submit Question</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}
