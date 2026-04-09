import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/about/Story';
import Mission from './pages/about/Mission';
import Leadership from './pages/about/Leadership';
import Accreditations from './pages/about/Accreditations';

import Academics from './pages/Academics';
import Curriculum from './pages/academics/Curriculum';
import Departments from './pages/academics/Departments';
import AcademicCalendar from './pages/academics/Calendar';
import Examinations from './pages/academics/Exams';

import Admissions from './pages/Admissions';
import AdmissionProcess from './pages/admissions/Process';
import FeeStructure from './pages/admissions/Fees';
import Scholarships from './pages/admissions/Scholarships';
import ApplyOnline from './pages/admissions/Apply';

import Contact from './pages/Contact';
import CampusLife from './pages/CampusLife';
import Infrastructure from './pages/Infrastructure';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/story" element={<Story />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/accreditations" element={<Accreditations />} />

        {/* Academics Routes */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/curriculum" element={<Curriculum />} />
        <Route path="/academics/departments" element={<Departments />} />
        <Route path="/academics/calendar" element={<AcademicCalendar />} />
        <Route path="/academics/exams" element={<Examinations />} />

        {/* Admissions Routes */}
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admissions/process" element={<AdmissionProcess />} />
        <Route path="/admissions/fees" element={<FeeStructure />} />
        <Route path="/admissions/scholarships" element={<Scholarships />} />
        <Route path="/admissions/apply" element={<ApplyOnline />} />

        <Route path="/campus" element={<CampusLife />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
