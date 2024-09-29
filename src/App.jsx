import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main.jsx';
import Radiation from './pages/radiation/Radiation.jsx';
import TourismHome from './pages/tourism/Home.jsx';
import Introduction from './pages/introduction/introduction.jsx';
import CourseHome from './pages/courseSelection/CourseHome.jsx';
import MyTripCreate from './pages/myTrip/MyTripCreate.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyTripCreate/>}/>
        <Route path='/radiation' element={<Radiation/>}/>
        <Route path='/tourism' element={<TourismHome/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/courseSelection' element={<CourseHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}
