import React, {useState, useEffect} from 'react';

export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch('http://localhost:9000/questions')  
          .then(res => res.json())
          .then(data => setQuestions(data))
      }, [update])

      const voteQuestion = (id, votes) =>{

        var newVotes = votes == null ? 1 : votes + 1;

        console.log(newVotes);

        var updatequestion = {'id': id, 'votes': newVotes}

        console.log(updatequestion)
        
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
                        
                        </div>
                    </div>)
                    
                    </div>)}
                </div>
            </div>
        </div>
    </div>
    )
}
