export const slides = [
  {
    id: 1,
    layout: "hero",
    title: "TryoutZero: Check the Die Before It Is Cut",
    subtitle: "A browser-based advisor for small press tool rooms",
    presenter: "Kishore Ravi & Sai Amogh D K",
    event: "TryoutZero ShopTalk 2026 • Oct 14, 2026",
    speakerNotes: "• Small press tool room, sheet-metal die tryout\n• One question: can we check the part BEFORE the die is made?\n• Shop language all the way — blank, draw, thinning, springback, tonnage\n• Decision support. Never a replacement for tryout",
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
    speakerNotes: "• Pain: die is cut first, problems show at tryout\n• Every failed loop = welding, re-machining or scrapping die steel\n• Ask: who still hand-calculates springback here?\n• The fix must be fast, cheap and usable on the shop floor",
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
    speakerNotes: "• Pipeline: upload STL/STEP/DXF → unit detection → rules engine → verdicts\n• Output is low / medium / high risk, always flagged for human check\n• Also: blank size, nesting, quote, PDF report\n• Every default rule value stays pending mechanical-lead verification",
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
    speakerNotes: "• Cutting force F = L × t × τ, then tonnage with a safety factor\n• Every value lives in an editable parameter table — nothing hidden\n• The engine is pure functions: inputs + params → verdicts\n• Mechanics you can audit, not a black box",
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
    speakerNotes: "• DEMO: demo bracket → LOW RISK (R5 vs 1.5 mm limit, 15.5% vs 20% thinning)\n• Edit radius to 0.5 mm → flips to HIGH RISK, with the fix, thinning ~50%\n• Same engine, one number changed, verdict follows the physics\n• Then press matching: pick the press, watch the ram stall on overload",
  },
  {
    id: 6,
    layout: "bullets",
    title: "AI Vision & the Calibration Loop",
    subtitle: "The shop gets smarter with every die it runs",
    content: [
      "Defect photo diagnosis on any OpenAI-compatible endpoint — NVIDIA NIM Llama-3.2-11B-Vision as the tested default",
      "Constrained AI: fixed defect list, confidence score, allowed to say unsure — never invents numbers",
      "Tryout measurements propose correction factors; confirm one and it applies to your workshop only — scoped to the grade and thickness that earned it, so a tight DP steel keeps its own factor",
      "Predicted-vs-actual ledger and die history timeline keep every verdict auditable after production",
      "Degrades honestly: without credentials the vision features report switched off — the rules engine still runs"
    ],
    speakerNotes: "• Defect photo → constrained AI names it from a fixed list\n• It may say unsure — it never invents numbers\n• Tryout measurements propose a factor; the owner confirms\n• Scope = grade × thickness, so a tight steel keeps its own factor\n• Predicted-vs-actual ledger keeps verdicts auditable later",
  },
  {
    id: 7,
    layout: "bullets",
    title: "The Die-Change Ledger",
    subtitle: "The tool-room loop everyone runs — now recorded, and it actually closes",
    content: [
      "Trial N shows a defect, the die is reworked, trial N+1 shows whether the rework worked — the loop every tool room already runs, usually in a notebook",
      "Record what was done to the die after a trial; the next trial that records what was seen closes it out: resolved, no help, or still pending",
      "A blank trial sheet proves nothing (not inspected yet), so the change stays pending — outcomes compare two trial sheets and nothing more",
      "Per-defect roll-up across the job — which rework fixes which defect on which die — and the advisor suggestion path records the deterministic cause table as engine_suggestion",
      "This ledger is the shop knowledge that compounds: the dataset nobody else can copy, because AutoForm never touches the tryout bench"
    ],
    speakerNotes: "• The loop everyone runs: trial N defect → rework → trial N+1 verdict\n• Recorded here: resolved / no help / pending\n• A blank trial sheet proves nothing → change stays pending\n• Roll-up: which rework fixes which defect on which die\n• The moat — nobody else has tryout-bench data",
  },
  {
    id: 8,
    layout: "bullets",
    title: "Machine Connectivity: The Closed Loop",
    subtitle: "Connect a real press — every stroke is judged, and sustained drift calibrates the shop",
    content: [
      "Register a press and mint a machine token — one click, owner-only, stored only as a hash and shown once",
      "A gateway beside the machine streams strokes over OPC-UA, Modbus TCP or MQTT — or the built-in simulator for the demo with no hardware",
      "Every stroke gets an advisory verdict: overload against the press rating, headroom against the 80% capacity parameter, drift against the reference force for the linked job",
      "A stroke may also carry its tonnage curve (shrunk to 240 points server-side) — the peak says overload, the shape says stripping or bottoming trouble as force keeps climbing late in the stroke",
      "Drift is tracked against the rolling median of the last 20 strokes — the earliest signal of tool wear, dull edges or a lubrication change",
      "Sustained drift proposes a press safety-factor calibration for the shop to confirm — the same confirm-gated loop as the tryout screen, now fed by the machine itself"
    ],
    speakerNotes: "• Register a press → gateway beside the machine streams strokes\n• OPC-UA (Delem/Beckhoff), Modbus, MQTT — or the simulator, zero hardware\n• Per stroke: overload vs rating, headroom, drift vs reference\n• Curve: force still climbing late = stripping trouble\n• Sustained drift proposes a calibration the owner confirms\n• Contract: advisory only — it never drives a press",
  },
  {
    id: 9,
    layout: "bullets",
    title: "The CAD Already Knows the Bends",
    subtitle: "Read the bend table from the STEP model — confirm it, never trust it blind",
    content: [
      "A bent sheet carries its bends as cylindrical faces: the inner cylinder's radius is the bend radius, the arc sweep is the bend angle",
      "POST /bends/from-cad reads those faces as candidates — holes, bosses and cosmetic rounds can appear too, so every candidate is flagged for the toolmaker to confirm",
      "The flats are not in the model: the toolmaker enters each leg from the drawing, then applies the table and the checks re-run",
      "The concentric cylinders of one bend (inner and outer surface) merge into a single candidate — the one the die is made to",
      "B-spline bends, exotic exports and no-cylinder files return an honest 'no candidates' instead of a guess — plus a printable die-trial sheet to take to the press"
    ],
    speakerNotes: "• The CAD already knows the bends — read them, don't retype\n• Cylindrical faces → radius + angle; the concentric pair merges to one\n• Candidates only: holes and rounds can look like bends → toolmaker confirms\n• Flats come from the drawing; no cylinders → honest \"no candidates\"\n• Printable trial sheet: prediction left, measurement grid right",
  },
  {
    id: 10,
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
    speakerNotes: "• Architecture: Next.js front end, FastAPI rules engine\n• Quality gates: pytest, lint and type-check clean, e2e in a browser\n• Encryption at rest, rate limits, audit trail, machine tokens\n• Built to be read by a mechanical lead, not just a developer",
  },
  {
    id: 11,
    layout: "bullets",
    title: "The Workshop Learns",
    subtitle: "Analytics, an advisor that answers from your own rows, and the surfaces a tool room runs on",
    content: [
      "Shop analytics: risk mix across every job, defect Pareto across every trial, die-change outcomes, press streams — all computed from this workshop's rows",
      "Ask the advisor: which jobs should I check first? Did the die change help? Deterministic answers from the shop's own data, and it says when a question is outside its range",
      "Design revisions: a new drawing becomes v2 of the same part — inputs copied, linked to its parent, and the previous revision's checks, quotes and trial history untouched",
      "Workspace settings: your material grades (owner-only CRUD, everything still starting as an unverified candidate), the calibration ledger with confirm/reject, and the audit trail with filters",
      "CSV export of jobs, tryouts and the die-change ledger — spreadsheet-injection defended — plus multi-bend parts checked bend by bend, quote revisions priced side by side, and a printable die-trial sheet"
    ],
    speakerNotes: "• Analytics: risk mix, defect Pareto, die-change outcomes, press streams\n• Ask the advisor — answers from YOUR rows, admits when out of range\n• Revisions: v2 of a part, history on v1 untouched\n• Settings: your grades, calibration ledger, audit trail, CSV export\n• Every number here is a query the shop can verify",
  },
  {
    id: 12,
    layout: "summary",
    title: "Check the Die Before It Is Cut",
    subtitle: "Presented by Kishore Ravi & Sai Amogh D K • TryoutZero",
    presenter: "Kishore Ravi & Sai Amogh D K",
    resourcesText: "Standalone interactive presentation: /presentations/tryoutzero-presstool/index.html",
    speakerNotes: "• Close: AutoForm simulates the die before it is cut — so do we\n• Then we watch it run on the press and learn from every stroke\n• Verdicts stay advisory, defaults stay pending verification\n• Live demo is open — invite questions",
  }
];
