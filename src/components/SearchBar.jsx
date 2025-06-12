export default function SearchBar() {
  return (
    <div className="group">
      <div className="group flex items-center border-2 border-transparent bg-gray-100 px-2 py-px duration-400 group-focus-within:rounded-md group-focus-within:border-black">
        <input
          type="text"
          className="min-w-50 outline-0 focus:placeholder:opacity-0"
          placeholder="Search"
        />
        <div className="size-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png "
            alt="searchIcon"
          />
        </div>
      </div>
    </div>
  );
}
