import '../App.css'
import 'animate.css'
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Navigation } from '../components/Navigation/Navigation';
import { Loading } from '../components/Loading/Loading';
import { NotFound } from '../pages/NotFound/NotFound';



export const AppRouter = () => {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/n' element={<Loading />} />
            </Routes>
        </div>
    )
}