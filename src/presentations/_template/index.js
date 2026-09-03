import { slides } from './slides';

export const presentation = {
  id: "my-new-presentation",
  title: "New Presentation Title",
  subtitle: "Brief description of the talk and its core thesis.",
  category: "Architecture", // 'Architecture' | 'Frontend' | 'AI & LLMs' | 'Databases' | 'UI & Design Systems' | 'DevOps & Reliability'
  type: "Conference",       // 'Keynote' | 'Conference' | 'Workshop' | 'Internal Tech Talk'
  event: "Tech Conference 2026",
  location: "San Francisco, CA",
  date: "May 20, 2026",
  year: "2026",
  duration: "45 mins",
  slidesCount: slides.length,
  views: 1200,
  rating: 4.9,
  featured: false,
  accentColor: "#6366F1",
  gradient: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)",
  tags: ["Architecture", "System Design"],
  abstract: `A detailed description of the talk, what problems it solves, and key takeaways for engineers.`,
  keyTakeaways: [
    "Key takeaway point 1",
    "Key takeaway point 2",
    "Key takeaway point 3"
  ],
  prerequisites: "Basic software development background.",
  resources: {
    repoUrl: "https://github.com",
    recordingUrl: "https://youtube.com",
    pdfUrl: "#"
  },
  slides
};

export default presentation;
