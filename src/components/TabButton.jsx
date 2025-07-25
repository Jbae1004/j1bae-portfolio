import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "auto" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? "tab-text active" : "tab-text";

  return (
    <button onClick={selectTab} className="tab-button">
      <p className={buttonClass}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-underline"
      />
    </button>
  );
};

export default TabButton;
