import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx';
import Products from './Products/Products.jsx';
import ProductDetails from './Products/ProductDetails';
import About from './About/About';
import Cart from './MyCart/Cart';
import Account from './Account/Account';

const App = () => {
    
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL + "/"} forceRefresh={true}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/productDetails' component={ProductDetails} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/account' component={Account} />
                    <Route exact path='/cart' component={Cart} />
                </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default App;