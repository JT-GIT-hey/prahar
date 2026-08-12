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

/* -------- The full library: 100 entries (86 individual tracks + 14
   curated playlists), all real, all found via search. Swap freely. -------- */
const LIBRARY = [
  // Sitar
  { t: "Raga Yaman — Ustad Vilayat Khan, Timeless Sitar Melodies", c: "Sitar", id: "VUbujNMLEw0" },
  { t: "Raag Darbari — Deep Night Raga, B Sivaramakrishna Rao", c: "Sitar", id: "TW6So7L0bAM" },
  { t: "Sitar For A Focused Mind", c: "Sitar", id: "3Zmk5G6h-qo" },
  { t: "Stop Overthinking with Sitar", c: "Sitar", id: "Wvl_K8VC9C4" },
  { t: "Sitar for Deep Work", c: "Sitar", id: "HLpJDxtGuhE" },
  { t: "Raga Yaman (Sitar) — Shahid Parvez, Evening Ragas", c: "Sitar", id: "F30Hj91VOS0" },
  { t: "Raga Yaman — Shahid Parvez, Evening Ragas album", c: "Sitar", id: "AXVe4Cc8TPQ" },
  { t: "Glorious Sitar Jhalla — Shahid Parvez, Raag Yaman", c: "Sitar", id: "nR5-eV5fV8w" },
  { t: "Raag Yaman for Evening Relaxation — Swar Sanchari", c: "Sitar", id: "8lEXjsEcpa8" },
  { t: "Deep Focus & Study Music — Flute & Sitar, 432Hz", c: "Sitar", id: "kKH4suw4tqI" },
  { t: "Indian Classical Focus Music — Sitar & Flute Ragas", c: "Sitar", id: "Ef0tk0q-ITo" },
  { t: "Echoes of the Eternal — Sitar & Flute", c: "Sitar", id: "uIFvBapgywo" },
  { t: "Peaceful Sitar Instrumental — Study & Sleep", c: "Sitar", id: "nZhSBN1_3hw" },
  { t: "Relaxing Indian Sitar Music for Meditation", c: "Sitar", id: "FuZgOP5zOQM" },

  // Flute & Bansuri
  { t: "Deep Meditation — Relaxing Indian Flute (Bansuri)", c: "Flute", id: "ForqZRpres0" },
  { t: "Bansuri Flute Meditation — 30 min Improvisation", c: "Flute", id: "VqXMwWuvSjU" },
  { t: "Peaceful Indian Bansuri Flute for Meditation", c: "Flute", id: "XmkeNNIqQTI" },
  { t: "Divine Flute Meditation — Bansuri Krishna Music", c: "Flute", id: "UwlUSWMtd-s" },
  { t: "Tabla & Bansuri Meditation Music", c: "Flute", id: "OU-pcEjsoxs" },
  { t: "Morning Flute Music — Himalayan Mountain Flute", c: "Flute", id: "tF4z5kntXAA" },
  { t: "Indian Flute Music for Yoga", c: "Flute", id: "g_LNp8xY1YM" },
  { t: "Bansuri Flute Music — Serene Mood", c: "Flute", id: "pAMMKNvS7Xc" },
  { t: "Bansuri Flute, Cello, Harp & Piano — Hope", c: "Flute", id: "vfnGJOTtp0k" },
  { t: "Raga Bhairavi — Pt. Hariprasad Chaurasia, Flute", c: "Flute", id: "tLXNNejKhJs" },

  // Santoor
  { t: "Relaxing Santoor — Stress Relief & Study, 60 min", c: "Santoor", id: "rnlESA5nChc" },
  { t: "Relaxing Santoor Music — Sandip Chatterjee, 30 min", c: "Santoor", id: "nNUtGWo18f0" },
  { t: "Persian Santoor Live Session — Study & Sleep", c: "Santoor", id: "o3Dv3jz9w3o" },
  { t: "Relaxing Santoor / Santur Instrumental — Zen", c: "Santoor", id: "1YZQ6hjPTOw" },
  { t: "Santoor / Santur Instrumental — Meditation, Zen", c: "Santoor", id: "SFke70Py_48" },
  { t: "Santoor Relaxing Music Vol. 1 — Yoga", c: "Santoor", id: "90qarFuhHVg" },
  { t: "Santoor Relaxing Music — Pt. Shivkumar Sharma", c: "Santoor", id: "0-19bzs5NoM" },
  { t: "Relaxing Santoor Music — Zen, 1 hour", c: "Santoor", id: "2-SLFDNHD1k" },
  { t: "Santoor for Focus & Peace — 1 Hour, with crickets", c: "Santoor", id: "RfQDCrURflU" },

  // Sarod
  { t: "Relaxing Sarod Music — Meditation, Stress Relief", c: "Sarod", id: "hC8F1bBZCk8" },
  { t: "Soulful Sarod Classical Music — Rohan Prasanna", c: "Sarod", id: "OgmM3hJD5Hs" },
  { t: "Sitar, Tabla, Bansuri, Sarod & Santoor — Morning Raga", c: "Sarod", id: "dCr30XpOuxo" },
  { t: "Raindrops — Sarod, with water sounds", c: "Sarod", id: "i3UhqMfh5po" },
  { t: "Ustad Ali Akbar Khan's Sarod Resonance", c: "Sarod", id: "sN51Sh6vJsk" },
  { t: "Relaxing & Smooth Sarod Music", c: "Sarod", id: "UlwL0KX45Bo" },

  // Veena & slide (Mohan veena)
  { t: "Veenamrutham — Veena Instrumental Album", c: "Veena", id: "ohACeQcYHK4" },
  { t: "Veenamrutham — Veena Instrumental, Relaxing", c: "Veena", id: "8bYvhhxYgqw" },
  { t: "Veena Vandhanam — E. Gayathri, 1 Hour", c: "Veena", id: "NW21j6X3tgA" },
  { t: "Rudra Veena Therapy — Memory & Focus", c: "Veena", id: "-yGAMoYkRkE" },
  { t: "Sri Madhava — E. Gayathri, Carnatic Veena", c: "Veena", id: "MNxLIaJJ84M" },
  { t: "Ennaallu Oorake — E. Gayathri, Veena", c: "Veena", id: "r7_zmXfGIFk" },
  { t: "Mokshamu Galada — E. Gayathri, Veena", c: "Veena", id: "qFq1TyLPX8w" },
  { t: "Carnatic Violin & Veena — Instrumental", c: "Veena", id: "YFvwPVh97Tk" },
  { t: "Mohan Veena — Raga Miya Malhar, Pt. Vishwa Mohan Bhatt", c: "Veena", id: "AYSZNhgKPpg" },
  { t: "Mohan Veena — Classical Raga Series", c: "Veena", id: "wzihfxiT03k" },
  { t: "Mohan Veena — Pt. Vishwa Mohan Bhatt, Live at BCMF", c: "Veena", id: "smGyQ4u3xL8" },
  { t: "Gawati (evening raga) — Mohan Veena, Darbar Festival", c: "Veena", id: "GO6v2XzWf-w" },

  // Violin & Carnatic
  { t: "T.N. Krishnan — Carnatic Violin, Devotional Collection", c: "Violin", id: "fxtwDFW7dYQ" },
  { t: "Carnatic Violin — Ashtapadhi Devotional Jukebox", c: "Violin", id: "brhtFzBA5B8" },
  { t: "Siddhi Vinayaga — Kunnakudi Vaidyanathan, Violin", c: "Violin", id: "hbYB0C4UH5A" },
  { t: "Nada Aradhana — Carnatic Violin Meditation", c: "Violin", id: "Fw5P1xTDa40" },
  { t: "Musical Melodies — A. Kanyakumari, Violin Jukebox", c: "Violin", id: "fSnP5br8_Xo" },
  { t: "Ardhanareeswaram — M. S. Gopalakrishnan, Violin", c: "Violin", id: "F1h3hYUOIhA" },
  { t: "Violin Melody — M. S. Gopalakrishnan", c: "Violin", id: "iZc0smRWFH8" },
  { t: "Sacred Gems of Thyagaraja — A. Kanyakumari, Violin", c: "Violin", id: "KMhD0wdlXiQ" },

  // Fusion & lo-fi
  { t: "Chill Indian Vibes — Lo-Fi Beats for Relaxation & Study", c: "Fusion", id: "QsEQ6GCemPY" },
  { t: "Indian Classical Fusion — Sitar, Tabla, Guitar & Flute", c: "Fusion", id: "2DOmiFaRKUE" },
  { t: "Light Steps Before Rain — Bansuri & Tabla, Study Focus", c: "Fusion", id: "2PSyCG7yfKw" },
  { t: "Yakshas – Mokshas — Sitar, Tabla, Flute Fusion", c: "Fusion", id: "qpf32pHqmpY" },
  { t: "Calming Fresh Mornings — Tanpura, Sitar & Tabla", c: "Fusion", id: "0aedfErFnmY" },
  { t: "Sitar & Flute with River Ambience — Sunset on the Ganges", c: "Fusion", id: "o4bXf0IuWfI" },

  // Singing bowls
  { t: "Himalayan Singing Bowls — 528Hz, 33 minutes", c: "Singing Bowls", id: "eNmjWjpxUOM" },
  { t: "Qi Music Meditation — Himalayan Singing Bowls (ASMR)", c: "Singing Bowls", id: "JXm5-jqkfPY" },
  { t: "Fall Asleep with Himalayan Singing Bowls", c: "Singing Bowls", id: "Td2gdPGo2jM" },
  { t: "9 Hours Tibetan Healing Sounds — Singing Bowls", c: "Singing Bowls", id: "OW7TH2U4hps" },
  { t: "30 Minutes of Tibetan Singing Bowls", c: "Singing Bowls", id: "v4-TeN8UvyI" },
  { t: "Raw Himalayan Singing Bowls — 5 Hour Sound Bath", c: "Singing Bowls", id: "-jqUTNCVY1U" },
  { t: "Tibetan Singing Bowl Sound Bath — 1 Hour Reset", c: "Singing Bowls", id: "PDI3mdiQuG0" },

  // Devotional / Krishna flute
  { t: "Flute of Peace — Shri Krishna Relaxing Instrumental", c: "Devotional", id: "eWgjvxR96VY" },
  { t: "Relaxing Krishna Flute Music — Instrumental Peaceful", c: "Devotional", id: "HJRdp2aV5_4" },
  { t: "Krishna Flute — Raag Bihag, Meditation Music", c: "Devotional", id: "OHwxMGQGFpc" },
  { t: "Krishna Flute Music for Positive Energy", c: "Devotional", id: "6sX74H9jmVI" },
  { t: "Krishna Flute Music — 24/7 Relaxing, Heal & Meditate", c: "Devotional", id: "pTqoIWTNXCE" },
  { t: "Krishna's Flute Music — Healing Meditation, Lofi Devotional", c: "Devotional", id: "uXOmOtNPjX0" },
  { t: "Krishna Theme Flute — Healing & Stress Relief", c: "Devotional", id: "gxvpOq8JlPI" },
  { t: "Lord Krishna Flute Music — Mind, Body & Soul", c: "Devotional", id: "j2QX6Vyj1jI" },
  { t: "Non-Stop Krishna Flute Music — Bhakti", c: "Devotional", id: "5jca-sWgemI" },

  // Vocal & folk
  { t: "Raga Bhairav — Nirali Kartik, Morning Raga", c: "Vocal & Folk", id: "G0V0q_yA49U" },
  { t: "Raga Ahir Bhairav — Mahesh Kale, Morning Raga", c: "Vocal & Folk", id: "_mRuO1CD_Yo" },
  { t: "Kesariya Banna — Rajasthani Folk, Rashid Khan Langa", c: "Vocal & Folk", id: "FFIV6ekoI1U" },
  { t: "Khayal — Sipra Bose, Nata-Bhairava & Madhubanti", c: "Vocal & Folk", id: "uv2KrajNG2E" },
];

