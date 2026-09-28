import ProcessTimeline from "./ProcessTimeline";

const STEPS = [
  { n: "01", title: "Traditional → Modern", text: "Age-old recipes, reformulated for today's formats and shelf life.", icon: "leaf" },
  { n: "02", title: "Ingredient → Product", text: "Raw Indian ingredients, developed into finished food products.", icon: "flask" },
  { n: "03", title: "Food → Technology", text: "Food science and processing methods applied with precision.", icon: "scope" },
  { n: "04", title: "India → World", text: "Built on Indian roots, developed for global markets.", icon: "globe" },
];

export default function FoodInnovationGrid() {
  return <ProcessTimeline eyebrow="Food Innovation" title="Food innovation, rooted in India." steps={STEPS} dark />;
}
