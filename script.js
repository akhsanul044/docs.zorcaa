// Login sederhana
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");
  const docsSection = document.getElementById("docs");
  const loginSection = document.getElementById("login");
  const loginImage = document.querySelector(".login-image");

  if (user === "admin" && pass === "admin123") {
    msg.textContent = "✅ Login berhasil!";
    msg.style.color = "green";
    docsSection.style.display = "block";   // tampilkan link docs
    loginSection.style.display = "none";   // sembunyikan form login
    loginImage.style.display = "none";     // sembunyikan gambar login
  } else {
    msg.textContent = "❌ Username atau password salah!";
    msg.style.color = "red";
  }
});

// Dark/Light mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
