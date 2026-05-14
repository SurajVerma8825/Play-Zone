const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Game Zone Finder</h2>

          <p className="mt-4 text-slate-500">
            Discover and book indoor gaming experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Services</h3>
        </div>

        <div>
          <h3 className="font-bold text-lg">Locations</h3>
        </div>

        <div>
          <h3 className="font-bold text-lg">Newsletter</h3>

          <input
            type="text"
            placeholder="Enter email"
            className="mt-4 w-full h-12 rounded-xl border border-slate-200 px-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
