import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import ProfilePage from '../components/ProfilePage';
import TripsPage from '../components/TripsPage';
import NewTripPage from '../components/NewTripPage';
import EditTripPage from '../components/EditTripPage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/trips" component={TripsPage} exact={true}/>
        <Route path="/trips/new" component={NewTripPage} exact={true}/>
        <Route path="/edit/:id" component={EditTripPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;