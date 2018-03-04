import React, { Component } from 'react';
import Picture from './Picture';
import Word from './Word';
import ToList from './ToList';

export default class HangMan extends Component {
  constructor(props) {
    super(props);
    this.words = [
      'TOMATO',
      'BIRD',
      'POSSIBILITY',
      'HANGOVER',
      'MONUMENT',
      'AUXILIARY',
      'REQUESTED',
      'UNIVERSITY',
      'CLASSROOM',
      'ELEPHANT',
      'ARTIST',
      'OBLIGATION',
      'COUNTRY',
      'INSTITUTION',
      'NIGHTMARE',
      'GEOMETRY',
      'WINDOW',
      'RAINFOREST',
      'AWESOME',
      'COMPUTER',
      'KITCHEN',
      'CINEMA',
      'COOKER',
      'STYLE',
      'FIGHT',
      'PROFESSOR',
      'NEWSPAPER',
      'PENINSULA',
      'ROUND',
      'DISAPPEAR'
    ];
    this.state = {
      stringLetters: ['ABCDEFGHIJKLM', 'NOPQRSTUVWXYZ'],
      pressedLetters: [],
      matchedLetters: [],
      word: this.words[0],
      mistakes: 0,
      gameOver: false,
      gameWon: false
    };
  }

  render() {
    const {
      state: {
        mistakes,
        word,
        stringLetters,
        pressedLetters,
        matchedLetters,
        gameOver
      },
      onButtonPress,
      resetGame
    } = this;
    console.log('pressedLetters', pressedLetters);
    console.log('mistakes', mistakes);
    console.log('gameOver', gameOver);
    console.log('-----------------------------');
    return (
      <div>
        <Picture mistakes={mistakes} />
        <Word word={word} matchedLetters={matchedLetters} />
        <div className="boxx">
          {stringLetters.map((item, key) => (
            <ToList
              key={key}
              pressedLetters={pressedLetters}
              stringLetters={item}
              onButtonPress={onButtonPress}
              gameOver={gameOver}
            />
          ))}
        </div>
        {gameOver ? (
          <button onClick={resetGame} class="tryAgin">
            Try again
          </button>
        ) : null}
      </div>
    );
  }

  onButtonPress = item => {
    const {
      state: { pressedLetters, matchedLetters, word, mistakes },
      props: { changeHangman }
    } = this;

    let result = { pressedLetters: [...pressedLetters, item] };
    if (word.indexOf(item) !== -1) {
      result.matchedLetters = [...matchedLetters, item];
    } else {
      result.mistakes = mistakes + 1;
      if (result.mistakes > 5) {
        result.gameOver = true;
        changeHangman('Game Over');
      }
    }

    this.setState(result);
    /*if(differentlLetters(word.split(''))==differentlLetters(matchedLetters)){
      this.props.changeHangman('You Win');
      let i=Math.floor(Math.random() * Math.floor(30));
      this.setState({
        mistakes: 7,
        gameWon: true
      });

      return null;
    }*/
    console.log('button has been pressed', item);
  };

  resetGame = () => {
    let i = Math.floor(Math.random() * Math.floor(30));
    this.setState({
      pressedLetters: [],
      matchedLetters: [],
      word: this.words[i],
      mistakes: 0,
      gameOver: false,
      gameWon: false
    });
    this.props.changeHangman('Hang Man');
  };
}

const differentlLetters = word => {
  let counter = 0;
  for (let i = 65; i < 121; i++) {
    if (word.indexOf(String.fromCharCode(i)) != -1) counter++;
  }
  return counter;
};
/*const NewGame = ({word,matchedLetters}) => {
  if (differentlLetters(word.split('')) == differentlLetters(matchedLetters)) {
    this.props.changeHangman('You Win');
    let i = Math.floor(Math.random() * Math.floor(30));
    this.setState({
      mistakes: 7,
      gameWon: true
    });
    return <button>New Game </button>;
  }


};*/
