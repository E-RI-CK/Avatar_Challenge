import './CharacterDetailsPage.css'
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiData from '../../api/ApiData';
import { Loading } from '../../components/Loading/Loading';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { NotFound } from '../NotFound/NotFound';

export default function CharactersDetails() {
    const [details, setDetails] = useState([])
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { id } = useParams()

    // Fetching details about specific character
    const fetchCharacterDetails = useCallback(async () => {
        setLoading(true)
        try {
            const res = await ApiData.getSingleCharacter(id)
            setDetails(res.data)
            setFilms(res.data.films)
            setLoading(false)
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch was aborted')
            } else {
                setDetails(null)
                setLoading(false)
                setError('Fetch data could not')
            }
        }
    }, [id])

    useEffect(() => {
        fetchCharacterDetails()
    }, [fetchCharacterDetails])

    return (
        <>
            {loading && <Loading />}

            <main className='d-flex justify-content-center min-h-[calc(100vh-123px)] bg-[#193851]'>
                {details && <CharacterDetails details={details} films={films} />}
            </main>

            {error && <NotFound error={error} />}
        </>
    )
}
