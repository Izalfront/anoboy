import { useEffect, useState } from 'react';
import { IGenre } from '../interface/interface';
import { getGenre } from '../api/api';

export function HeaderAnime() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const initialDisplayCount = 10;
  const visibleGenres = isExpanded ? genres : genres.slice(0, initialDisplayCount);

  useEffect(() => {
    getGenre().then((data) => {
      setGenres(data);
    });
  }, []);
  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Anoboy</h1>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {visibleGenres.map((genre) => (
            <a key={genre.mal_id} href={genre.url} className="px-3 py-1 bg-blue-700 hover:bg-blue-800 rounded-full text-sm font-medium border border-blue-500 transition-colors duration-200 whitespace-nowrap">
              {genre.name}
            </a>
          ))}
        </div>

        {genres.length > initialDisplayCount && (
          <div className="text-center">
            <button onClick={() => setIsExpanded(!isExpanded)} className="px-4 py-1 bg-blue-800 hover:bg-blue-900 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              {isExpanded ? 'Show Less ▲' : `Show More (${genres.length - initialDisplayCount} more) ▼`}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderAnime;
