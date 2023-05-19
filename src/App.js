import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import NoteState from './context/Notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
