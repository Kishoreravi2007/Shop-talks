export const slides = [
  {
    id: 1,
    layout: "hero",
    title: "SmartCAM-AI: Next-Gen Autonomous Machining",
    subtitle: "Transforming Engineering Drawings directly into Zero-Defect CNC Machine Operations",
    presenter: "Kishore Ravi",
    event: "SmartCAM-AI ShopTalk 2026 • Presented Yesterday (Sep 2, 2026)",
    speakerNotes: "Welcome everyone to ShopTalk! Today we explore the era of hands-free precision manufacturing: how AI computer vision, physics-informed cutting algorithms, predictive ML, and direct shopfloor control unite to automate precision machining without human error."
  },
  {
    id: 2,
    layout: "bullets",
    title: "The CNC Programming Bottleneck",
    subtitle: "Bridging the gap between 2D engineering drawings and machine-ready execution",
    content: [
      "Traditional CAM programming takes 4 to 12 hours of manual CAM engineer setup per complex part",
      "G-code translation errors cause catastrophic spindle crashes costing upwards of $45,000",
      "Severe shortage of skilled CNC machinists and CAM programmers across precision manufacturing",
      "Manual trial cuts and dry runs consume valuable machine capacity and scrap raw material"
    ],
    speakerNotes: "Highlight the massive labor gap. Precision aerospace and automotive machine shops are constrained not by spindle capacity, but by the bottleneck of manual CAM programming."
  },
  {
    id: 3,
    layout: "diagram",
    title: "End-to-End System Intelligence",
    subtitle: "A multi-layered ecosystem connecting vision, physics, machine learning, and hardware",
    diagramType: "flow",
    nodes: [
      { name: "Blueprint Ingestion", status: "YOLOv8 + OpenCV 2D Blueprint Extraction", color: "#00f2fe" },
      { name: "3D CAD Solid Model", status: "B-Rep Reconstruction & Feature Graph", color: "#4facfe" },
      { name: "Physics-Informed CAM", status: "Kienzle Force Models & Chatter Avoidance", color: "#10b981" },
      { name: "Volumetric Safety", status: "Bounding Envelope & Collision Detection", color: "#f59e0b" },
      { name: "Shopfloor CNC", status: "OPC UA / MTConnect Direct Machine Link", color: "#8b5cf6" }
    ],
    content: [
      "Direct ingestion of raw PDF and CAD blueprints into clean 3D solid geometry",
      "Deterministic physics algorithms compute optimal feed rates, spindle RPM, and chip load",
      "100% pre-flight safety envelope verification before code ever touches the machine controller"
    ],
    speakerNotes: "Walk through the pipeline. It begins with raw blueprint PDF parsing and concludes with direct RS-274D G-code execution streamed via MTConnect."
  },
  {
    id: 4,
    layout: "split-code",
    title: "Feature-Aware Machining Physics",
    subtitle: "Calculating optimal speeds, feeds, and toolpaths using real metal cutting science",
    codeLang: "python",
    codeSnippet: `# Physics-Informed Cutting Force Calculation (Kienzle Model)
import numpy as np

def calculate_kienzle_cutting_force(kc1_1, mc, chip_thickness_h, width_b):
    """
    Computes tangential cutting force Fc (N) based on workpiece specific
    cutting force kc1.1 and chip thickness exponent mc.
    """
    # Specific cutting force adjustment for chip thickness
    kc = kc1_1 * (chip_thickness_h ** (-mc))
    tangential_force = kc * width_b * chip_thickness_h
    return tangential_force

# Example: Aerospace Grade Ti-6Al-4V Titanium
force_n = calculate_kienzle_cutting_force(
    kc1_1=1950, # N/mm^2 for Titanium
    mc=0.23,
    chip_thickness_h=0.12, # mm
    width_b=4.5            # mm
)`,
    bullets: [
      "Kienzle and Merchant orthogonal cutting mechanics prevent tool deflection",
      "Real-time harmonic chatter vibration avoidance selects safe spindle sweet spots",
      "Constant material removal rate (MRR) prevents thermal shock in aerospace alloys",
      "Adaptive trochoidal toolpath generation expands tool longevity by 3.4x"
    ],
    speakerNotes: "Explain the Kienzle model. Instead of relying on static manufacturer speed charts, SmartCAM-AI computes instantaneous chip thickness and cutting force dynamically."
  },
  {
    id: 5,
    layout: "metrics",
    title: "Shopfloor Business Impact & ROI",
    subtitle: "Measurable production results across aerospace and automotive production facilities",
    metrics: [
      { label: "Programming Time", before: "6.5 hours", after: "18 mins", change: "-95.4%", positive: true },
      { label: "Scrap & Rework", before: "7.2%", after: "0.2%", change: "-97.2%", positive: true },
      { label: "Tool Life Span", before: "180 parts", after: "612 parts", change: "+240%", positive: true },
      { label: "Spindle Utilization", before: "48%", after: "86%", change: "+79.1%", positive: true }
    ],
    content: [
      "Average cost savings of $120,000+ per 5-axis CNC machining center annually",
      "Zero collision incidents recorded across 45,000+ machine operational hours",
      "Seamless integration with Fanuc, Siemens Sinumerik, Haas, and Heidenhain controllers"
    ],
    speakerNotes: "Highlight the 95% reduction in programming time: from 6.5 hours down to 18 minutes. Machinists can inspect and hit green-button start within the same shift."
  },
  {
    id: 6,
    layout: "summary",
    title: "Autonomous Factory of Tomorrow",
    subtitle: "Presented by Kishore Ravi • SmartCAM-AI",
    presenter: "Kishore Ravi",
    resourcesText: "Standalone interactive presentation: /presentations/smartcam-ai/smartcam-ai-presentation.html",
    speakerNotes: "Conclude the presentation and invite attendees to try the standalone live video demo and interactive 3D machining simulation."
  }
];
