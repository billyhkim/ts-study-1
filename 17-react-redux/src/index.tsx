import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string; // question mark indicates optional prop
}

interface AppState { // only required if initializing state with constructor
  counter: number;
}

class App extends React.Component<AppProps> {
  // constructor(props: AppProps) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
