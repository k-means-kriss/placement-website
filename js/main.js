/* ========================================================
   PlaceMe – Main JavaScript
   ======================================================== */

/* ── Sample Data ─────────────────────────────────────────── */
const JOBS = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    mode: "Remote",
    salary: "$90k – $120k",
    description: "Build scalable backend services using Node.js and AWS. Join a fast-growing team.",
    tags: ["Node.js", "AWS", "PostgreSQL"],
    posted: "2 days ago",
    logo: "TC",
  },
  {
    id: 2,
    title: "Product Management Intern",
    company: "StartupX",
    location: "New York, NY",
    type: "Internship",
    mode: "Hybrid",
    salary: "$30/hr",
    description: "Work directly with the founding team to define product roadmap and user research.",
    tags: ["Product", "UX", "Agile"],
    posted: "1 day ago",
    logo: "SX",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "FinanceCo",
    location: "Chicago, IL",
    type: "Full-time",
    mode: "On-site",
    salary: "$70k – $90k",
    description: "Analyse large financial datasets and build dashboards to drive business decisions.",
    tags: ["Python", "SQL", "Tableau"],
    posted: "3 days ago",
    logo: "FC",
  },
  {
    id: 4,
    title: "UX Designer",
    company: "CloudBase",
    location: "Austin, TX",
    type: "Full-time",
    mode: "Remote",
    salary: "$80k – $105k",
    description: "Design intuitive interfaces for our SaaS platform used by 10,000+ businesses.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    posted: "5 days ago",
    logo: "CB",
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "DataWave",
    location: "Seattle, WA",
    type: "Full-time",
    mode: "Hybrid",
    salary: "$110k – $150k",
    description: "Develop and deploy ML models to improve recommendation systems at scale.",
    tags: ["Python", "TensorFlow", "MLOps"],
    posted: "1 week ago",
    logo: "DW",
  },
  {
    id: 6,
    title: "HR & Talent Intern",
    company: "MediHealth",
    location: "Boston, MA",
    type: "Internship",
    mode: "On-site",
    salary: "$20/hr",
    description: "Support end-to-end recruitment, onboarding, and employee engagement initiatives.",
    tags: ["HR", "Recruiting", "Communication"],
    posted: "4 days ago",
    logo: "MH",
  },
];

/* ── Utilities ───────────────────────────────────────────── */
function getTypeBadgeClass(type) {
  if (type === "Internship") return "badge-warning";
  if (type === "Full-time")  return "badge-success";
  return "badge-info";
}

function getModeBadgeClass(mode) {
  if (mode === "Remote")  return "badge-info";
  if (mode === "Hybrid")  return "";
  return "";
}

function createJobCard(job) {
  return `
    <div class="job-card" onclick="window.location.href='jobs.html'">
      <div class="job-card-header">
        <div class="company-avatar">${job.logo}</div>
        <div>
          <div class="job-title">${job.title}</div>
          <div class="job-company">${job.company} · ${job.location}</div>
        </div>
      </div>
      <div class="job-meta">
        <span class="badge ${getTypeBadgeClass(job.type)}">${job.type}</span>
        <span class="badge ${getModeBadgeClass(job.mode)}">${job.mode}</span>
        ${job.tags.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
      <p class="job-description">${job.description}</p>
      <div class="job-footer">
        <span class="job-salary">${job.salary}</span>
        <span class="job-posted">${job.posted}</span>
      </div>
    </div>`;
}

function createJobListCard(job) {
  return `
    <div class="job-list-card" onclick="window.location.href='jobs.html#${job.id}'">
      <div class="company-avatar">${job.logo}</div>
      <div class="job-list-info">
        <div class="job-list-title">${job.title}</div>
        <div class="job-list-company">${job.company} · ${job.location}</div>
        <div class="job-list-meta">
          <span class="badge ${getTypeBadgeClass(job.type)}">${job.type}</span>
          <span class="badge ${getModeBadgeClass(job.mode)}">${job.mode}</span>
          ${job.tags.map(t => `<span class="badge">${t}</span>`).join("")}
        </div>
        <div class="job-list-desc">${job.description}</div>
      </div>
      <div class="job-list-action">
        <div class="job-list-salary">${job.salary}</div>
        <div class="job-list-date">${job.posted}</div>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); applyToJob(${job.id})">Apply</button>
      </div>
    </div>`;
}

