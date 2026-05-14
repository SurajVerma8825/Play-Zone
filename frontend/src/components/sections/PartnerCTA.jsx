const PartnerCTA = () => {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white">Become a Partner</h2>

          <p className="text-violet-100 mt-3 text-lg">
            Own a Game Zone? Grow your business with us.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-2xl bg-white text-violet-700 font-semibold">
            Join Us
          </button>

          <button className="px-6 py-3 rounded-2xl border border-white text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
