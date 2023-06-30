import { motion } from "framer-motion";

const MenuAnimation = () => {
  return (
    <div>
      <motion.div
        className="home__aimation-title "
        initial={{ opacity: 0, scale: 0.5, color: "#fff" }}
        animate={{ opacity: 1, scale: 1, color: "#cbb1ff" }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="menu__title"> Play Tarot</h1>
      </motion.div>
      <div className="zodiaco__container">
        <motion.div
          className="virgo__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="virgo__img" src="/geminis.png" alt="" />
        </motion.div>
        <motion.div
          className="libra__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="libra__img" src="/libra.png" alt="" />
        </motion.div>
        <motion.div
          className="piscis__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="piscis__img" src="/piscis.png" alt="" />
        </motion.div>
        <motion.div
          className="capricornio__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="capricornio__img" src="/capricornio.png" alt="" />
        </motion.div>
        <motion.div
          className="sagitario__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="sagitario__img" src="/sagitario.png" alt="" />
        </motion.div>
        <motion.div
          className="cancer__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img className="cancer__img" src="/cancer.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuAnimation;
