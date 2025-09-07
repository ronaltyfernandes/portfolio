import './styles/App.css';
import AboutMe from './sections/aboutMe/AboutMe';
import Presentation from './sections/presentation/Presentation';
import Header from './sections/header/Header';
import Projects from './sections/projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <AboutMe />
    </>
  );
}

export default App;
