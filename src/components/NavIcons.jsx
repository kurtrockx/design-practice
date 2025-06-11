import user from "../assets/user.svg";
import heart from "../assets/heart.svg";
import shoppingBag from "../assets/shopping-bag.svg";

export default function NavIcons() {
  return (
    <div className="flex h-5 gap-4">
      <img src={user} alt="user icon" />
      <img src={heart} alt="heart icon" />
      <img src={shoppingBag} alt="shopping bag icon" />
    </div>
  );
}
