import './App.css';

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
