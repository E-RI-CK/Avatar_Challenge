
import { CharacterItem } from '../CharacterItem/CharacterItem';

export const CharacterCard = ({ characters }) => {
    return (
        // Maps out character cards with attributes and a link to a more detailed card

        <div className='d-flex flex-wrap justify-content-center animate__animated animate__fadeInUp'>
            {characters.map((character, index) => (
                <CharacterItem key={index} character={character}  />
            ))}
        </div>
    )
}


