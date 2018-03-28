import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('light');
console.log(ThemeContext);
console.log(ThemeContext.Provider);
console.log(<ThemeContext.Provider value="light" />);
console.log(ThemeContext.Consumer);

class ThemeToggler extends React.Component {
  componentWillMount() {
    this.setState({
      theme: 'light',
    });
  }
  render() {
    console.log(this.state.theme);
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <button
            onClick={() =>
              this.setState(state => ({
                theme: state.theme === 'light' ? 'dark' : 'light',
              }))
            }
          >
            Toggle theme
          </button>
          <Title />
        </ThemeContext.Provider>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {theme => (
            <h1 style={{ color: theme === 'light' ? '#000' : '#eee' }}>text</h1>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

ReactDOM.render(<ThemeToggler />, document.getElementById('app'));
