import { useNavigate, Link, useParams } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';
import { FilmName } from '../FilmName/FilmName';

function CharacterDetails({ details, films }) {
    const params = useParams();
    const navigate = useNavigate();
    return (
        // Detailed card with character info and links to films that the character appears in

        <div className='card w-full rounded-sm m-4 character-details-card animate__animated animate__fadeIn'>
            <h3 className='card-header text-dark'>{details.name}</h3>
            <div className='flex justify-around p-2'>
                <div >
                    <h5 className='card-title text-dark'>Attributes</h5>
                </div>
                <div className='flexp-1'>
                    <img src={`/assets/characters/${params.id}.jpg`} alt={`Character ${details.name}`} height={"120px"} width={"200"} />
                </div>
            </div>
            <div className='card-body '>
                <p className='card-text text-dark'>
                    <span className='detail'> Gender: </span>
                    {details.gender}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Birth year: </span>
                    {details.birth_year}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Height: </span>
                    {details.height} cm
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Mass: </span>
                    {details.mass} kg
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Hair color: </span>
                    {details.hair_color}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Skin color: </span>
                    {details.skin_color}
                </p>
                <p className='card-text text-dark'>
                    <span className='detail'> Eye color: </span>
                    {details.eye_color}
                </p>
            </div>
            <div className='card-body'>
                <h5 className='card-title text-dark'>Links</h5>
                <h6 className='card-subtitle text-muted'>Films</h6>
            </div>

            {/* list with films the character appears in */}
            <ul className='list-group list-group-flush'>
                {films &&
                    films.map(film => (
                        <FilmName key={getIdFromUrl(film)} url={`/films/${getIdFromUrl(film)}`} getIdFromUrl={getIdFromUrl(film)} filmUrl={film} />
                    ))
                }
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

export default CharacterDetails
