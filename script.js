// script.js
// ===== CONFETTI =====
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

let W, H;
function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas