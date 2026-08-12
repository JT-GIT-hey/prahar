/* ---------------------------------------------------------------
   Prahar — study music by time of day
   Streams audio via the official YouTube IFrame Player API only.
   Nothing is downloaded, converted, or rehosted; edit the `videoId`
   fields below to swap in tracks/channels you prefer or have rights to.
------------------------------------------------------------------ */

const PRAHARS = [
  {
    name: "Bhairav",
    start: 4, end: 7,
    time: "4 – 7 AM",
    mood: "The first light. Bhairav opens the day with a grave, devotional stillness — traditionally the very first raga sung in a concert.",
    videoId: "G0V0q_yA49U"
  },
  {
    name: "Ahir Bhairav",
    start: 7, end: 10,
    time: "7 – 10 AM",
    mood: "A softer cousin of Bhairav for the early working hours — meditative, unhurried, good for reading and slow starts.",
    videoId: "_mRuO1CD_Yo"
  },
  {
    name: "Late-morning focus",
    start: 10, end: 13,
    time: "10 AM – 1 PM",
    mood: "Sitar and bansuri phrasing built for sustained attention — the watch for problem sets and deep reading.",
    videoId: "kKH4suw4tqI"
  },
  {
    name: "Afternoon ragas",
    start: 13, end: 16,
    time: "1 – 4 PM",
    mood: "The low-energy hours. Long, steady sitar and flute lines to keep you at the desk through the afternoon lull.",
    videoId: "Ef0tk0q-ITo"
  },
  {
    name: "Yaman",
    start: 16, end: 19,
    time: "4 – 7 PM",
    mood: "One of the best-loved evening ragas — warm, open, and gently uplifting as the light turns gold.",
    videoId: "VUbujNMLEw0"
  },
  {
    name: "Early night",
    start: 19, end: 22,
    time: "7 – 10 PM",
    mood: "Sitar, tabla, and flute settle into a slower pulse — for winding down a long day of work.",
    videoId: "uIFvBapgywo"
  },
  {
    name: "Darbari",
    start: 22, end: 25,
    time: "10 PM – 1 AM",
    mood: "A majestic, introspective raga once reserved for royal courts at night — deep, spacious, unhurried.",
    videoId: "TW6So7L0bAM"
  },
  {
    name: "Last watch",
    start: 25, end: 28,
    time: "1 – 4 AM",
    mood: "For the quiet, stubborn hours before dawn — a steady sitar line to keep a tired mind from wandering.",
    videoId: "3Zmk5G6h-qo"
  }
];

const hourNow = () => {
  const h = new Date().getHours();
  return h < 4 ? h + 24 : h; // shift so the day starts at 4 AM, matching PRAHARS
};

const currentPraharIndex = () => {
  const h = hourNow();
  const i = PRAHARS.findIndex(p => h >= p.start && h < p.end);
  return i === -1 ? 0 : i;
};

/* ---------------- Wheel drawing ---------------- */
const svg = document.getElementById("wheel");
const CX = 240, CY = 240, R_OUT = 228, R_IN = 150;

