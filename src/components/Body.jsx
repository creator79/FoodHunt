import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import BannerList from './BannerList';
import FoodList from './FoodList';
import RestaurantList from './RestaurantList';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredRestaurants } from '../features/address/restaurantReducer';

const Body = () => {
  const { banners, foods, restaurants, isLoading } = useRestaurants(GET_RESTAURANTS_URL);
  const searchRef = useRef();
  const dispatch = useDispatch();

  // Get the filtered restaurants from Redux store
  const filteredRestaurants = useSelector((state) => state.restaurants.filteredRestaurants);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value.toLowerCase();

    // Filter the restaurants based on the search term
    const filtered = restaurants.filter((rest) => rest.info.name.toLowerCase().includes(searchTerm));

    // Dispatch an action to update the filtered restaurants in Redux
    dispatch(setFilteredRestaurants(filtered));
  };

  return (
    <div className='bg-white relative py-8'>
      {/* banners */}
      <BannerList banners={banners} isLoading={isLoading} />

      {/* food list */}
      <FoodList foods={foods} isLoading={isLoading} />

      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className='flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6'
      >
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Chicken Biriyani'
          className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-full'
          ref={searchRef}
        />
        <button
          type='submit'
          className='bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base'
        >
          <MagnifyingGlassIcon className='w-4 h-4' />{' '}
          <span className='hidden md:block'>Search</span>
        </button>
      </form>

      {/* restaurant list */}
      <RestaurantList isLoading={isLoading} restaurants={filteredRestaurants} />
    </div>
  );
};

export default Body;
