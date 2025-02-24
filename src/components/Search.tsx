interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function Search({ searchTerm, setSearchTerm }: SearchProps) {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="relative">
        <input
          className="w-full p-3 pl-10 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          type="text"
          name="search"
          placeholder="Cari anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
