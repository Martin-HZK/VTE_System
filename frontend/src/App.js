import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import StarterLayout from './StarterLayout';
import Login from './pages/Login';
import MainLayout from './MainLayout';
import DashBoard from './pages/DashBoard';
import DetailedDashBoard from './pages/DetailedDashBoard';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      {/* <div>
        <h1 className='text-3xl font-bold underline'>My first React App</h1>
      </div> */}
<Router>
      <Routes>
        <Route path='/' element={<StarterLayout />}>
          <Route index element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route element={<MainLayout />}>
            <Route path='/dashboard' element={<DashBoard />}></Route>
            <Route path='/details' element={<DetailedDashBoard />}></Route>
          </Route>

        </Route>
        {/* There can be another system router integrated here */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
