import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para controlar a exibição do botão de volta ao topo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Adiciona um event listener para controlar a visibilidade do botão
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: "999",
        transition: "opacity 0.3s, visibility 0.3s"
      }}
      onClick={scrollToTop}
    >
      <FaArrowUp style={{ fontSize: "20px" }} />
    </div>
  );
};

export default ScrollButton;
