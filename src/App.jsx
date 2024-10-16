import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import FindCode from './pages/findcode/Findcode.jsx';

// 각 페이지를 lazy 로드
const Main = lazy(() => import('./pages/main/main.jsx'));
const Radiation = lazy(() => import('./pages/radiation/Radiation.jsx'));
const TourismHome = lazy(() => import('./pages/tourism/Home.jsx'));
const Introduction = lazy(() => import('./pages/introduction/introduction.jsx'));
const CourseHome = lazy(() => import('./pages/courseSelection/CourseHome.jsx'));
const RadWaste = lazy(() => import('./pages/radWaste/RadWaste.jsx'));
const MyTrip = lazy(() => import('./pages/myTrip/MyTripCreate.jsx'));
const CourseView = lazy(() => import('./pages/courseView/CourseView.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Main...</div>}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/radiation"
          element={
            <Suspense fallback={<div>Loading Radiation...</div>}>
              <Radiation />
            </Suspense>
          }
        />
        <Route
          path="/tourism"
          element={
            <Suspense fallback={<div>Loading Tourism...</div>}>
              <TourismHome />
            </Suspense>
          }
        />
        <Route
          path="/introduction"
          element={
            <Suspense fallback={<div>Loading Introduction...</div>}>
              <Introduction />
            </Suspense>
          }
        />
        <Route
          path="/courseSelection"
          element={
            <Suspense fallback={<div>Loading Course Selection...</div>}>
              <CourseHome />
            </Suspense>
          }
        />
        <Route
          path="/radWaste"
          element={
            <Suspense fallback={<div>Loading Rad Waste...</div>}>
              <RadWaste />
            </Suspense>
          }
        />
        <Route
          path="/myTrip"
          element={
            <Suspense fallback={<div>Loading My Trip...</div>}>
              <MyTrip />
            </Suspense>
          }
        />
        <Route
          path="/courseView"
          element={
            <Suspense fallback={<div>Loading Course View...</div>}>
              <CourseView />
            </Suspense>
          }
        />
        <Route
          path="/findCode"
          element={
            <FindCode/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}