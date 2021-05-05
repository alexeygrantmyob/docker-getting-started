import React from "react";

export class MyComponent extends React.Component {

    state = {words: []}
  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://localhost:3001/data',)
        .then(response => response.json())
        .then(data => this.setState({words: data}));
  }

  render() {
    return (
        <div>
            <h1>Fetched Data</h1>
            {this.state.words.map((word) => (<div>{word}</div>))}
        </div>
    );
  }
}

