import { useEffect, useState } from 'react';
import ApiData from '../../api/ApiData';
import { Loading } from '../../components/Loading/Loading';
import { NotFound } from '../NotFound/NotFound';
import './HomePage.css';

export const HomePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [episodeDisplayed, setEpisodeDisplayed] = useState(false);
  const [nextEpisode, setNextEpisode] = useState(null);

  const fetchCrawl = async (episode) => {
    setLoading(true);
    try {
      const res = await ApiData.getSingleFilm(episode);
      if (!res.data) {
        throw new Error(res.statusText);
      }
      setEpisode(res.data);
      setLoading(false);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch was aborted');
      } else {
        setLoading(false);
        setError('Fetch data could not');
      }
    }
  };

  useEffect(() => {
    fetchCrawl(currentEpisode);
    fetchCrawl(currentEpisode === 6 ? 1 : currentEpisode + 1).then(res => {
      setNextEpisode(res.data);
    });
  }, [currentEpisode]);

  const handleCrawlEnd = () => {
    if (!episodeDisplayed) {
      setEpisodeDisplayed(true);
      setTimeout(() => {
        setEpisodeDisplayed(false);
        setCurrentEpisode((prevEpisode) => (prevEpisode === 6 ? 1 : prevEpisode + 1));
      }, 5000); 
    }
  };

  useEffect(() => {
    if (episodeDisplayed) {
      const timeoutId = setTimeout(() => {
        setEpisode(null);
        setNextEpisode(null);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [episodeDisplayed]);

  return (
    <>
      {loading && <Loading />}
      <main className={`h-[calc(100vh-123px)] home-main ${episodeDisplayed ? 'animate-fade-in' : ''}`}>
        {episode && !episodeDisplayed && (
          <div className="crawl z-10" onAnimationEnd={handleCrawlEnd}>
            <p className="preheader">{`Episode ${episode.episode_id}`}</p>
            <h2 className="header">{episode.title}</h2>
            <p>
              {episode.opening_crawl}
            </p>
          </div>
        )}
        {error && <NotFound error={error} />}
        {nextEpisode && (
          <div className="hidden">
            <p>{`Episode ${nextEpisode.episode_id}`}</p>
            <h2>{nextEpisode.title}</h2>
            <p>{nextEpisode.opening_crawl}</p>
          </div>
        )}
      </main>
    </>
  );
};






