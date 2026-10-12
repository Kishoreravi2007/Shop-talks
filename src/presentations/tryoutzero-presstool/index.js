import { slides } from './slides';

export const presentation = {
  id: "tryoutzero-press-tools",
  title: "TryoutZero: Check the Die Before It Is Cut",
  subtitle: "A browser-based advisor for small press tool rooms — blank, draw, thinning, wrinkling, springback, tonnage and nesting, all in shop language.",
  category: "AI & LLMs",
  type: "Keynote",
  event: "TryoutZero ShopTalk 2026",
  location: "Bangalore, India",
  date: "Oct 12, 2026",
  year: "2026",
  duration: "45 mins",
  slidesCount: 8,
  views: 12800,
  rating: 4.92,
  featured: true,
  author: "Kishore Ravi & Sai Amogh D K",
  accentColor: "#FF7A2F",
  gradient: "linear-gradient(135deg, #FF7A2F 0%, #C25A1C 50%, #2b3540 100%)",
  tags: ["TryoutZero", "Press Tools", "Sheet Metal", "Rules Engine", "Computer Vision", "Die Tryout", "Manufacturing"],
  abstract: `Small press tool rooms cut the die and then discover the problems during tryout — each loop costs weeks. TryoutZero flips the order: check the part before the die is made. Upload the part (STL / STEP / DXF), and a rules engine built on real sheet-metal mechanics checks minimum bend radius, bend thinning, springback, limiting draw ratio, blank holder force, punch-die clearance and press tonnage against a press catalog — returning low / medium / high risk verdicts with confidence, always flagged for human check. The talk walks the full loop: file intelligence, the verdict engine, strip nesting and quoting, tryout records with AI vision defect diagnosis, and the shop calibration loop where confirmed corrections make every future check smarter.`,
  keyTakeaways: [
    "Verdicts before metal is cut: LOW / MEDIUM / HIGH risk with the exact rule, value and limit behind every call",
    "Pure-function rules engine: F = L × t × τ blanking force, tonnage sizing with safety factors — every parameter auditable, nothing hard-coded",
    "Real-time press simulation: 2D tool path plus a 3D press built from the shop's own CAD models, and the ram stalls if the job overloads the machine",
    "The shop gets smarter with every die: tryout measurements propose correction factors, and confirmed ones apply to that workshop only"
  ],
  prerequisites: "Interest in manufacturing software, mechanical rules engineering, and applied AI on the shopfloor.",
  standaloneUrl: "/presentations/tryoutzero-presstool/index.html",
  resources: {
    repoUrl: "https://github.com/Kishoreravi2007/tryoutzero",
    recordingUrl: "/presentations/tryoutzero-presstool/tryoutzero_demo_check.mp4",
    pdfUrl: "/presentations/tryoutzero-presstool/index.html",
    standalonePresentation: "/presentations/tryoutzero-presstool/index.html"
  },
  slides
};

export default presentation;
