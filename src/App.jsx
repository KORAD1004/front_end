import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main.jsx';
import Radiation from './pages/radiation/Radiation.jsx';
import TourismHome from './pages/tourism/Home.jsx';
import Introduction from './pages/introduction/introduction.jsx';
import CourseHome from './pages/courseSelection/CourseHome.jsx';
import Header from './components/header/Header.jsx';
import MyTrip from './pages/myTrip/MyTripCreate.jsx';
import CourseView from './pages/courseView/CourseView.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<CourseView/>}/>
        <Route path='/radiation' element={<Radiation/>}/>
        <Route path='/tourism' element={<TourismHome/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/courseSelection' element={<CourseHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}
