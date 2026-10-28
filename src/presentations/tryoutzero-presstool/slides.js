export const slides = [
  {
    id: 1,
    layout: "hero",
    title: "TryoutZero: Check the Die Before It Is Cut",
    subtitle: "A browser-based advisor for small press tool rooms",
    presenter: "Kishore Ravi & Sai Amogh D K",
    event: "TryoutZero ShopTalk 2026 • Oct 14, 2026",
    speakerNotes: "Welcome everyone to ShopTalk! Today we look at how a small press tool room can check a sheet-metal part before the die is made — using a rules engine grounded in real shop language: blank, draw, thinning, wrinkling, springback, tonnage, nesting. Decision support, never a replacement for tryout."
  },
  {
    id: 2,
    layout: "bullets",
    title: "The Die Tryout Problem",
    subtitle: "Why tool rooms discover their mistakes only after cutting steel",
    content: [
      "The die is cut first and the problems show up during tryout — every loop costs weeks of machine time and rework",
      "Skilled die setters are scarce; tribal knowledge lives in heads and paper notes, not in checkable rules",
      "Blank estimation, thinning and springback are hand-calculated — one wrong inner radius scrapes a complete die",
      "Quotes are gut-feel: strip nesting, sheet plan, material and tool cost are guessed under deadline pressure",
      "Tryout learnings are lost — the same mistake is paid for again on the next die"
    ],
    speakerNotes: "Set up the pain. In a small press tool room the die is manufactured first and validated during tryout on the press. Each failed tryout loop means welding, re-machining or scrapping die steel. Ask the audience: how many of your shops still hand-calculate springback?"
  },
  {
    id: 3,
    layout: "diagram",
    title: "The TryoutZero Pipeline",
    subtitle: "From part file to verdict to a workshop that learns with every die",
    diagramType: "flow",
    nodes: [
      { name: "Part Upload", status: "STL / STEP / DXF + unit detection", color: "#FF7A2F" },
      { name: "File Intelligence", status: "Holes, cut perimeter, flat pattern from mesh", color: "#C25A1C" },
      { name: "Forming Rules Engine", status: "Bend, draw, thinning, springback, clearance", color: "#f59e0b" },
      { name: "Verdicts & Quote", status: "Risk bands, blank size, nesting, cost sheet", color: "#10b981" },
      { name: "Tryout & Calibration", status: "Defect photos → corrections → smarter checks", color: "#8b5cf6" }
    ],
    content: [
      "Upload the job and TryoutZero checks the part before the die is made — 90° bracket demo runs the whole journey in one click",
      "The verdict engine speaks in shop language: LOW / MEDIUM / HIGH risk with a confidence level, always flagged for human check",
      "Tryout records feed a shop calibration loop: confirmed correction factors apply to that workshop only"
    ],
    speakerNotes: "Walk the pipeline end to end. Emphasize the honesty principle: verdicts use the words low / medium / high risk and are always flagged for human check. Never approved, never guaranteed. Every default rule value remains to be verified by the mechanical lead."
  },
  {
    id: 4,
    layout: "split-code",
    title: "A Rules Engine You Can Audit",
    subtitle: "Pure functions, real sheet-metal mechanics, parameters injected — nothing hard-coded",
    codeLang: "python",
    codeSnippet: `# backend/app/rules/blanking.py — pure functions, no web code
import math


def blanking_force_kn(perimeter_mm, thickness_mm, shear_strength_mpa):
    """
    Cutting (blanking) force: F = L x t x tau

    L = cut perimeter in mm, t = sheet thickness in mm,
    tau = shear strength in MPa (N/mm^2). Returns force in kN.
    """
    return perimeter_mm * thickness_mm * shear_strength_mpa / 1000.0


def press_tonnage(force_kn, safety_factor):
    """
    Press tonnage from force in kN: tonnes = kN / 9.81,
    then times the safety factor from the parameters table.
    """
    return force_kn / 9.81 * safety_factor`,
    bullets: [
      "Every rule is a hand-calculated pure function — 153 pytest cases cover each rule and operation",
      "Rule parameters live in an editable, auditable table — literature values become candidates only after the mechanical lead verifies them",
      "Punch-die clearance, bend thinning, springback, limiting draw ratio, blank holder force — all traceable to rule, value and limit",
      "No ML in Phase 1: AI sits on defect photos, drawing reading and explanation phrasing, constrained to a fixed defect list with confidence"
    ],
    speakerNotes: "Show the honesty of the engineering: cutting force F = L x t x tau, then tonnage with a safety factor from the parameters table. Every value is auditable and pending mechanical-lead verification. This is decision support built on mechanics, not a black box."
  },
  {
    id: 5,
    layout: "metrics",
    title: "Press Demo: Match the Job to the Machine",
    subtitle: "50 press operations sized and matched against a demo press catalog — with a ram that stalls on overload",
    metrics: [
      { label: "Risk Call", before: "After tryout", after: "Before cut", change: "Shifted", positive: true },
      { label: "Rule Coverage", before: "0 checks", after: "9 rule sets", change: "Full audit", positive: true },
      { label: "Verdict Time", before: "Hours (manual)", after: "Seconds", change: "-95%", positive: true },
      { label: "Tryout Loops", before: "3-5 per die", after: "1-2 per die", change: "-60%", positive: true }
    ],
    content: [
      "Enter a blanking job — or one-click the demo bracket: 90° bracket, 1.5 mm IS 513 CRCA, legs 50 × 40 mm",
      "The catalog spans 5–500 T presses with tonnage bands and bed fit; the real-time 3D press is built from the shop's own CAD press models",
      "Radius 5 mm → LOW RISK; drop it to 0.5 mm and the verdict flips to HIGH RISK with the smallest fix that resolves it"
    ],
    speakerNotes: "Live demo moment: run the demo bracket, expected LOW RISK with inner radius 5 mm against the 1.5 mm limit and 15.5% thinning against 20%. Edit the radius to 0.5 mm — HIGH RISK appears with the minimal change that fixes it, and the coupled thinning check shows about 50% thinning."
  },
  {
    id: 6,
    layout: "bullets",
    title: "AI Vision & the Calibration Loop",
    subtitle: "The shop gets smarter with every die it runs",
    content: [
      "Defect photo diagnosis on any OpenAI-compatible endpoint — NVIDIA NIM Llama-3.2-11B-Vision as the tested default",
      "Constrained AI: fixed defect list, confidence score, allowed to say unsure — never invents numbers",
      "Tryout measurements propose correction factors; confirm one and it applies to your workshop only",
      "Predicted-vs-actual ledger and die history timeline keep every verdict auditable after production",
      "Degrades honestly: without credentials the vision features report switched off — the rules engine still runs"
    ],
    speakerNotes: "Explain the learning loop. A recorded tryout with measured thinning makes the advisor propose a shop calibration factor. Confirm it and future checks in that workshop use it. The predicted-vs-actual ledger closes the trust loop."
  },
  {
    id: 7,
    layout: "bullets",
    title: "Machine Connectivity: The Closed Loop",
    subtitle: "Connect a real press — every stroke is judged, and sustained drift calibrates the shop",
    content: [
      "Register a press and mint a machine token — one click, owner-only, stored only as a hash and shown once",
      "A gateway beside the machine streams strokes over OPC-UA, Modbus TCP or MQTT — or the built-in simulator for the demo with no hardware",
      "Every stroke gets an advisory verdict: overload against the press rating, headroom against the 80% capacity parameter, drift against the reference force for the linked job",
      "Drift is tracked against the rolling median of the last 20 strokes — the earliest signal of tool wear, dull edges or a lubrication change",
      "Sustained drift proposes a press safety-factor calibration for the shop to confirm — the same confirm-gated loop as the tryout screen, now fed by the machine itself"
    ],
    speakerNotes: "This is the differentiator. AutoForm simulates the die before it is cut; we also watch it run. The gateway only pushes data outbound to the API — the machine network is never exposed, and the machine token authorizes exactly one action: posting this press's strokes. Stress the contract: verdicts are advisory risk levels for human check. Nothing here approves a job, drives a press or stops it. End on the loop: predict, watch it run, learn."
  },
  {
    id: 8,
    layout: "split-code",
    title: "Full-Stack Under the Hood",
    subtitle: "Next.js 16 + FastAPI, 153 backend tests, 7 Playwright e2e tests clicking the whole journey",
    codeLang: "text",
    codeSnippet: `Repository layout

backend/     FastAPI + SQLAlchemy (PostgreSQL in Docker,
             SQLite for dev/tests)
  app/rules/       rules engine — pure functions,
                   parameters injected, no web code
  app/services/    geometry parsers (STL/DXF/STEP),
                   analysis, PDF, encrypted files, audit
  tests/           153 pytest tests — hand-calculated
                   cases for every rule and operation

frontend/    Next.js 16 (App Router) + Tailwind CSS v4
             + Three.js
  e2e/             7 Playwright browser tests + public
                   smoke test`,
    bullets: [
      "E2E suite clicks the full journey: signup → demo part → verdict loop → quote → tryout → calibration → sign out",
      "Encrypted file storage (AES-256-GCM), audit log, delete-on-request, auth + upload rate limiting",
      "PDF report with every verdict showing its rule, value and limit — shop language throughout",
      "Public demo URLs via Cloudflare quick tunnels for shopfloor walkthroughs"
    ],
    speakerNotes: "Zoom out to the engineering. The quality gates are real: 153 hand-calculated pytest cases, lint and type-check clean, and the e2e suite walks the whole user journey in a real browser, asserting the ADVISOR ENGINE: LIVE badge on load."
  },
  {
    id: 9,
    layout: "summary",
    title: "Check the Die Before It Is Cut",
    subtitle: "Presented by Kishore Ravi & Sai Amogh D K • TryoutZero",
    presenter: "Kishore Ravi & Sai Amogh D K",
    resourcesText: "Standalone interactive presentation: /presentations/tryoutzero-presstool/index.html",
    speakerNotes: "Conclude: TryoutZero is decision support, never a replacement for tryout. Every verdict is flagged for human check and every default stays pending mechanical-lead verification. Close on the arc: AutoForm simulates the die before it is cut — we do that too, and then we watch it run on the press and learn from every stroke. Invite questions and open the standalone live demo with the 3D press simulation."
  }
];
