import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='PageGrid'>
                <Outlet />
                <Navbar />
            </div>
        </div>
    );
}

export default App;
