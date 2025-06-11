import Logo from "./Logo";
import DropMenuContainer from "./DropMenuContainer";
import DropMenuItem from "./DropMenuItem";
import NavRightContainer from "./NavRightContainer";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import UpperNavList from "./UpperNavList";
import UpperNav from "./UpperNav";

const menuItems = [
  { name: "SHOES", className: "font-bold" },
  { name: "MEN", className: "font-bold" },
  { name: "WOMEN", className: "font-bold" },
  { name: "KIDS", className: "font-bold" },
  { name: "SPORTS" },
  { name: "BRANDS" },
  { name: "MID-YEAR OFFER: UP TO 50%", className: "text-red-700 font-bold" },
];

export default function Navbar() {
  return (
    <>
      <UpperNav />
      <nav className="grid grid-cols-4 items-center px-8 py-2 shadow-sm">
        <Logo />
        <div className="col-span-2 flex h-full flex-col justify-end">
          <DropMenuContainer>
            {menuItems.map((item) => (
              <DropMenuItem name={item.name} className={item.className} />
            ))}
          </DropMenuContainer>
        </div>
        <NavRightContainer>
          <UpperNavList />
          <div className="flex items-center gap-2 place-self-end">
            <SearchBar />
            <NavIcons />
          </div>
        </NavRightContainer>
      </nav>
    </>
  );
}
