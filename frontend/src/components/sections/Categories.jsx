import { CategoryCard } from "@/Index";

const Categories = () => {
  const categories = [
    {
      title: 'Bowling',
      subtitle: '12+ Lanes',
      image: 'https://cdn-icons-png.flaticon.com/512/861/861512.png',
    },
    {
      title: 'VR Gaming',
      subtitle: '12+ Games',
      image: 'https://cdn-icons-png.flaticon.com/512/3474/3474360.png',
    },
    {
      title: 'Snooker',
      subtitle: '22+ Tables',
      image: 'https://cdn-icons-png.flaticon.com/512/3523/3523063.png',
    },
    {
      title: 'Arcade',
      subtitle: '30+ Games',
      image: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
