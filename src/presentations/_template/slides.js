export const slides = [
  {
    id: 1,
    layout: "hero",
    title: "New Presentation Title",
    subtitle: "Brief description of the talk and its core thesis",
    presenter: "Speaker Name",
    event: "Tech Conference 2026",
    speakerNotes: "Welcome the audience and introduce the motivation for this topic."
  },
  {
    id: 2,
    layout: "bullets",
    title: "Problem Statement",
    subtitle: "Why this challenge is critical to address today",
    content: [
      "Key challenge 1 facing the ecosystem",
      "Performance or scalability bottlenecks",
      "Why legacy approaches fall short"
    ],
    speakerNotes: "Highlight the audience's common pain points."
  },
  {
    id: 3,
    layout: "split-code",
    title: "The Implementation Pattern",
    subtitle: "Code walkthrough and architectural principles",
    codeLang: "javascript",
    codeSnippet: `// Example code pattern
export function resilientHandler(req) {
  const result = executeWithFallback(req);
  return result;
}`,
    bullets: [
      "First architectural principle",
      "Second architectural principle",
      "Third architectural principle"
    ],
    speakerNotes: "Walk through the code syntax and explain key lines."
  },
  {
    id: 4,
    layout: "summary",
    title: "Q&A and Takeaways",
    subtitle: "Thank you for listening!",
    resourcesText: "github.com/your-username/your-repo",
    speakerNotes: "Invite questions and feedback."
  }
];