/* ── Search ──────────────────────────────────────────────── */
function searchJobs() {
  const query = document.getElementById("search-input")?.value?.trim();
  if (query) {
    window.location.href = `jobs.html?q=${encodeURIComponent(query)}`;
  } else {
    window.location.href = "jobs.html";
  }
}

/* ── Home Page: Featured Jobs ────────────────────────────── */
function renderFeaturedJobs() {
  const grid = document.getElementById("jobs-grid");
  if (!grid) return;
  const featured = JOBS.slice(0, 3);
  grid.innerHTML = featured.map(createJobCard).join("");
}

/* ── Jobs Page ───────────────────────────────────────────── */
function renderJobsList(jobs) {
  const list = document.getElementById("jobs-list");
  if (!list) return;
  if (jobs.length === 0) {
    list.innerHTML = '<p class="text-muted" style="text-align:center;padding:2rem">No jobs found matching your search.</p>';
  } else {
    list.innerHTML = jobs.map(createJobListCard).join("");
  }
  const count = document.getElementById("jobs-count-num");
  if (count) count.textContent = jobs.length;
}

function filterJobs() {
  const query = (document.getElementById("jobs-search")?.value || "").toLowerCase();
  const typeChecks = Array.from(document.querySelectorAll(".filter-type:checked")).map(el => el.value);
  const modeChecks = Array.from(document.querySelectorAll(".filter-mode:checked")).map(el => el.value);

  let filtered = JOBS.filter(job => {
    const matchQuery = !query
      || job.title.toLowerCase().includes(query)
      || job.company.toLowerCase().includes(query)
      || job.location.toLowerCase().includes(query)
      || job.tags.some(t => t.toLowerCase().includes(query));

    const matchType = typeChecks.length === 0 || typeChecks.includes(job.type);
    const matchMode = modeChecks.length === 0 || modeChecks.includes(job.mode);

    return matchQuery && matchType && matchMode;
  });

  const sort = document.getElementById("sort-select")?.value;
  if (sort === "newest") filtered = filtered.sort((a, b) => a.id - b.id);
  if (sort === "salary")  filtered = [...filtered].sort((a, b) => b.salary.localeCompare(a.salary));

  renderJobsList(filtered);
}

function applyToJob(jobId) {
  const job = JOBS.find(j => j.id === jobId);
  if (!job) return;
  const isLoggedIn = localStorage.getItem("pm_user");
  if (!isLoggedIn) {
    showToast("Please log in to apply for jobs.", "error");
    setTimeout(() => { window.location.href = "login.html"; }, 1500);
    return;
  }
  showToast(`Application submitted for "${job.title}" at ${job.company}! 🎉`, "success");
}

/* ── Toast Notifications ─────────────────────────────────── */
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.background = type === "success" ? "#065f46"
    : type === "error" ? "#991b1b"
    : "#1e293b";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity .3s";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ── Auth: Login ─────────────────────────────────────────── */
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  let valid = true;

  if (!email || !email.includes("@")) {
    showFieldError("login-email", "Please enter a valid email address.");
    valid = false;
  } else clearFieldError("login-email");

  if (password.length < 6) {
    showFieldError("login-password", "Password must be at least 6 characters.");
    valid = false;
  } else clearFieldError("login-password");

  if (!valid) return;

  // Simulate login
  const user = { email, name: email.split("@")[0], type: "student" };
  localStorage.setItem("pm_user", JSON.stringify(user));
  showToast("Welcome back! Redirecting…", "success");
  setTimeout(() => { window.location.href = "students.html"; }, 1200);
}

