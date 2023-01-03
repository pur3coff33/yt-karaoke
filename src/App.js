
import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import NavBarModule from './modules/navbar/navbar.module';

const LandingPage = lazy(() => import('./pages/landing/landing.page'))
const CreateRoomPage = lazy(() => import('./pages/create-room/createroom.page'))
const RoomPage = lazy(() => import('./pages/room/room.page'));



const App = () => {
  return (
    <>
        <Router>
          <NavBarModule />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<LandingPage />}  />
              <Route exact path="/create-room" element={<CreateRoomPage />} />\
              <Route exact path="/room" element={<RoomPage />} />


            </Routes>
          </Suspense>
        </Router>
    </>
  );
}

export default App;
