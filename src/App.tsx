import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='PageGrid'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