const PLAYLISTS = [
  { t: "Sitar, Tabla & Flute — Meditation & Healing", c: "Playlist", list: "PLEzciPHvmWePPKnb6Ll4yo_fIscjmuVMF" },
  { t: "Darbar VR360 — Evening Ragas", c: "Playlist", list: "PLUF0f6tPgIwhnGqc3-LfbgeMXvtmFLet0" },
  { t: "Raag Yaman (Kalyan, Puriya Kalyan) — Evening Raag", c: "Playlist", list: "PLnb9o8WxcWnajQAOClrB2ue451wK6YAne" },
  { t: "Santoor — Instrumental Songs", c: "Playlist", list: "PLM45TEMGzX4hxlRTpnEvfa1UcvxfRGewB" },
  { t: "Sarod — Instrumental Songs", c: "Playlist", list: "PLM45TEMGzX4gqntOM4DTcZ02Tpvf3OJGp" },
  { t: "Vadyam S01 — Carnatic Veena Series", c: "Playlist", list: "PLvKVTjIWnOc6P15HJ77QInEFC8BfCuEyU" },
  { t: "Carnatic Classical Instrumental — Veena", c: "Playlist", list: "PLmiOIx7v75JbeBQ7YbbGS96HzqZGiHlH8" },
  { t: "Mohan Veena — Instrumental Songs", c: "Playlist", list: "PLM45TEMGzX4hXOgtxW3LKJRUxhNJa9hIV" },
  { t: "Violin — Carnatic Instrumental Music", c: "Playlist", list: "PLcsVUdbSw_O5pfkH_U6kewS7e0bWXthjQ" },
  { t: "Carnatic Instrumental", c: "Playlist", list: "PL5Yy6HFxVU6rzFOaYvU2Hy343uSeze9Wi" },
  { t: "Rajasthani Traditional Folk Tunes", c: "Playlist", list: "PLM45TEMGzX4hj4A3enuDVLH6PVFrg-pA_" },
  { t: "Best Rajasthani Folk Songs", c: "Playlist", list: "PLM45TEMGzX4iTiIjVQBHaf1ud4eXBV0W4" },
  { t: "Rajasthani Folk Music", c: "Playlist", list: "PL2egcVi4ZXL071X_EUHFa_QlvkMkPa5r4" },
  { t: "Sitar Masters Collection — Ravi Shankar, Vilayat Khan & more", c: "Playlist", list: "PLqEHGrleV0zyeswByXAhI3rujDiizRSE1" },
];

