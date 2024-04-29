
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lander from './components/Lander';
import ExamPortal from './components/ExamPortal';
import CodingQues from './components/CodingQues';
import "bootstrap-icons/font/bootstrap-icons.css";
import StepperForm from './components/stepperform';
import Editor from './components/Editor';



function App() {
  return (
<Router>
      <Routes>
      <Route path="/" element={<Lander/>}/>
      <Route path="/ExamPortal" element={<ExamPortal/>}/>
      <Route path="/CodingQuestion" element={<CodingQues/>}/>
      <Route path="/stepper" element={<StepperForm/>}/>
      <Route path="/editor" element={<Editor/>}/>
      </Routes>
    </Router>
  );
  }
export default App;