function polar(cx, cy, r, angleDeg){
  const a = (angleDeg - 90) * Math.PI / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function wedgePath(startAngle, endAngle){
  const [x1, y1] = polar(CX, CY, R_OUT, startAngle);
  const [x2, y2] = polar(CX, CY, R_OUT, endAngle);
  const [x3, y3] = polar(CX, CY, R_IN, endAngle);
  const [x4, y4] = polar(CX, CY, R_IN, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${R_OUT} ${R_OUT} 0 ${large} 1 ${x2} ${y2}
          L ${x3} ${y3} A ${R_IN} ${R_IN} 0 ${large} 0 ${x4} ${y4} Z`;
}

const NS = "http://www.w3.org/2000/svg";
const wedgeEls = [];

PRAHARS.forEach((p, i) => {
  const startAngle = (i / PRAHARS.length) * 360;
  const endAngle = ((i + 1) / PRAHARS.length) * 360;
  const midAngle = (startAngle + endAngle) / 2;

  const g = document.createElementNS(NS, "g");
  g.setAttribute("class", "wedge");
  g.setAttribute("tabindex", "0");
  g.setAttribute("role", "button");
  g.setAttribute("aria-label", `${p.name}, ${p.time}`);

  const path = document.createElementNS(NS, "path");
  path.setAttribute("d", wedgePath(startAngle, endAngle));
  path.setAttribute("fill", "#241E33");
  path.setAttribute("stroke", "#17141F");
  path.setAttribute("stroke-width", "2");
  g.appendChild(path);

  const [lx, ly] = polar(CX, CY, (R_OUT + R_IN) / 2, midAngle);
  const label = document.createElementNS(NS, "text");
  label.setAttribute("x", lx);
  label.setAttribute("y", ly);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("class", "wedge-label");
  label.textContent = p.name;
  g.appendChild(label);

  g.addEventListener("click", () => selectPrahar(i, true));
  g.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPrahar(i, true); }
  });

  svg.appendChild(g);
  wedgeEls.push(g);
});

/* ---------------- Cards ---------------- */
const grid = document.getElementById("prahar-grid");
const cardEls = [];
PRAHARS.forEach((p, i) => {
  const card = document.createElement("button");
  card.className = "prahar-card";
  card.type = "button";
  card.innerHTML = `
    <span class="card-time">${p.time}</span>
    <p class="card-raga">${p.name}</p>
    <p class="card-mood">${p.mood}</p>
  `;
  card.addEventListener("click", () => selectPrahar(i, true));
  grid.appendChild(card);
  cardEls.push(card);
});

/* ---------------- Selection state ---------------- */
let selectedIndex = currentPraharIndex();

function paintSelection(){
  wedgeEls.forEach((g, i) => g.classList.toggle("active", i === selectedIndex));
  cardEls.forEach((c, i) => c.classList.toggle("active", i === selectedIndex));
  const p = PRAHARS[selectedIndex];
  document.getElementById("prahar-name").textContent = p.name;
  document.getElementById("prahar-meta").textContent = p.time;
  document.getElementById("prahar-mood").textContent = p.mood;
  document.getElementById("prahar-eyebrow").textContent =
    selectedIndex === currentPraharIndex() ? "The current watch" : "Selected watch";
}

function selectPrahar(i, autoplay){
  selectedIndex = i;
  paintSelection();
  if (autoplay) loadTrack(PRAHARS[i]);
}

/* ---------------- Clock ---------------- */
function tickClock(){
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  document.getElementById("clock-readout").textContent = `${hh}:${mm}`;
}
tickClock();
setInterval(tickClock, 15000);

paintSelection();

/* ---------------- YouTube IFrame Player ---------------- */
let ytPlayer = null;
let ytReady = false;
let pendingVideoId = null;
let currentVideoId = null;

window.onYouTubeIframeAPIReady = function(){
  ytPlayer = new YT.Player("yt-mount", {
    height: "1", width: "1",
    playerVars: { autoplay: 0, controls: 0, disablekb: 1, modestbranding: 1 },
    events: {
      onReady: () => {
        ytReady = true;
        ytPlayer.setVolume(60);
        if (pendingVideoId) playVideo(pendingVideoId);
      },
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });
};

function playVideo(videoId){
  if (!ytReady) { pendingVideoId = videoId; return; }
  currentVideoId = videoId;
  ytPlayer.loadVideoById(videoId);
}

function onPlayerError(){
  document.getElementById("player-title").textContent =
    "This track can't be embedded — tap “open on YouTube” instead";
}

const toggleBtn = document.getElementById("player-toggle");
const playIcon = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4l14 8-14 8V4z" fill="currentColor"/></svg>`;
const pauseIcon = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor"/></svg>`;

function onPlayerStateChange(e){
  if (e.data === YT.PlayerState.PLAYING) toggleBtn.innerHTML = pauseIcon;
  else toggleBtn.innerHTML = playIcon;
  // loop the current track — most study tracks are long, but loop anyway
  if (e.data === YT.PlayerState.ENDED && currentVideoId){
    ytPlayer.seekTo(0);
    ytPlayer.playVideo();
  }
}

function loadTrack(p){
  document.getElementById("player-title").textContent = `${p.name} · ${p.time}`;
  document.getElementById("player-yt-link").href = `https://www.youtube.com/watch?v=${p.videoId}`;
  playVideo(p.videoId);
}

toggleBtn.addEventListener("click", () => {
  if (!ytPlayer || !ytReady) return;
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
  else ytPlayer.playVideo();
});

document.getElementById("player-volume").addEventListener("input", (e) => {
  if (ytPlayer && ytReady) ytPlayer.setVolume(Number(e.target.value));
});

document.getElementById("play-current").addEventListener("click", () => {
  loadTrack(PRAHARS[selectedIndex]);
});

/* ---------------- Timer ---------------- */
const ring = document.getElementById("ring-progress");
const RING_CIRC = 2 * Math.PI * 88;
ring.style.strokeDasharray = RING_CIRC;

let totalSeconds = 25 * 60;
let secondsLeft = totalSeconds;
let timerInterval = null;
let running = false;

function paintTimer(){
  const m = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const s = String(secondsLeft % 60).padStart(2, "0");
  document.getElementById("timer-readout").textContent = `${m}:${s}`;
  const fraction = secondsLeft / totalSeconds;
  ring.style.strokeDashoffset = RING_CIRC * (1 - fraction);
}
paintTimer();

document.getElementById("timer-toggle").addEventListener("click", (e) => {
  running = !running;
  e.target.textContent = running ? "Pause" : "Start";
  if (running){
    timerInterval = setInterval(() => {
      secondsLeft = Math.max(0, secondsLeft - 1);
      paintTimer();
      if (secondsLeft === 0){
        clearInterval(timerInterval);
        running = false;
        document.getElementById("timer-toggle").textContent = "Start";
        document.getElementById("timer-label").textContent = "done — stretch a little";
      }
    }, 1000);
  } else {
    clearInterval(timerInterval);
  }
});

document.getElementById("timer-reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  running = false;
  document.getElementById("timer-toggle").textContent = "Start";
  document.getElementById("timer-label").textContent = "focus";
  secondsLeft = totalSeconds;
  paintTimer();
});

document.querySelectorAll(".len").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".len").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    totalSeconds = Number(btn.dataset.mins) * 60;
    secondsLeft = totalSeconds;
    clearInterval(timerInterval);
    running = false;
    document.getElementById("timer-toggle").textContent = "Start";
    document.getElementById("timer-label").textContent = "focus";
    paintTimer();
  });
});
