import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ROUTE, SIDEBAR_ITEMS } from './constants/index';
import { Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Provider } from "react-redux";
import Home from './screen/Home';
import New from './screen/New';
import Doing from './screen/Doing';
import Done from './screen/Done';
import NotFound from './screen/NotFound';
import CreateForm from './screen/CreateForm';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className="head">
          <Link to="/create-new-task"><Button variant="outline-primary">Create new task</Button>{' '}</Link>
          <input type="text" placeholder='Type something to search' />
          <Button variant="outline-primary">search</Button>{' '}
        </div>
        <div className="mid">
          <aside>
            {
              SIDEBAR_ITEMS.map((item) => {
                return (
                  <Link to={item.url} key={item.url}>{item.title}</Link>
                )
              })
            }
          </aside>
          <main>
            <div className='container'>
              <Routes>
                <Route
                  path={ROUTE.ALL}
                  element={
                    <Home />
                  }
                />
                <Route
                  path={ROUTE.NEW}
                  element={
                    <New />
                  }
                />
                <Route
                  path={ROUTE.DOING}
                  element={
                    <Doing />
                  }
                />
                <Route
                  path={ROUTE.DONE}
                  element={
                    <Done />
                  }
                />
                <Route
                  path={ROUTE.CREATEFORM}
                  element={
                    <CreateForm />
                  }
                />
                <Route
                  path={ROUTE.NOTFOUND}
                  element={<NotFound />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
