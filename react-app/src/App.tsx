import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import List from './pages/List';
import Detail from './pages/Detail';

function App() {

    const goVue = () => {
        window.history.pushState({}, '', '/vue-app')
    }

    return (
        <div className="App">
            <h2>react 子应用</h2>
            <img style={{width:'80px',height:'80px'}} src={require('./logo.svg').default} />
            <button className="base_button">默认按钮</button>
            <div className='menu'>
                <Link to={'/'}>list</Link>
                <Link to={'/detail'}>detail</Link>
                <a style={{cursor:"pointer"}} onClick={goVue}>vue列表页</a>
            </div>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/detail' element={<Detail/>}/>
            </Routes>
        </div>
    );
}

export default App;
