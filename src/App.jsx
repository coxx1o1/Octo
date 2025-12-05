import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stage, setStage] = useState(0);

  // ❤️ Floating heart generator
  function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  // 🌸 Optional continuous floating hearts
  useEffect(() => {
    const interval = setInterval(spawnHeart, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-root">
      <div className="love-card">
        
        {/* FIRST BUTTON */}
        {stage === 0 && (
          <button
            className="gift-btn"
            onClick={() => {
              setStage(1);
              spawnHeart();
            }}
          >
            <span className="gift-emoji" aria-hidden>🎁</span>
            <span className="gift-label">open me</span>
          </button>
        )}

        {/* MESSAGE 1 – only shows on stage ≥ 1 AND HIDDEN after stage = 2 */}
        {stage === 1 && (
          <div className="message">just so yk i hate you😭</div>
        )}

        {/* SECOND BUTTON */}
        {stage === 1 && (
          <button
            className="gift-btn secondary"
            onClick={() => {
              setStage(2);
              spawnHeart();
            }}
          >
            <span className="gift-emoji" aria-hidden>🎁</span>
            <span className="gift-label">open me</span>
          </button>
        )}

        {/* FINAL MESSAGE */}
        {stage === 2 && (
          <div className="message secondary">bitch kahiki hmfff</div>
        )}
      </div>
    </div>
  );
}

export default App;
