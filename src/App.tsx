import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import FacultyPage from './pages/FacultyPage';
import TimetablePage from './pages/TimetablePage';
import BadgesPage from './pages/BadgesPage';
import LibraryPage from './pages/LibraryPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/badges" element={<BadgesPage />} /> {/* ⬅️ New Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;