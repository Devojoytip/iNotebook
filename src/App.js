import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
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
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/signup" element={<Signup />}>
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
