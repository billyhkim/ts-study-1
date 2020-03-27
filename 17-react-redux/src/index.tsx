import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string; // question mark indicates optional prop
}

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
