import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main.jsx';
import Radiation from './pages/radiation/Radiation.jsx';
import TourismHome from './pages/tourism/Home.jsx';
import Introduction from './pages/introduction/introduction.jsx';
import CourseHome from './pages/courseSelection/CourseHome.jsx';
import Header from './components/header/Header.jsx';
import RadWaste from './pages/radWaste/RadWaste.jsx';
import MyTrip from './pages/myTrip/MyTripCreate.jsx';
import CourseView from './pages/courseView/CourseView.jsx';
import FindCode from './pages/findcode/findcode.jsx';
import { Suspense } from 'react';
import Loading from './components/loading/Loading.jsx';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
  
        <Route path='/' element={<RootLayout />}>
          <Route index={true} element={<Main />}/>
          <Route path='tourism' element={<TourismHome/>}/>
          <Route path='introduction' element={<Introduction/>}/>
          <Route path='courseSelection' element={<CourseHome/>}/>
          <Route path='radWaste' element={<RadWaste/>}/>
          <Route path='myTrip' element={<MyTrip/>}/>
          <Route path='courseView' element={<CourseView/>}/>
          <Route path='findCode' element={<FindCode/>}/>
        </Route>

        <Route path='/radiation' element={<LazyLayout />}>
          <Route index={true} element={<Radiation />}/>
        </Route>
       
      </Routes>
    </BrowserRouter>

  )
}

function RootLayout() {
  return(
    <>
      <Header />
      <Outlet />
    </>
  );

}

function LazyLayout() {
  return (
    <>
      <Suspense fallback={<Loading time={0.5}/>}>
        <Outlet />
      </Suspense>
    </>
  )
}
