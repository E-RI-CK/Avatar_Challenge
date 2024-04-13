import { useEffect, useState } from 'react';
import ApiData from '../../api/ApiData';
import { Loading } from '../../components/Loading/Loading';
import { NotFound } from '../NotFound/NotFound';
import './HomePage.css';


export const HomePage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Randomizes a random number to fetch 1 out of 6 films
  const randomEpisode = Math.floor(Math.random() * (6 - 1) + 1)

  // Fetching data from API
  const fetchCrawl = async () => {
    setLoading(true);
    try {
      const res = await ApiData.getSingleFilm(randomEpisode);

      if (!res.data) {
        throw new Error(res.statusText);
      }

      setData(res.data);
      setLoading(false);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch was aborted');
      } else {
        setLoading(false)
        setError('Fetch data could not');
      }
    }
  }

  useEffect(() => {
    fetchCrawl();
  }, [])

  return (
    <>
      {loading && <Loading />}
      {data && (
        // The famous Star Wars opening crawl
        <main className='h-[calc(100vh-123px)] home-main'>
          <div className="crawl z-10">
            <p className="preheader">{`Episode ${data.episode_id}`}</p>
            <h2 className="header">{data.title}</h2>
            <p>
              {data.opening_crawl}
            </p>
          </div>
        </main>
      )}

      {error && <NotFound error={error} />}
    </>
  )
}

