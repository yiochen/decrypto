import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wordList from "./wordList";

const randomInt = max => {
  return Math.floor(Math.random() * max);
};

const swap = (arr, pos1, pos2) => {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
};

const randomWords = () => {
  const totalWords = wordList.length;
  const wordListCopy = [...wordList];
  const count = 4;
  let possibleChoices = totalWords;
  for (let i = 0; i < count; i++) {
    swap(wordListCopy, i, i + randomInt(possibleChoices));
    possibleChoices -= 1;
  }
  return wordListCopy.slice(0, 4);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: randomWords()
    };
  }

  handleReset = () => {
    this.setState(() => ({ words: randomWords() }));
  };
  render() {
    const { words } = this.state;

    return (
      <div className="App">
        {words.map(word => <h1 key={word}>{word}</h1>)}
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
