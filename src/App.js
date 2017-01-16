import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '/* Write your JSX code here*/',
      output: '',
      err: ''
    }
  }
  
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
