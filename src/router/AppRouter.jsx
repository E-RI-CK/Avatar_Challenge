import '../App.css'
import 'animate.css'
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Navigation } from '../components/Navigation/Navigation';
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import FilmDetailsPage from '../pages/FilmDetailsPage/FilmDetailsPage';
import CharactersPage from '../pages/CharactersPage/CharactersPage';




export const AppRouter = () => {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/films' element={<FilmsPage />} />
                <Route path='/films/:id' element={<FilmDetailsPage />} />
                <Route path='/characters/' element={<CharactersPage />} />
            </Routes>
        </div>
    )
}