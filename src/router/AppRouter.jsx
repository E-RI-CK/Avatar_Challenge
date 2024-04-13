import '../App.css'
import 'animate.css'
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Navigation } from '../components/Navigation/Navigation';
import FilmsPage from '../pages/FilmsPage/FilmsPage';




export const AppRouter = () => {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/films' element={<FilmsPage />} />
            </Routes>
        </div>
    )
}