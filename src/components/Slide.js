import { motion } from "framer-motion";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";

export default function Slide({ data, index, total }) {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* TOP */}
      <div className="top">
        <h3>Slide {index + 1} of {total}</h3>

        <div className="progress">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* LEFT */}
        <motion.div
          className="left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>{data.title}</h1>
          <div className="line"></div>

          <p>{data.desc}</p>

          <motion.div
  className="box"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
>
  {["Clean design", "Perfect for brand", "Ready to use"].map((item, i) => (
    <motion.p
      key={i}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <FaCheckCircle style={{ color: "#00f5ff" }} />
      {item}
    </motion.p>
  ))}
</motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="right"
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={data.img}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

      </div>

      {/* TIP */}
      <motion.div
        className="tip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <FaLightbulb /> A great logo is simple, memorable, and powerful.
      </motion.div>
    </motion.div>
  );
}