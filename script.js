// Wedding invitation interactions for Ganesh & Priyanka.
const weddingDate = new Date("2026-10-29T09:40:00+05:30"); // India Standard Time
const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const now = new Date();
  let remaining = weddingDate.getTime() - now.getTime();
  if (remaining <= 0) {
    $("days").textContent = "0";
    $("hours").textContent = "0";
    $("minutes").textContent = "0";
    $("seconds").textContent = "0";
    $("countdown-message").textContent = "The wedding day is here — let the celebrations begin!";
    return;
  }
  const days = Math.floor(remaining / 86400000);
  remaining %= 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining %= 3600000;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  $("days").textContent = days;
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");
  $("countdown-message").textContent = "";
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Gallery lightbox
const lightbox = $("lightbox");
const lightboxImage = $("lightbox-image");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
    $("lightbox-close").focus();
  });
});
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}
$("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// Background music: browsers require a user gesture. Add a licensed MP3 to assets/
// and uncomment the <source> line in index.html for audio playback to work.
const audio = $("wedding-audio");
const musicToggle = $("music-toggle");
musicToggle.addEventListener("click", async () => {
  if (!audio.querySelector("source")) {
    showToast("Add a licensed MP3 to assets/wedding-music.mp3 and uncomment its source in index.html.");
    return;
  }
  try {
    if (audio.paused) {
      await audio.play();
      musicToggle.setAttribute("aria-pressed", "true");
      $("music-icon").textContent = "Ⅱ";
      $("music-label").textContent = "Pause Music";
    } else {
      audio.pause();
      musicToggle.setAttribute("aria-pressed", "false");
      $("music-icon").textContent = "▶";
      $("music-label").textContent = "Play Music";
    }
  } catch {
    showToast("Music could not play. Please check the audio file.");
  }
});

// Share using the device share sheet where available; otherwise open WhatsApp.
$("share-button").addEventListener("click", async () => {
  const shareText = "You're warmly invited to celebrate the wedding of Ganesh & Priyanka on 29 October 2026. Reception: 28 October at 7:00 PM. Dhaara Muhurtha: 29 October, 9:40–10:40 AM. Venue: H.D. Devegowda Community Hall, K.R. Nagar Police Station Near, Railway Station Road, K.R. Nagar, Mysuru District. Invitation: " + window.location.href;
  if (navigator.share) {
    try { await navigator.share({ title: "Ganesh & Priyanka — Wedding Invitation", text: shareText, url: window.location.href }); }
    catch (error) { if (error.name !== "AbortError") openWhatsApp(shareText); }
  } else {
    openWhatsApp(shareText);
  }
});
function openWhatsApp(text) {
  window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
}
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 4200);
}
