import { useState } from "react";
import MenuCard from "./menuCard";
import "./style.css";
import { useAppSelector } from "../../redux";

const getPrevAndNextIndex = (
  currentIndex: number,
  arrayLength: number
): { prevIndex: number; nextIndex: number } => {
  if (arrayLength <= 1) {
    // If the array has only one item, prev and next are the same
    return { prevIndex: currentIndex, nextIndex: currentIndex };
  }

  const prevIndex = (currentIndex - 1 + arrayLength) % arrayLength;
  const nextIndex = (currentIndex + 1) % arrayLength;

  return { prevIndex, nextIndex };
};
const MenuCarousel = () => {
  const menu = useAppSelector((state) => state.menuReducer.menu);
  const menuItems = menu.filter((item) => item.offer);

  const menuItemsLength = menuItems.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  // const { prevIndex, nextIndex } = useMemo(() => {
  //   return getPrevAndNextIndex(currentIndex, menuItems.length);
  // }, [currentIndex]);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : menuItemsLength - 1
    );
  };
  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < menuItemsLength - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel">
      {menuItemsLength > 1 ? (
        <div className={`btn-container prev`}>
          <button className="direction" onClick={goPrev}>
            &lt;
          </button>
        </div>
      ) : null}

      {/* <MenuCard {...menuItems[prevIndex]} position="left" /> */}
      <MenuCard {...menuItems[currentIndex]} />
      {/* <MenuCard {...menuItems[nextIndex]} position="right" /> */}
      {menuItemsLength > 0 ? (
        <div className={`btn-container next`}>
          <button className="direction" onClick={goNext}>
            &gt;
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { MenuCarousel };
