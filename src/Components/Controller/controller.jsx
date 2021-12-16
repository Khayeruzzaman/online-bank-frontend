import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Navigations/header';
import HomeNavbar from '../Navigations/homenavbar';
import Home from '../Home/home';
import Contacts from '../Home/contact';
import About from '../Home/about';
import News from '../Home/news';
import Login from '../Home/login';
import Dashboard from '../Admin/Dashboard/dashboard';
import ViewPro from '../Admin/Profile/viewProfile';
import EditProfile from '../Admin/Profile/editprofile';
import AdminList from '../Admin/List/adminLists';
import EmpList from '../Admin/List/empLists';
import AccountList from '../Admin/List/accountList';
import AccountRequest from '../Admin/Requests/accountReq';
import LoanRequest from '../Admin/Requests/loanReq';
import AdminAdd from '../Admin/Add Users/AddAdmin';
import EmpAdd from '../Admin/Add Users/AddEmp';
import NewsCreate from '../Admin/News/news';
import HistoryList from '../Admin/History/historyList';

//Admin Import


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
                <div style={{ 
                    background: 'url("http://127.0.0.1:8000/admin/background_images/back1.jpg") no-repeat center center fixed',
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                    boxSizing: 'border-box'
                }}>
                    <Route exact path="/admin/dashboard">
                    <Dashboard/>
                    </Route>

                    <Route exact path="/admin/viewprofile">
                    <ViewPro />
                    </Route>

                    <Route exact path="/admin/editprofile/:id/:id">
                    <EditProfile/>
                    </Route>

                    <Route exact path="/admin/dashboard/adminList">
                    <AdminList/>
                    </Route>

                    <Route exact path="/admin/dashboard/employeeList">
                    <EmpList/>
                    </Route>

                    <Route exact path="/admin/dashboard/customerList">
                    <AccountList/>
                    </Route>

                    <Route exact path="/admin/customer/requests">
                    <AccountRequest/>
                    </Route>

                    <Route exact path="/admin/loan/requests">
                    <LoanRequest/>
                    </Route>

                    <Route exact path="/admin/create/admin/users">
                    <AdminAdd/>
                    </Route>
            
                    <Route exact path="/admin/create/employee/users">
                    <EmpAdd/>
                    </Route>

                    <Route exact path="/admin/news/create">
                    <NewsCreate/>
                    </Route>

                    <Route exact path="/admin/history">
                    <HistoryList/>
                    </Route>
                </div>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default HomeController;