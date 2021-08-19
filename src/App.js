import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <a
            className="App-link"
            href="../pages/test"
            target="_blank"
            rel="noopener noreferrer"
          >
            test.jsへ
          </a>
        </header>
        <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

          <p>Test</p>
          <div>
            <textarea id="signed" rows="12" cols="120"></textarea>
          </div>
          <button id="callLambda" onClick={myClick}>Lambda呼び出す1</button>
      </main>
      </div>
    );
  }
}
function myClick(){

  alert("onclick");
  var request = require('request');
  request('https://yhrdyh4j8h.execute-api.us-east-2.amazonaws.com/chenr-test001/chenr-function', function (err, response, body) {
    if (!err && response.statusCode == 200) {
      document.getElementById('signed').value= response.body;
    } else {
      alert("API呼出エラー");
    }
  })

}
export default withAuthenticator(App);
