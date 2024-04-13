import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom"


export const FilmName = ({ url, getIdFromUrl, filmUrl }) => {
    const [film, setFilm] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFilm = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(filmUrl);
            const data = await res.json();

            if (!data.title) {
                throw new Error(res.statusText);
            }
            setFilm(data.title);
            setLoading(false);
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch was aborted');
            } else {
                setLoading(false)
                setError('Fetch data could not');
            }
        }
    }, [filmUrl]);

    useEffect(() => {
        getFilm();
    }, [getFilm]);

    return (
        <>
            {loading && <span>...</span>}
            {
                !loading &&
                <Link key={getIdFromUrl} to={url}>
                    <li className='list-group-item underline font-semibold'>{film}</li>
                </Link>
            }
        </>
    )
}
