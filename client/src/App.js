//import './App.css';
import Navbar from './components/NavBar';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import { Route, Routes} from "react-router-dom";
import YouthLogin from './pages/YouthLogin';
import Register from './pages/Register';
import { StaffLogin } from './pages/StaffLogin';
import { StaffMenu } from './pages/StaffMenu';
import { EditSites } from './pages/EditSites';
import { AddSites } from './pages/AddSites';
import { RemoveSites } from './pages/Removesites';
import { EditEContact } from './pages/EditEContact';
// import { Reports } from './pages/Reports';
import { GroupEvent } from './pages/GroupEvent';
import { SiteSelect } from './pages/SiteSelect';

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='siteselect' element={<SiteSelect />} />
        <Route path='youthlogin' element={<YouthLogin/>} />
        <Route path='stafflogin' element={<StaffLogin />} />
        <Route path='staffmenu' element={<StaffMenu/>} />
        <Route path='addsites' element={<AddSites/>} />
        <Route path='editsites' element={<EditSites/>} />
        <Route path='removesites' element={<RemoveSites/>} />
        <Route path='register' element={<Register/>} />
        <Route path='editecontact' element={<EditEContact/>} />
        {/* <Route path='reports' element={<Reports/>} /> */}
        <Route path='groupevent' element={<GroupEvent/>}/>
      </Routes>
    </div>
    
  );
}

export default App;