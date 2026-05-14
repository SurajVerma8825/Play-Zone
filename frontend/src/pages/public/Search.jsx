// ==========================================
// FILE: src/pages/public/Search.jsx
// ==========================================

import FiltersSidebar from '../../components/search/FiltersSidebar';
import GamesGrid from '../../components/search/GamesGrid';
import {games} from '@/data/gamesData'

const Search = () => {
  // const games = [
  //   {
  //     id: 1,
  //     title: 'Strike Arena Bowling',
  //     location: 'Kankarbagh, Patna',
  //     state: 'Bihar',
  //     price: '899',
  //     rating: '4.8',
  //     slots: '12 Slots Available',
  //     players: '6',
  //     image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
  //   },

  //   {
  //     id: 2,
  //     title: 'VR Galaxy Zone',
  //     location: 'MP Nagar, Bhopal',
  //     state: 'Madhya Pradesh',
  //     price: '1199',
  //     rating: '4.7',
  //     slots: '8 Slots Available',
  //     players: '4',
  //     image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
  //   },

  //   {
  //     id: 3,
  //     title: 'Arcade Junction',
  //     location: 'Bandra West, Mumbai',
  //     state: 'Maharashtra',
  //     price: '699',
  //     rating: '4.6',
  //     slots: '15 Slots Available',
  //     players: '5',
  //     image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
  //   },

  //   {
  //     id: 4,
  //     title: 'Escape Hunt Rooms',
  //     location: 'Indiranagar, Bengaluru',
  //     state: 'Karnataka',
  //     price: '1499',
  //     rating: '4.9',
  //     slots: '5 Slots Available',
  //     players: '8',
  //     image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
  //   },

  //   {
  //     id: 5,
  //     title: 'Snooker Lounge Pro',
  //     location: 'Salt Lake, Kolkata',
  //     state: 'West Bengal',
  //     price: '599',
  //     rating: '4.5',
  //     slots: '10 Slots Available',
  //     players: '2',
  //     image: 'https://images.unsplash.com/photo-1522069213448-443a614da9b6',
  //   },

  //   {
  //     id: 6,
  //     title: 'Fun Kingdom Arcade',
  //     location: 'Hazratganj, Lucknow',
  //     state: 'Uttar Pradesh',
  //     price: '799',
  //     rating: '4.7',
  //     slots: '11 Slots Available',
  //     players: '4',
  //     image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974',
  //   },

  //   {
  //     id: 7,
  //     title: 'Battle VR Studio',
  //     location: 'Dwarka, Delhi',
  //     state: 'Delhi',
  //     price: '1299',
  //     rating: '4.8',
  //     slots: '6 Slots Available',
  //     players: '6',
  //     image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769',
  //   },

  //   {
  //     id: 8,
  //     title: 'Neon Bowling Club',
  //     location: 'Hinjewadi, Pune',
  //     state: 'Maharashtra',
  //     price: '999',
  //     rating: '4.6',
  //     slots: '9 Slots Available',
  //     players: '5',
  //     image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47',
  //   },

  //   {
  //     id: 9,
  //     title: 'Kids Fun Arena',
  //     location: 'Whitefield, Bengaluru',
  //     state: 'Karnataka',
  //     price: '499',
  //     rating: '4.5',
  //     slots: '14 Slots Available',
  //     players: '10',
  //     image: 'https://images.unsplash.com/photo-1511882150382-421056c89033',
  //   },

  //   {
  //     id: 10,
  //     title: 'Royal Gaming Hub',
  //     location: 'Rohini, Delhi',
  //     state: 'Delhi',
  //     price: '1099',
  //     rating: '4.9',
  //     slots: '7 Slots Available',
  //     players: '6',
  //     image: 'https://images.unsplash.com/photo-1511882150382-421056c89033',
  //   },
  //   {
  //     id: 1,
  //     title: 'Strike Arena Bowling',
  //     location: 'Kankarbagh, Patna',
  //     state: 'Bihar',
  //     price: '899',
  //     rating: '4.8',
  //     slots: '12 Slots Available',
  //     players: '6',
  //     image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
  //   },

  //   {
  //     id: 2,
  //     title: 'VR Galaxy Zone',
  //     location: 'MP Nagar, Bhopal',
  //     state: 'Madhya Pradesh',
  //     price: '1199',
  //     rating: '4.7',
  //     slots: '8 Slots Available',
  //     players: '4',
  //     image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
  //   },

  //   {
  //     id: 3,
  //     title: 'Arcade Junction',
  //     location: 'Bandra West, Mumbai',
  //     state: 'Maharashtra',
  //     price: '699',
  //     rating: '4.6',
  //     slots: '15 Slots Available',
  //     players: '5',
  //     image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
  //   },

  //   {
  //     id: 4,
  //     title: 'Escape Hunt Rooms',
  //     location: 'Indiranagar, Bengaluru',
  //     state: 'Karnataka',
  //     price: '1499',
  //     rating: '4.9',
  //     slots: '5 Slots Available',
  //     players: '8',
  //     image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
  //   },

  //   {
  //     id: 5,
  //     title: 'Snooker Lounge Pro',
  //     location: 'Salt Lake, Kolkata',
  //     state: 'West Bengal',
  //     price: '599',
  //     rating: '4.5',
  //     slots: '10 Slots Available',
  //     players: '2',
  //     image: 'https://images.unsplash.com/photo-1522069213448-443a614da9b6',
  //   },

  //   {
  //     id: 6,
  //     title: 'Fun Kingdom Arcade',
  //     location: 'Hazratganj, Lucknow',
  //     state: 'Uttar Pradesh',
  //     price: '799',
  //     rating: '4.7',
  //     slots: '11 Slots Available',
  //     players: '4',
  //     image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974',
  //   },

  // ];

  return (
    <div className="min-h-screen bg-[#F7F4FF] mb-12">
      {/* <SearchTopbar /> */}

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        <FiltersSidebar />

        <GamesGrid games={games} />
      </div>
    </div>
  );
};

export default Search;
