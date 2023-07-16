import { useState } from "react";
import data from "../assets/data/data.json";
import { motion } from "framer-motion";

const Bastos = () => {
  const [index, setIndex] = useState(0);
  const [buton, setButon] = useState(false);
  const [butonName, setButonName] = useState("Ver significado");

  const changeIndex = () => {
    const newRandom = Math.floor(Math.random() * data.bastos.length);
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
          className="palo__title margin__title"
        >
          BASTOS
        </motion.h1>
        <motion.div className="copas__info">
          <motion.div
            className="cualidades__container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="cualidades__container-ent">
              <img className="bengala__img" src="/bengala.png" alt="" />{" "}
              <p> entusiasmo</p>
            </div>
            <div className="cualidades__container-ent">
              <img className="bengala__img" src="/bengala.png" alt="" />
              <p> confianza</p>
            </div>
            <div className="cualidades__container-ent">
              <img className="bengala__img" src="/bengala.png" alt="" />
              <p> ambición</p>
            </div>
          </motion.div>
          <motion.div
            className="fire__container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <i className="fire__icons">
              <img src="/fire.svg" alt="" />
            </i>
            <p>fire</p>
          </motion.div>
          <motion.div
            className="signos__container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="sign_container">
              <img className="sag_img" src="/sagitario.png" alt="" />
              <p>sagitario</p>
            </div>
            <div className="sign_container">
              <img className="aries_img" src="/aries.png" alt="" />
              <p>aries</p>
            </div>
            <div className="sign_container">
              <img className="leo_img" src="/leo.png" alt="" />
              <p>leo</p>
            </div>
          </motion.div>
        </motion.div>
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
              src={`${data.bastos[index]?.img}`}
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
            className="card__random-btn"
          >
            <img className="random__btn" src="/barajar.png" alt="" />
          </motion.i>
        </motion.div>
        <article className="info__card-container">
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
                {data.bastos[index]?.number} • {data.bastos[index]?.name}
              </h2>
              <p>{data.bastos[index]?.clave}</p>
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
              <p>{buton && data.bastos[index]?.significado}</p>
            </div>
          </motion.div>
        </article>
      </div>
    </motion.section>
  );
};

export default Bastos;
