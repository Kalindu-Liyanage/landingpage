import Navbar from './components/Navbar';
import MyFigure from './components/MyFigure';
import Mysection from './components/Mysection';
import './App.css';
import ContactUs from './pages/ContactUs';
import Project from './pages/Project';


function App() {
  return (
    <>
      <Navbar />
      <main className='flex justify-between'>
        <Mysection />
        <MyFigure />
      </main>
      <ContactUs/>
      <Project/>
    </>
  );
}

export default App;