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
            <p>Questions</p>
            <div>
                {questions.map(q => 
                    <div key={q.id}>{q.question} (Votes: {q.votes == null ? "0":q.votes}) 
                        <button value="Vote" onClick={() => voteQuestion(q.id, q.votes)}>Vote</button> 
                    </div>)
                }
            </div>
        </div>
    )
}
