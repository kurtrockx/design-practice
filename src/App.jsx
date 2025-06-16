import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SortHeader from "./components/SortHeader";
import MainContent from "./layout/MainContent";

const firstHeader = [
  { name: "FIRST TIME ON SALE", active: false, order: 1 },
  { name: "50% OFF", active: false, order: 2 },
  { name: "40% OFF", active: false, order: 3 },
  { name: "30% OFF", active: false, order: 4 },
  { name: "MID-YEAR SALE 🔥", active: false, order: 5 },
];

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <MainContent>
        <SortHeader headers={firstHeader} link={"Shop Now"} />
      </MainContent>
    </div>
  );
}
