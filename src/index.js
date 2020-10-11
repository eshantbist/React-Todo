import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todos from './containers/Todos';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'


const store = createStore(reducers,applyMiddleware(thunk));

class RootComponent extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todos} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const RootContainer = connect()(RootComponent);

class App extends Component{
  render(){
    return(
      <Provider store={store}> 
        <RootContainer/>
      </Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
