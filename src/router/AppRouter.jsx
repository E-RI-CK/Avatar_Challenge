import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';

export const AppRouter = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}