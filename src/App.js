import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from './AddProduct';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          {/* <p>Ecomm Dashboard</p> */}
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/add'>
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>


    

          <Route exact path='/update/:id' component={(props) => <UpdateProduct {...props} />} />

          {/* Home route sobar niche thakbe */}
          <Route path='/'>
            <Protected Cmp={ProductList} />
          </Route>
        
        {/* home route and onno route ke swith korar jonno switch use kora hoice */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
