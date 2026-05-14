const SearchForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4">
      <select className="flex-1 h-14 rounded-xl border border-slate-200 px-4 outline-none">
        <option>State</option>
      </select>

      <select className="flex-1 h-14 rounded-xl border border-slate-200 px-4 outline-none">
        <option>City</option>
      </select>

      <input
        type="text"
        placeholder="Game Type"
        className="flex-1 h-14 rounded-xl border border-slate-200 px-4 outline-none"
      />

      <button className="h-14 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold">
        Find Games
      </button>
    </div>
  );
};

export default SearchForm;
