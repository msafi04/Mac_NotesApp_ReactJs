
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// to create light/dark mode
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light")); // logic to set: if light then dark vice versa
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="container">
          <div className="app" id={ theme }>
            <Header />
            <div className="switch">
              <ReactSwitch onChange={ toggleTheme } checked={theme === "dark"}/>
            </div>
            <Routes>
              <Route path='/' exact element={<NotesListPage />} />
              <Route path='/note/:id' element={<NotePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
