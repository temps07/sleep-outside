// modal.js
export function showRegistrationModal() {
  if (localStorage.getItem("hasSeenRegistrationModal")) return;

  // Create modal HTML
  const modal = document.createElement("div");
  modal.id = "registration-modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.background = "rgba(0,0,0,0.5)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  modal.innerHTML = `
    <div style="background: #fff; padding: 2rem; border-radius: 8px; max-width: 400px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
      <h2>Register & Win!</h2>
      <p>Sign up today for a chance to win our exclusive Sleep Outside giveaway!<br>Don't miss out on special offers and updates.</p>
      <button id="close-modal" style="margin-top: 1rem; padding: 0.5rem 1rem; border: none; background: #00796b; color: #fff; border-radius: 4px; cursor: pointer;">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("close-modal").onclick = function () {
    modal.remove();
    localStorage.setItem("hasSeenRegistrationModal", "true");
  };
}
