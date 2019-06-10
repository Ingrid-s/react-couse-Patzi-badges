import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Components/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from'../pages/NotFound';
import Home from '../pages/Home';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path ='/badges/new' component= {BadgeNew} />
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
            
           
        </BrowserRouter>
    )
}

export default App;