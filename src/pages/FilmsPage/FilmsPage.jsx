import './FilmsPage.css'
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import ApiData from '../../api/ApiData';
import FilmCard from '../../components/FilmCard/FilmCard';

export default function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
    page: 1,
  })

  // Keeping track of search query and page
  const query = searchParams.get('query')
  const page = searchParams.get('page')

  // Fetching films from API
  const fetchFilms = async (query, page) => {
    setLoading(true)
    const data = await ApiData.getFilms(query, page);
    //Ordering from menor to major episode
    setFilms(data.results.sort((a, b) => a.episode_id - b.episode_id));
    setData(data);
    setLoading(false);
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!searchInput.length) {
      return
    }

    setSearchParams({ query: searchInput, page });
  }

  useEffect(() => {
    fetchFilms(query, page)
  }, [query, page]);

  return (
    <>
      <main className='min-h-[calc(100vh-123px)] bg-[#193851]'>
        <SearchBar
          onHandleSubmit={handleSubmit}
          onSetSearchInput={setSearchInput}
          onSearchInput={searchInput}
        />
        {loading && <Loading />}

        {data && (
          <>


            {query && (
              <p className='text-center'>
                Showing {data.count} search result(s) for '{query}'
              </p>
            )}

            <FilmCard films={films} />

            {!loading && (
              <Pagination
                onSetSearchParams={setSearchParams}
                data={data}
                query={query}
                page={page}
              />
            )}
          </>
        )}
      </main >
    </>
  )
}
