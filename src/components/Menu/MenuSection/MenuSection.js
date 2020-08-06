import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuSection.module.css";
import Chevron from "../../Chevron";
import MenuItem from "./MenuItem/MenuItem";

const MenuSection = ({
  header,
  tagline,
  items,
  addToOrder,
  active,
  sectionClick,
  index,
}) => {
  const [setHeight, setHeightState] = useState("0");
  const content = useRef({});
  const scroll = useRef({});
  useEffect(() => {
    setTimeout(() => {
      if (active === "active" && scroll.current !== null) {
        scroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);

    setHeightState(
      active === "active" ? `${content.current.scrollHeight}px` : "0"
    );
  }, [active]);
  return (
    <section
      className={`${styles.MenuSection} ${active}`}
      id={header}
      ref={scroll}
    >
      <button
        type="button"
        className={styles.MenuSectionHeader}
        onClick={() => sectionClick(index)}
      >
        {header}
        <Chevron fill={"#fff"} className={`${styles.Chevron} ${active}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.MenuSectionContent}
      >
        <div className={styles.MenuSectionSubheader}>{tagline}</div>
        <MenuItem items={items} addToOrder={addToOrder} />
      </div>
    </section>
  );
};

export default MenuSection;
