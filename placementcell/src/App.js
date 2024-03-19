import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Homenav} from './mycomponents/Homenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import{About} from './mycomponents/About';
import{Home} from './mycomponents/Home';
import{Cell} from './mycomponents/Cell';
import{Login} from './mycomponents/Login';
import{Register} from './mycomponents/Register';
import{Services} from './mycomponents/Services';
import {Dashboard} from './mycomponents/Dashboard'
import {Cellregister} from './mycomponents/Cellregister';
import {Studentlist} from './mycomponents/Studentlist';
import {Celllist} from './mycomponents/Celllist';
import {Findjobs} from './mycomponents/Findjobs';
import { Edit } from './mycomponents/Edit';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Homenav>  </Homenav>
      

      
      <Routes>
                <Route path='/' element={<Home/>}> </Route>
                <Route path='/about' element={<About/>}> </Route>
                <Route path='/services' element={<Services/>}> </Route>
                <Route path='/cell' element={<Cell/>}> </Route>
                <Route path='/login' element={<Login/>}> </Route>
                <Route path='/register' element={<Register/>}> </Route>
                <Route path='/studentdashboard' element={<Dashboard/>}> </Route>
                <Route path='/cellregister' element={<Cellregister/>}> </Route>
                <Route path='/studentlist' element={<Studentlist/>}> </Route>
                <Route path='/celllist' element={<Celllist/>}> </Route>
                <Route path='/dashboard' element={<Dashboard/>}> </Route>
                <Route path='/studentjobs' element={<Findjobs/>}> </Route>
                <Route path='/studentedit/:prn' element={<Edit/>}> </Route>
      
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
