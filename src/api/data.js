import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api'

//Get Movies
const getFilms = async (query = null, page) => {
	const res = await axios.get(`films/?search=${query}&page=${page}`)

	return res.data
}

//Get Characters
const getCharacters = async (query = null, page) => {
	const res = await axios.get(`people/?search=${query}&page=${page}`)
	return res.data
}

//Get Single Character
const getSingleCharacter = async id => {
	const res = await axios.get(`/people/${id}`)
	return res
}

//Get Single Film 
const getSingleFilm = async id => {
	const res = await axios.get(`/films/${id}`)
	return res
}

export default {
	getFilms,
	getCharacters,
	getSingleCharacter,
	getSingleFilm,
}
