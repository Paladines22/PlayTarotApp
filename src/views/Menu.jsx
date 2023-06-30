import MenuAnimation from "../components/MenuAnimation";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleClickArcMayores = () => {
    navigate("/arc-mayores");
  };
  const handleClickCopas = () => {
    navigate("/copas");
  };

  const handleClickBastos = () => {
    navigate("/bastos");
  };
  const handleClickEspadas = () => {
    navigate("/espadas");
  };
  const handleClickPentaculos = () => {
    navigate("/pentaculos");
  };
  const { user } = useContext(UserContext);
  return (
    <div>
      <MenuAnimation />
      <motion.div
        className="welcome__container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h4 className="welcome__all-title">
          Welcome <span className="menu__welcome-title ">{user}</span> elige una
          categoria y que empiece la magia
        </h4>
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="menu__cards-container"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="arc-mayores__container"
            onClick={handleClickArcMayores}
          >
            <h3 className="arc-mayores__title">Arcanos Mayores</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleClickCopas}
            className="copas__container"
          >
            <h3 className="copas__title">Copas</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleClickBastos}
            className="bastos__container"
          >
            <h3 className="bastos__title">Bastos</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleClickEspadas}
            className="espadas__container"
          >
            <h3 className="espadas__title">Espadas</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleClickPentaculos}
            className="pentaculos__container"
          >
            <h3 className="pentaculos__title">Pentaculos</h3>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Menu;
