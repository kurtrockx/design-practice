import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SortButtons from "./components/SortButtons";
import SortHeader from "./components/SortHeader";
import MainContent from "./layout/MainContent";

const header1 = [
  { name: "FIRST TIME ON SALE" },
  { name: "50% OFF" },
  { name: "40% OFF" },
  { name: "30% OFF" },
  { name: "MID-YEAR SALE 🔥" },
];

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <MainContent>
        <SortHeader>
          {header1.map((h) => (
            <SortButtons name={h.name} />
          ))}
        </SortHeader>
      </MainContent>
    </div>
  );
}
