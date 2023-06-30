import { useState } from "react";
import data from "../assets/data/data.json";
import { motion } from "framer-motion";

const Copas = () => {
  const [index, setIndex] = useState(0);
  const [buton, setButon] = useState(false);
  const [butonName, setButonName] = useState("Ver significado");

  const changeIndex = () => {
    const newRandom = Math.floor(Math.random() * data.cups.length);
    setIndex(newRandom);
    setButon(false);
    setButonName("Ver significado");
  };

  const plusIndex = () => {
    const newIndex = Math.floor(index + 1);
    if (newIndex <= 13) setIndex(newIndex);
    else setIndex(0);
    setButon(false);
    setButonName("Ver significado");
  };

  const subtractIndex = () => {
    const newIndex = Math.floor(index - 1);
    setIndex(newIndex);
    setButon(false);
    setButonName("Ver significado");
  };

  const handleClickSignificado = () => {
    if (buton === false) {
      setButon(true);
      setButonName("Cerrar");
    } else if (buton === true) {
      setButon(false);
      setButonName("Ver significado");
    }
  };
  return (
    <motion.section className="palos__sections">
      <motion.div className="palo__container">
        <motion.h1
          initial={{ scale: 0.1, color: "#ffffff" }}
          transition={{ duration: 0.7 }}
          animate={{
            y: 15,
            scale: 1,
            color: "#222221",
          }}
          className="palo__title"
        >
          COPAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="copas__info"
        >
          Las copas simbolizan el agua, las capacidades psiquicas y las
          emociones. Analizan como estamos conectados los unos a los otros.
          Representa el agua en todas sus formas: lagunas, fuentes, rios,
          playas, y mares melancolicos.
        </motion.p>
      </motion.div>
      <div className="palo__principal-div">
        <motion.div
          className="cards__container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="card__layout">
            <motion.i
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              onClick={subtractIndex}
              className="card__sub-btn"
            >
              <img className="sub__btn" src="/hacia-atras.png" alt="" />
            </motion.i>
            <img
              className="cards__img"
              src={`${data.cups[index]?.img}`}
              alt=""
            />
            <motion.i
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              onClick={plusIndex}
              className="card__plus-btn"
            >
              <img className="plus__btn" src="/adelante.png" alt="" />
            </motion.i>
          </div>
          <motion.i
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="submit"
            onClick={changeIndex}
          >
            <img className="random__btn" src="/barajar.png" alt="" />
          </motion.i>
        </motion.div>
        <div className="info__card-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="clave__container">
              <h2>
                {data.cups[index]?.number} • {data.cups[index]?.name}
              </h2>
              <p>{data.cups[index]?.clave}</p>
            </div>
            <div className="significado__container">
              <motion.button
                className="significado__btn"
                onClick={handleClickSignificado}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {butonName}
              </motion.button>
              <p>{buton && data.may[index]?.significado}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Copas;