const ALL_ENTRIES = [...LIBRARY, ...PLAYLISTS];

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
let pendingTrack = null;
let currentVideoId = null;

window.onYouTubeIframeAPIReady = function(){
  ytPlayer = new YT.Player("yt-mount", {
    height: "1", width: "1",
    playerVars: { autoplay: 0, controls: 0, disablekb: 1, modestbranding: 1 },
    events: {
      onReady: () => {
        ytReady = true;
        ytPlayer.setVolume(60);
        if (pendingTrack) playEntry(pendingTrack);
      },
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });
};

// entry: { id } for a single video, or { list } for a playlist
function playEntry(entry){
  if (!ytReady) { pendingTrack = entry; return; }
  if (entry.list){
    currentVideoId = null;
    ytPlayer.loadPlaylist({ list: entry.list, listType: "playlist", index: 0 });
  } else {
    currentVideoId = entry.id;
    ytPlayer.loadVideoById(entry.id);
  }
}

function playVideo(videoId){ playEntry({ id: videoId }); }

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

/* ---------------- Library ---------------- */
const CATEGORIES = ["All", ...new Set(ALL_ENTRIES.map(e => e.c))];
const chipsWrap = document.getElementById("library-chips");
const listWrap = document.getElementById("library-list");
const searchInput = document.getElementById("library-search");
let activeCategory = "All";
let activeRow = null;

CATEGORIES.forEach(cat => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip" + (cat === "All" ? " active" : "");
  chip.textContent = cat;
  chip.addEventListener("click", () => {
    activeCategory = cat;
    chipsWrap.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === chip));
    renderLibrary();
  });
  chipsWrap.appendChild(chip);
});

