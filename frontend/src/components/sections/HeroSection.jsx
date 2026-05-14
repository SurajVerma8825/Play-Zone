import { SearchForm } from "@/Index";

const HeroSection = () => {
  return (
    <section className="px-6 pt-10">
      <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#F6EEFF] to-[#EEF7FF] py-24 px-8 text-center relative overflow-hidden">
        <h1 className="text-6xl font-black text-slate-900 max-w-4xl mx-auto leading-tight">
          Find & Book the Best Indoor Games Near You
        </h1>

        <p className="mt-6 text-slate-600 text-lg">
          Book Bowling, VR Games, Snooker, Arcade and more instantly.
        </p>

        <div className="mt-10">
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
