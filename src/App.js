import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide from "./components/Slide";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Step 1: Open Canva",
      desc: "Start your design journey by opening Canva.",
      img: "/images/1-home.png"
    },
    {
      title: "Step 2: Templates",
      desc: "Explore ready-made templates.",
      img: "/images/2-templates.png"
    },
    {
      title: "Step 3: Search Logo",
      desc: "Search for logo designs.",
      img: "/images/3-search.png"
    },
    {
      title: "Step 4: Choose Template",
      desc: "Pick a design that matches your idea.",
      img: "/images/4-template-preview.png"
    },
    {
      title: "Step 5: Customize",
      desc: "Edit colors, text, and layout.",
      img: "/images/5-editor.png"
    },
    {
      title: "Step 6: Final Logo",
      desc: "Your logo is now ready!",
      img: "/images/6-final.png"
    },
    {
      title: "Step 7: Download",
      desc: "Export your design.",
      img: "/images/7-download.png"
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setIndex((prev) => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === "ArrowLeft") {
        setIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [slides.length]);

  // Button navigation
  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {/* SLIDE ANIMATION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
          <Slide
            data={slides[index]}
            index={index}
            total={slides.length}
          />
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION BUTTONS */}
      <div className="nav">
        <button onClick={prevSlide} disabled={index === 0}>
          ⬅ Prev
        </button>

        <button onClick={nextSlide} disabled={index === slides.length - 1}>
          Next ➡
        </button>
      </div>
    </>
  );
}

export default App;