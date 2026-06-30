// Login sederhana
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");
  const loginSection = document.getElementById("login");
  const loginImage = document.querySelector(".login-image");

  if (user === "admin" && pass === "admin123") {
    msg.textContent = "✅ Login berhasil!";
    msg.style.color = "green";

    // tampilkan semua section docs (id diawali 'docs')
    document.querySelectorAll("section[id^='docs']").forEach(sec => {
      sec.style.display = "block";
    });

    // sembunyikan login dan gambar
    loginSection.style.display = "none";
    loginImage.style.display = "none";
  } else {
    msg.textContent = "❌ Username atau password salah!";
    msg.style.color = "red";
  }
});

// Dark/Light mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
