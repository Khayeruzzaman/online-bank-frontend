import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Navigations/header';
import HomeNavbar from '../Navigations/homenavbar';
import Home from '../Home/home';
import Contacts from '../Home/contact';
import About from '../Home/about';
import News from '../Home/news';
import Login from '../Home/login';

const HomeController = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Header />
                        <HomeNavbar />
                        <Home />
                    </Route>
                    <Route exact path={"/news"}>
                        <Header />
                        <HomeNavbar />
                        <News />
                    </Route>
                    <Route exact path={"/contacts"}>
                        <Header />
                        <HomeNavbar />
                        <Contacts />
                    </Route>
                    <Route exact path={"/about"}>
                        <Header />
                        <HomeNavbar />
                        <About />
                    </Route>
                    <Route exact path={"/login"}>
                        <Header />
                        <HomeNavbar />
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default HomeController;