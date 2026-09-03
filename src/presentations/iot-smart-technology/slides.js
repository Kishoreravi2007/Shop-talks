export const slides = [
  {
    id: 1,
    type: "hero",
    title: "Internet of Things (IoT)",
    subtitle: "Connecting the World through Smart Technology — From Edge Sensors to Cloud Intelligence",
    presenter: "Kishore R",
    event: "ShopTalk NTTF Thalassery • Presented Nov 11, 2025",
    speakerNotes: "Good morning everyone. Today we are diving into the Internet of Things (IoT), how physical devices communicate across networks without human intervention, and how this transforms smart cities, manufacturing, and daily life."
  },
  {
    id: 2,
    type: "checklist",
    title: "Introduction to IoT",
    subtitle: "What is the Internet of Things and why is it transforming the modern world?",
    points: [
      "IoT stands for Internet of Things — an interconnected network of physical devices.",
      "Embedded with sensors, software, and network connectivity to collect and exchange data.",
      "Automates operations to make daily life and industrial processes smarter, faster, and more efficient.",
      "Everyday Examples: Smartwatches, smart homes, connected vehicles, industrial robots, and automated grid telemetry."
    ],
    speakerNotes: "IoT is fundamentally about bridging the physical world with the digital world. By equipping devices with microcontrollers and sensors, they can continuously measure real-world physical parameters and broadcast telemetry."
  },
  {
    id: 3,
    type: "metrics",
    title: "Formal Definition & Core Principles",
    subtitle: "Autonomous M2M communication without required human intervention",
    metrics: [
      {
        value: "M2M",
        label: "Machine-to-Machine",
        description: "Direct autonomous communication without human intervention"
      },
      {
        value: "Real-Time",
        label: "Data Ingestion",
        description: "Continuous sensor telemetry streamed to edge gateways"
      },
      {
        value: "Cloud + AI",
        label: "Edge Compute",
        description: "Data aggregated and analyzed for predictive insights"
      }
    ],
    speakerNotes: "The formal definition: The Internet of Things is a system of interrelated computing devices, mechanical and digital machines, or objects that can transfer data over a network without human intervention."
  },
  {
    id: 4,
    type: "diagram",
    title: "IoT Architecture & Ecosystem",
    subtitle: "The 4-Tier Flow: Perception, Transport, Processing, and Application Layers",
    diagramNodes: [
      {
        id: "perception",
        title: "1. Perception Layer",
        desc: "Sensors, Actuators, RFID, Temperature & Pressure Transducers"
      },
      {
        id: "transport",
        title: "2. Transport Layer",
        desc: "MQTT, CoAP, HTTP/REST, LoRaWAN, Zigbee, WiFi & 5G"
      },
      {
        id: "processing",
        title: "3. Processing Layer",
        desc: "Cloud Storage, Edge Gateways, Real-time Analytics & AI Inference"
      },
      {
        id: "application",
        title: "4. Application Layer",
        desc: "Smart Home Dashboards, Industrial Telemetry & Mobile Control"
      }
    ],
    speakerNotes: "This diagram shows the complete end-to-end pipeline of IoT systems: from the physical perception layer collecting analogue data, through transport protocols, up to the processing cloud layer and user application layer."
  },
  {
    id: 5,
    type: "checklist",
    title: "Major Real-World Applications",
    subtitle: "Deploying IoT across homes, cities, healthcare, and smart factories",
    points: [
      "Smart Homes: Intelligent lighting, security access, HVAC climate control, automated appliances.",
      "Smart Cities: Real-time traffic control, intelligent waste management, smart street lighting.",
      "Connected Healthcare: Remote patient monitoring, wearable biometric telemetry, smart medication dispensers.",
      "Smart Agriculture: Automated precision irrigation, soil moisture sensing, automated drone crop monitoring.",
      "Industrial Automation (IIoT): Predictive machine maintenance, vibration analysis, asset tracking."
    ],
    speakerNotes: "IoT is already ubiquitous. In agriculture, soil sensors trigger drip irrigation only when moisture falls below a threshold. In industry, vibration sensors detect bearing fatigue before machine failure happens."
  },
  {
    id: 6,
    type: "split-code",
    title: "Live IoT Demonstration & Embedded Logic",
    subtitle: "Microcontroller sensor telemetry loop (ESP32 / Arduino C++)",
    codeSnippet: `// IoT Telemetry Loop: Reading Sensor & Publishing via MQTT
#include <WiFi.h>
#include <PubSubClient.h>

void loop() {
  // 1. Read analogue telemetry from physical sensor
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // 2. Format JSON payload
  char payload[128];
  snprintf(payload, sizeof(payload), 
    "{\\"temp\\": %.2f, \\"hum\\": %.2f, \\"device\\": \\"NTTF-Node-01\\"}", 
    temperature, humidity
  );

  // 3. Publish to Cloud Gateway
  mqttClient.publish("telemetry/sensors", payload);
  delay(2000); // 2s telemetry heartbeat
}`,
    codeLanguage: "cpp",
    highlights: [
      "Microcontroller reads sensor data via I2C / SPI / GPIO",
      "Transmits via lightweight MQTT broker over WiFi/Cellular",
      "4K Video Demo attached in standalone presentation player"
    ],
    speakerNotes: "Here is the concise microcontroller code demonstrating how edge nodes ingest physical readings and broadcast JSON payloads over lightweight publish/subscribe MQTT protocol."
  },
  {
    id: 7,
    type: "summary",
    title: "Conclusion & Future Horizons",
    subtitle: "The convergence of IoT with Generative AI, 5G, and Edge Computing",
    takeaways: [
      "IoT is revolutionizing society by connecting everyday physical objects into intelligent digital ecosystems.",
      "The synergy of AI + IoT (AIoT) enables smart devices to perform on-device inference without cloud latency.",
      "Critical Challenges: Device security, end-to-end encryption, data privacy, and firmware vulnerability management remain vital areas of focus.",
      "Next Frontier: 5G ultra-low latency M2M and automated smart factories."
    ],
    speakerNotes: "In conclusion, IoT is creating truly connected environments. The future will see tighter integration between AI inference at the edge and 5G networks, while robust device encryption is critical for securing physical systems."
  }
];

export default slides;
