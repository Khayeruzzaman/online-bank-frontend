
import Dashboard from './Components/Admin/Dashboard/dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ViewPro from './Components/Admin/Profile/viewProfile';
import AdminList from './Components/Admin/List/adminLists.jsx';
import Home from './Components/Admin/Home';
import EmpList from './Components/Admin/List/empLists.jsx';
import AccountList from './Components/Admin/List/accountList.jsx';
import AccountRequest from './Components/Admin/Requests/accountReq';
import LoanRequest from './Components/Admin/Requests/loanReq';
import AdminAdd from './Components/Admin/Add Users/AddAdmin';
import EmpAdd from './Components/Admin/Add Users/AddEmp';
import News from './Components/Admin/News/news';
import HistoryList from './Components/Admin/History/historyList';
import EditProfile from './Components/Admin/Profile/editprofile';

function App() {
  return (
    <div className="App">
            <Router>
      
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route exact path="/admin/dashboard">
          <Dashboard/>
        </Route>

        <Route exact path="/admin/viewprofile">
          <ViewPro/>
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
          <News/>
        </Route>

        <Route exact path="/admin/history">
          <HistoryList/>
        </Route>

      </Switch>
     
    </Router>
    </div>
  );
}

export default App;
