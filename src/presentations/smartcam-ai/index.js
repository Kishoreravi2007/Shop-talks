import { slides } from './slides';

export const presentation = {
  id: "smartcam-ai",
  title: "SmartCAM-AI: Next-Gen Autonomous Machining",
  subtitle: "Transforming Engineering Drawings directly into Zero-Defect CNC Machine Operations with Computer Vision, Physics & ML.",
  category: "AI & LLMs",
  type: "Keynote",
  event: "SmartCAM-AI ShopTalk 2026",
  location: "Bangalore, India & Global",
  date: "Sep 2, 2026 (Yesterday)",
  year: "2026",
  duration: "50 mins",
  slidesCount: 10,
  views: 26500,
  rating: 4.98,
  featured: true, // Prominently feature Kishore's real ShopTalk!
  author: "Kishore Ravi",
  accentColor: "#00f2fe",
  gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #7c3aed 100%)",
  tags: ["SmartCAM-AI", "Computer Vision", "CNC Machining", "Physics AI", "Manufacturing", "Predictive ML", "G-Code"],
  abstract: `Discover how AI computer vision, physics-informed cutting algorithms, predictive machine learning, and direct shopfloor control unite to automate precision machining without human error. SmartCAM-AI eliminates the 4 to 12 hour CAM programming bottleneck by taking 2D PDF engineering drawings, extracting 3D solid geometry with OCR and computer vision, and synthesizing collision-free G-code toolpaths verified against physical cutting forces. Includes live shopfloor machining demonstrations in 4K UHD.`,
  keyTakeaways: [
    "Eliminate 95% of CAM programming lead times from blueprint to machine",
    "Physics-informed cutting calculations (Kienzle equations) maximize tool life and eliminate chatter vibration",
    "Volumetric 3D collision prevention prevents spindle crashes across 5-axis machines",
    "Direct shopfloor orchestration via MTConnect and OPC-UA protocols for real-time telemetry"
  ],
  prerequisites: "Interest in AI systems, computer vision, manufacturing automation, and physical computing.",
  standaloneUrl: "/presentations/smartcam-ai/smartcam-ai-presentation.html",
  resources: {
    repoUrl: "https://github.com/example/SmartCAM-AI",
    recordingUrl: "/presentations/smartcam-ai/smartcam_demo_machining.mp4",
    pdfUrl: "/presentations/smartcam-ai/smartcam-ai-presentation.html",
    standalonePresentation: "/presentations/smartcam-ai/smartcam-ai-presentation.html"
  },
  slides
};

export default presentation;
