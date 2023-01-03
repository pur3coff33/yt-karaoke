import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import NavBarModule from './modules/navbar/navbar.module';

const LandingPage = lazy(() => import('./pages/landing/landing.page'))
const CreateRoomPage = lazy(() => import('./pages/create-room/createroom.page'))



const App = () => {
  return (
    <>
        <Router>
          <NavBarModule />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LandingPage />}  />
              <Route path="/create-room" element={<CreateRoomPage />} />

            </Routes>
          </Suspense>
        </Router>
    </>
  );
}

export default App;
