import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  
  // Controle manual do cursor - altere aqui: true = cursor personalizado, false = cursor padrão
  const isCustomCursorEnabled = false;



  useEffect(() => {
    // Aplicar/remover cursor customizado baseado no estado
    if (isCustomCursorEnabled) {
      document.body.style.cursor = 'none';
      document.body.classList.add('custom-cursor-enabled');
    } else {
      document.body.style.cursor = 'auto';
      document.body.classList.remove('custom-cursor-enabled');
    }
  }, []);

  useEffect(() => {
    if (!isCustomCursorEnabled) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Detecta elementos clicáveis
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer"
      ) {
        setIsHovering(true);
        setCursorVariant("link");
      } else if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setIsHovering(true);
        setCursorVariant("input");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Cursor personalizado - só renderiza se habilitado */}
      {isCustomCursorEnabled && (
        <>
          {/* Cursor principal - ponto pequeno */}
          <div
            className="custom-cursor-dot"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />

          {/* Cursor seguidor - anel grande */}
          <div
            className={`custom-cursor-ring ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""} ${cursorVariant}`}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;

