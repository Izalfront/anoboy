import { useEffect, useState } from 'react';
import { IAnime } from './interface/interface';
import { getAnime } from './api/api';
import HeaderAnime from './components/Header';
import Search from './components/Search';

function App() {
  const [animes, setAnimes] = useState<IAnime[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAnime().then((data) => {
      setAnimes(data);
    });
  }, []);

  const filteredAnimes = animes.filter((anime) => anime.title_english?.toLowerCase().includes(searchTerm.toLowerCase()) || anime.titles?.some((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <>
      <HeaderAnime />
      <div className="min-h-screen bg-gray-900 px-4 py-8">
        <div className="mb-5">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredAnimes.length > 0 ? (
            filteredAnimes.map((anime) => (
              <div key={anime.mal_id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img src={anime.images?.jpg.image_url} alt={anime.title_english} className="w-full h-64 object-cover" />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-bold">{anime.score}</div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{anime.titles?.[0]?.title || 'No Title'}</h3>
                  <div className="flex flex-col justify-between space-x-5 mb-3">
                    <h3 className="text-sm text-gray-400 line-clamp-1">{anime.title_english || 'No Title'}</h3>
                    <p className="text-sm text-gray-200 font">Studio: {anime.studios[0]?.name || 'Unknown'}</p>
                  </div>
                  <a href="#" className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                    Lihat Detail
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">Anime tidak ditemukan</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
