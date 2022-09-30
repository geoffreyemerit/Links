import './App.scss';
import '../src/sass/_index.scss';
import { Route, Routes } from 'react-router-dom';
import Links from './pages/Links';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="*" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
