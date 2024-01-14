import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='PageGrid'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
