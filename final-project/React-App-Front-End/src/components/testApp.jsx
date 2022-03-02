import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = { apiResponse: "" };
    }

    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('localhost:9000/users', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form>
              <label className="label">First Name</label>
              <input
                className="input"
                onChange={firstNameChange}
                value={firstName}
                type="text"
              />
              <div>
                <button
                  class="btn btn-primary submit-btn"
                  onClick={submitHandler}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
                {/* <p className="App-intro">{this.state.apiResponse}</p> */}
            </div>
        );
    }
}

export default App;