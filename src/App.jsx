import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './components/routes/Routes';
import Footer from './components/footer/Footer';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={ darkTheme ? 'dark' : ''}>
       <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen'>
        <Navbar />
        <Routes />
        <Footer />
       </div>
    </div>
  )
}

export default App
