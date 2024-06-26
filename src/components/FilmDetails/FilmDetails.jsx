import { useNavigate } from 'react-router-dom';
import { CharacterName } from '../CharacterName/CharacterName';


function FilmDetails({ details, characters, id }) {
    const navigate = useNavigate();

    return (
        // Detailed card with film info and links to characters that appears in the film

        <div className='card p-4 character-details-card animate__animated animate__fadeIn w-full'>
            <h3 className='card-header text-dark'>{details.title}</h3>
            <div className='card-body flex justify-between px-8 w-full md:min-w-[80vw]'>
                <div >
                    <h5 className='card-title text-dark'>Attributes</h5>
                </div >
                <div className='flex justify-start p-1 '>
                    <img src={`/assets/chapters/episode_${details.episode_id}.jpg`} alt={`Episodio ${details.episode_id}`} />
                </div>
            </div>
            <div className='card-body '>
                <p className='card-text text-dark'>
                    <span className='detail'> Episode: </span>
                    {details.episode_id}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Director(s): </span>
                    {details.director}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Producer(s): </span>
                    {details.producer}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Release date: </span>
                    {details.release_date}
                </p>
            </div>
            <div className='card-body'>
                <h5 className='card-title text-dark'>Links</h5>
                <h6 className='card-subtitle text-muted'>Characters</h6>
            </div>

            {/* list with appearing characters in the film */}
            <ul className='list-group list-group-flush'>
                {characters &&
                    characters.map(character => (
                        <CharacterName key={character} character={character} />
                    ))}
            </ul>

            {/* back button  */}
            <div className='m-2 pt-4'>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => navigate(-1)}
                >
                    Go back
                </button>
            </div>
        </div>
    )
}

export default FilmDetails
