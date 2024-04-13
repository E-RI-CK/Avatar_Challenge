import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';

export const CharacterItem = ({ character }) => {

    const url = character.url;
    const parts = url.split('/');
    const number = parts[parts.length - 2];

    return (
        <div
            key={number}
            className='card rounded-sm character-card border-secondary m-3 col-md-3 col-sm-4 col-xs-12'
            style={{ minWidth: '22rem' }}
        >
            <div className='card-header d-flex align-items-center p-3'>
                <h2>{character.name}</h2>
            </div>

            <div className='flex justify-center p-1'>
                <img src={`/assets/characters/${number}.jpg`} alt={`Character ${character.name}`} height={"150px"} width={"250"} />
            </div>

            <div className='card-body'>
                <p className='text-dark'>
                    <span>Gender: </span>
                    {character.gender}
                </p>
                <hr />
                <p className='text-dark'>
                    <span>Born: </span>
                    {character.birth_year}
                </p>
                <hr />
                <p className='text-dark'>
                    <span>Appears in: </span>
                    {character.films.length} film(s)
                </p>

                {/* Link to detailed card */}
                <Link to={`/characters/${getIdFromUrl(character.url)}`}>
                    <button type='button' className='btn rounded btn-primary mt-2'>
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    )
}