/* ── Auth: Register ──────────────────────────────────────── */
function handleRegister(event) {
  event.preventDefault();
  const name     = document.getElementById("reg-name").value.trim();
  const email    = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const confirm  = document.getElementById("reg-confirm").value;
  const terms    = document.getElementById("reg-terms").checked;
  let valid = true;

  if (name.length < 2) {
    showFieldError("reg-name", "Please enter your full name."); valid = false;
  } else clearFieldError("reg-name");

  if (!email || !email.includes("@")) {
    showFieldError("reg-email", "Please enter a valid email."); valid = false;
  } else clearFieldError("reg-email");

  if (password.length < 8) {
    showFieldError("reg-password", "Password must be at least 8 characters."); valid = false;
  } else clearFieldError("reg-password");

  if (password !== confirm) {
    showFieldError("reg-confirm", "Passwords do not match."); valid = false;
  } else clearFieldError("reg-confirm");

  if (!terms) {
    showToast("Please accept the terms and conditions.", "error"); valid = false;
  }

  if (!valid) return;

  const user = { email, name, type: "student" };
  localStorage.setItem("pm_user", JSON.stringify(user));
  showToast("Account created successfully! Redirecting…", "success");
  setTimeout(() => { window.location.href = "students.html"; }, 1400);
}

/* ── Field Error Helpers ─────────────────────────────────── */
function showFieldError(inputId, message) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.classList.add("error");
  let err = input.parentElement.querySelector(".form-error");
  if (!err) {
    err = document.createElement("p");
    err.className = "form-error";
    input.parentElement.appendChild(err);
  }
  err.textContent = message;
  err.classList.add("show");
}

function clearFieldError(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.classList.remove("error");
  const err = input.parentElement.querySelector(".form-error");
  if (err) err.classList.remove("show");
}

/* ── Navbar Mobile Toggle ────────────────────────────────── */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

/* ── Auth State: show/hide login button ──────────────────── */
function initAuthState() {
  const user = localStorage.getItem("pm_user");
  const actions = document.querySelector(".nav-actions");
  if (!actions) return;

  if (user) {
    const parsed = JSON.parse(user);

    const greeting = document.createElement("span");
    greeting.style.cssText = "font-size:.9rem;color:var(--text-muted)";
    greeting.textContent = `Hi, ${parsed.name}`;

    const dashLink = document.createElement("a");
    dashLink.href = "students.html";
    dashLink.className = "btn btn-outline btn-sm";
    dashLink.textContent = "Dashboard";

    const logoutBtn = document.createElement("button");
    logoutBtn.className = "btn btn-outline btn-sm";
    logoutBtn.textContent = "Logout";
    logoutBtn.addEventListener("click", logout);

    actions.innerHTML = "";
    actions.appendChild(greeting);
    actions.appendChild(dashLink);
    actions.appendChild(logoutBtn);
  }
}

function logout() {
  localStorage.removeItem("pm_user");
  window.location.href = "index.html";
}

/* ── URL Search Param Pre-fill ───────────────────────────── */
function initJobsSearch() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const searchInput = document.getElementById("jobs-search");
  if (q && searchInput) {
    searchInput.value = q;
  }
  filterJobs();

  // Listen for changes
  searchInput?.addEventListener("input", filterJobs);
  document.querySelectorAll(".filter-type, .filter-mode").forEach(el => {
    el.addEventListener("change", filterJobs);
  });
  document.getElementById("sort-select")?.addEventListener("change", filterJobs);
}

/* ── Contact Form ────────────────────────────────────────── */
function handleContact(event) {
  event.preventDefault();
  const name    = document.getElementById("contact-name").value.trim();
  const email   = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  let valid = true;
  if (name.length < 2) { showFieldError("contact-name", "Name is required."); valid = false; } else clearFieldError("contact-name");
  if (!email.includes("@")) { showFieldError("contact-email", "Valid email required."); valid = false; } else clearFieldError("contact-email");
  if (message.length < 10) { showFieldError("contact-message", "Message must be at least 10 characters."); valid = false; } else clearFieldError("contact-message");

  if (!valid) return;

  document.getElementById("contact-form").reset();
  document.getElementById("contact-success").style.display = "flex";
  showToast("Message sent! We'll get back to you soon.", "success");
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initAuthState();
  renderFeaturedJobs();

  // Jobs page
  if (document.getElementById("jobs-list")) {
    initJobsSearch();
  }

  // Enter key in hero search
  document.getElementById("search-input")?.addEventListener("keydown", e => {
    if (e.key === "Enter") searchJobs();
  });

  // Login form
  document.getElementById("login-form")?.addEventListener("submit", handleLogin);

  // Register form
  document.getElementById("register-form")?.addEventListener("submit", handleRegister);

  // Contact form
  document.getElementById("contact-form")?.addEventListener("submit", handleContact);
});
