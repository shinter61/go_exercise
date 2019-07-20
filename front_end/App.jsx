import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>hello</div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;