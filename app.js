let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // stop the browser from auto-showing
  deferredPrompt = e;

  // Show your own custom button
  const installBtn = document.createElement("button");
  installBtn.textContent = "Install App 🚀";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.right = "20px";
  installBtn.style.padding = "10px 20px";
  installBtn.style.background = "#6c63ff";
  installBtn.style.color = "white";
  installBtn.style.border = "none";
  installBtn.style.borderRadius = "8px";
  installBtn.style.cursor = "pointer";

  document.body.appendChild(installBtn);

  installBtn.addEventListener("click", () => {
    installBtn.remove(); // remove button after click
    deferredPrompt.prompt(); // Show install popup

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User installed the app ✅");
      } else {
        console.log("User dismissed the install ❌");
      }
      deferredPrompt = null;
    });
  });
});
