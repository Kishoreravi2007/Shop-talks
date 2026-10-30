# TryoutZero: Check the Die Before It Is Cut

- **Presenter**: Kishore Ravi & Sai Amogh D K
- **Event**: TryoutZero ShopTalk 2026
- **Category**: AI & LLMs / Manufacturing
- **Type**: Keynote
- **Duration**: 45 mins
- **Slides**: 10 slides
- **Standalone Presentation**: [index.html](./index.html)

## Included Media Files
1. `tryoutzero-presentation.html` — Original interactive presentation with animated verdict simulator, tonnage calculator, and live press simulation.
2. `amogh-photo.jpg` — Co-presenter profile photo (Sai Amogh D K).
3. `tryoutzero_demo_check.mp4` — Demo bracket journey: upload → file check → forming check → LOW RISK verdict, then the radius flip to HIGH RISK.
4. `tryoutzero_demo_rules.mp4` — Rules engine walkthrough: cutting force, tonnage bands, punch-die clearance and auditable parameters.
5. `tryoutzero_demo_press.mp4` — Press machine demo: 2D side view and tool path with a ram that stalls if the job overloads the machine.
6. `tryoutzero_demo_vision.mp4` — AI vision defect diagnosis with confidence bars and the shop calibration loop.

## Abstract
Small press tool rooms cut the die and then discover the problems during tryout — each loop costs weeks. TryoutZero flips the order: check the part before the die is made. Upload the part (STL / STEP / DXF), and a rules engine built on real sheet-metal mechanics checks minimum bend radius, bend thinning, springback, limiting draw ratio, blank holder force, punch-die clearance and press tonnage against a press catalog — returning low / medium / high risk verdicts with confidence, always flagged for human check. The talk walks the full loop: file intelligence, the verdict engine, strip nesting and quoting, tryout records with AI vision defect diagnosis, the shop calibration loop where confirmed corrections make every future check smarter — and machine connectivity, where a real press streams its strokes into the advisor for per-stroke verdicts and telemetry-driven calibration.

## Key Takeaways
1. Verdicts before metal is cut: LOW / MEDIUM / HIGH risk with the exact rule, value and limit behind every call.
2. Pure-function rules engine: F = L × t × τ blanking force, tonnage sizing with safety factors — every parameter auditable, nothing hard-coded.
3. Real-time press simulation: 2D tool path plus a 3D press built from the shop's own CAD models, and the ram stalls if the job overloads the machine.
4. The shop gets smarter with every die: tryout measurements propose correction factors, and confirmed ones apply to that workshop only.
5. Machine connectivity closes the loop: a press streams its strokes into the advisor, every stroke gets an advisory verdict, and sustained drift proposes calibration — predict, watch it run, learn.

## Demo Script (30 seconds live)
1. Create a tool room account, click **Try Demo Part** — 90° bracket, 1.5 mm IS 513 CRCA, legs 50 × 40 mm.
2. Expected: **LOW RISK** (inner radius 5 mm ≥ limit 1.5 mm, thinning 15.5% vs 20%) and a blank of 85.63 × 30.00 mm.
3. Edit the radius to 0.5 mm and re-run — verdict flips to **HIGH RISK** with the smallest fix, coupled thinning ~50%.
4. Open **Press Machine Demo** — pick the demo press and watch the ram stall on an overloaded job.
5. On the check screen, click **Bends from CAD** on a STEP job — radius and angle appear from the model, the toolmaker enters the flats and applies the table.
6. Open **Machine Connectivity** — register a press, push a demo stroke, and watch the per-stroke verdict, the tonnage-curve sparkline and the drift window update live.
