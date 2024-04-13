import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../../helpers/getIdFromUrl";

export const CharacterName = ({ character }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getName = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(character);
            const data = await res.json();

            if (!data.name) {
                throw new Error(res.statusText);
            }
            setName(data.name);
            setLoading(false);
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch was aborted');
            } else {
                setLoading(false)
                setError('Fetch data could not');
            }
        }
    }, [character])

    useEffect(() => {
        getName();
    }, [getName]);

    //console.log(name);
    return (
        <>
            {loading && <span>...</span>}
            {!loading &&
                <Link
                    key={getIdFromUrl(character)}
                    to={`/characters/${getIdFromUrl(character)}`}
                >
                    <li className='list-group-item underline font-bold'>
                        {name}
                    </li>
                </Link>
            }
        </>
    )
}
