const SearchBar = () => {
  return (
    <form class="max-w-xl mx-auto p-4">
      <div class="flex">
          <label for="search-dropdown" class="sr-only">Search</label>
          
          <button id="dropdown-button" data-dropdown-toggle="dropdown" 
              class="shrink-0 z-10 inline-flex items-center py-3 px-5 text-md font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" 
              type="button">Categories
              <svg class="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
          </button>
          
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
              <ul class="py-2 text-md text-gray-700" aria-labelledby="dropdown-button">
                  <li><button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Breakfast</button></li>
                  <li><button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Lunch</button></li>
                  <li><button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Dinner</button></li>
                  <li><button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Desserts</button></li>
              </ul>
          </div>
          
          <div class="relative w-full">
              <input type="search" id="search-dropdown" 
                  class="block p-3 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Search recipes, meals, ingredients..." required />
              
              <button type="submit" class="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span class="sr-only">Search</span>
              </button>
          </div>
      </div>
    </form>

  );
};

export default SearchBar;
