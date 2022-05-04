import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [update, setUpdate] = useState(0);
    const [response, setResponse] = useState("");

    useEffect(() => {
        fetch('http://localhost:9000/questions')  
          .then(res => res.json())
          .then(data => setQuestions(data))
      }, [update])

      const voteQuestion = (id, votes) =>{

        var newVotes = votes == null ? 1 : votes + 1;

        var updatequestion = {'id': id, 'votes': newVotes}
        
        fetch('http://localhost:9000/questions', 
            {
                method:'PATCH', 
                body: JSON.stringify(updatequestion),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }
            })  
          .then(res => res.json())
          .then(setUpdate(update + 1))
          .then(console.log("finished"))
    }

    const submitResponse = (questionID) =>{
        var id = uuidv4();
        var qID = questionID;
        var addResponse = {'id': id, 'qID': qID, 'response': response}

        fetch('http://localhost:9000/responses', 
            {
                method:'POST', 
                body: JSON.stringify(addResponse),
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
            <div className="card-header text-white bg-dark header">Questions</div>
            <div className="card-body ">

                <div class="accordion" id="questionAccordian">
                    {questions.map(q =>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="text-dark" key={q.id}>{q.title == null ? "No Title":q.title}</div>
                            </button>
                        </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#questionAccordian">
                        <div class="accordion-body">
                            <div className="text-dark" key={q.id}>{q.question}</div>
                            <br />

                            <p className="text-dark">(Votes: {q.votes == null ? "0":q.votes})</p>
                            <button className="btn btn-outline-dark" value="Vote" onClick={() => voteQuestion(q.id, q.votes)}>Vote</button>

                            <div>
                                <br></br>
                                <div className="card text-center container p-3 mb-2 bg-secondary text-white">
                                <form>
                                    <textarea className="form-control form-control-lg" onChange={(e)=>setResponse(e.target.value)}></textarea>
                                    <br/>
                                    <button value="Submit A Response" className="btn btn-primary" onClick={() => submitResponse(q.id)}>Submit A Response</button>
                                </form>
                                </div>

                            </div>
                        
                        </div>
                    </div>)
                    </div>)}

                </div>

            </div>
        </div>
    </div>
    )
}
