import { motion } from "framer-motion";

const HomeAnimation = () => {
  return (
    <div>
      <motion.div
        className="planeta__container"
        transition={{
          duration: 1.4,
          delay: 0,
          ease: "easeInOut",
        }}
        animate={{
          x: [65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
          y: [65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15],
          opacity: [0, 0, 0, 0, 0, 0, 0.1, 0.3, 0.5, 0.5, 0.5, 1],
        }}
      >
        <img className="planeta__img" src="/planeta.png" alt="" />
      </motion.div>
      <motion.div
        className="cohete__container"
        transition={{
          duration: 2,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        animate={{
          x: [
            100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
            165, 170, 175, 180, 185, 190, 195,
          ],
          y: [
            100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20,
            15, 10, 5,
          ],
          opacity: [0, 0, 0, 1],
        }}
      >
        <img className="cohete__img" src="/puesta-en-marcha.png" alt="" />
      </motion.div>

      <motion.div
        className="home__aimation-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0,
          ease: "easeInOut",
        }}
      >
        Play Tar<span className="tarot__opacity">o</span>t
      </motion.div>
      <motion.div
        className="galaxy__container"
        transition={{ type: "spring", duration: 3 }}
        animate={{ rotate: [0, 180, 270, 360], opacity: [0, 0, 0, 1] }}
      >
        <img className="galaxy__img" src="/galaxia-espiral.png" alt="" />
      </motion.div>

      {/* <motion.div>
        <img src="/constelacion.png" alt="" />
      </motion.div> */}
    </div>
  );
};

export default HomeAnimation;
