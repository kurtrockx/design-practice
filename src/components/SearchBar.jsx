export default function SearchBar() {
  return (
    <div className="flex bg-gray-100 px-2 py-1 items-center">
      <input type="text" className="outline-0 min-w-50" placeholder="Search" />
      <div className="size-4">
        <img
          src="   https://cdn-icons-png.flaticon.com/512/3031/3031293.png "
          alt="searchIcon"
        />
      </div>
    </div>
  );
}