function renderLibrary(){
  const q = searchInput.value.trim().toLowerCase();
  const rows = ALL_ENTRIES.filter(e => {
    const matchesCat = activeCategory === "All" || e.c === activeCategory;
    const matchesQ = !q || e.t.toLowerCase().includes(q) || e.c.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  listWrap.innerHTML = "";
  if (rows.length === 0){
    const empty = document.createElement("p");
    empty.className = "no-results";
    empty.textContent = "Nothing matches that search — try a different word or category.";
    listWrap.appendChild(empty);
    return;
  }

  rows.forEach(entry => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "track-row";
    row.innerHTML = `
      <span class="track-play">${playIconSmall}</span>
      <span class="track-name">${entry.t}</span>
      <span class="track-tag">${entry.c}</span>
    `;
    row.addEventListener("click", () => {
      if (activeRow) activeRow.classList.remove("playing");
      row.classList.add("playing");
      activeRow = row;
      document.getElementById("player-title").textContent = entry.t;
      document.getElementById("player-yt-link").href = entry.list
        ? `https://www.youtube.com/playlist?list=${entry.list}`
        : `https://www.youtube.com/watch?v=${entry.id}`;
      playEntry(entry);
    });
    listWrap.appendChild(row);
  });
}

const playIconSmall = `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M6 4l14 8-14 8V4z" fill="currentColor"/></svg>`;

searchInput.addEventListener("input", renderLibrary);
renderLibrary();

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
