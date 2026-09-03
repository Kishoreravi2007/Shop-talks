import { slides } from './slides';

export const presentation = {
  id: "iot-smart-technology",
  title: "Internet of Things (IoT): Connecting the World through Smart Technology",
  subtitle: "From Edge Sensors to Cloud Intelligence — Autonomous Machine-to-Machine Communication & Smart Systems.",
  category: "IoT & Hardware",
  type: "ShopTalk",
  event: "ShopTalk NTTF Thalassery",
  location: "NTTF Thalassery, Kerala, India",
  date: "Nov 11, 2025",
  year: "2025",
  duration: "30 mins",
  slidesCount: 8,
  views: 14200,
  rating: 4.95,
  featured: false,
  author: "Kishore R",
  accentColor: "#38bdf8",
  gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
  tags: ["IoT", "Embedded Systems", "Smart Technology", "Sensors", "MQTT", "Hardware", "NTTF", "M2M"],
  abstract: `A comprehensive technical exploration of the Internet of Things (IoT) presented at NTTF Thalassery. Discover how interconnected physical devices, embedded sensors, and wireless communication protocols enable autonomous data exchange without human intervention. Covers the 4-layer architecture, consumer and industrial applications, live embedded telemetry demonstration, and the future of AI-driven edge intelligence.`,
  keyTakeaways: [
    "Understand the 4-tier IoT architecture: Perception, Transport, Processing, and Application",
    "Autonomous Machine-to-Machine (M2M) telemetry collection without human intervention",
    "Real-world deployments across Smart Homes, Smart Cities, Connected Healthcare, Agriculture & Industry",
    "Key engineering challenges: Firmware security, device encryption, and 5G integration"
  ],
  prerequisites: "Fundamentals of electronics, microcontrollers (ESP32/Arduino), and network communication.",
  standaloneUrl: "/presentations/iot-smart-technology/",
  resources: {
    pptxUrl: "/presentations/iot-smart-technology/Shoptalk-Kishore-IoT.pptx",
    recordingUrl: "/presentations/iot-smart-technology/media1.mp4",
    standalonePresentation: "/presentations/iot-smart-technology/"
  },
  slides
};

export default presentation;
