import ButtonComponent from './components/button'
import './App.css'
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const createFloatingItem = (emoji) => {
      const item = document.createElement("div");
      item.classList.add("floating-item");
      item.innerHTML = emoji;
      item.style.left = `${Math.random() * 100}vw`;
      item.style.animationDuration = `${Math.random() * 3 + 2}s`; 
      item.style.fontSize = `${Math.random() * 20 + 10}px`; 

      document.querySelector(".floating-container").appendChild(item);

      setTimeout(() => {
        item.remove();
      }, 5000);
    };

    const floatingInterval = setInterval(() => {
      const emojis = ["❤️", "🍕"];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      createFloatingItem(randomEmoji);
    }, 500);

    return () => clearInterval(floatingInterval);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
            <div className="floating-container"></div>
        <h1 className="text-primary mb-4">Will you be my Valentine</h1>
        <ButtonComponent />
    </div>
);
}

export default App
