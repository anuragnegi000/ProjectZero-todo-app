import { Description } from "@radix-ui/react-dialog";

export const HerosSectionData =
  " Welcome to the World of Breaking Bounderies of your potential ";

export const globeConfig = {
  pointSize: 4, // Size of the points on the globe
  globeColor: "#062056", // Color of the globe
  showAtmosphere: true, // Whether to show the atmosphere layer
  atmosphereColor: "#FFFFFF", // Color of the atmosphere
  atmosphereAltitude: 0.1, // Altitude of the atmosphere layer
  emissive: "#062056", // Emissive color of the globe material
  emissiveIntensity: 0.1, // Intensity of the emissive color
  shininess: 0.9, // Shininess of the globe material
  polygonColor: "rgba(255,255,255,0.7)", // Color of the polygons on the globe
  ambientLight: "#38bdf8", // Color of the ambient light in the scene
  directionalLeftLight: "#ffffff", // Color of the directional light from the left
  directionalTopLight: "#ffffff", // Color of the directional light from the top
  pointLight: "#ffffff", // Color of the point light in the scene
  arcTime: 1000, // Animation time for the arcs
  arcLength: 0.9, // Length of the dash in the arc animations
  rings: 1, // Number of rings to display initially
  maxRings: 3, // Maximum number of rings that can be displayed
  initialPosition: { lat: 22.3193, lng: 114.1694 }, // Initial position of the globe
  autoRotate: true, // Whether the globe should auto-rotate
  autoRotateSpeed: 0.5, // Speed of the auto-rotation
};

export const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
export const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
];

export const FakeTodos = [
  {
    id: 1,
    TodoName: "Manga to Read - Altitude",
    Description: "Manga Reading",
    TodoDate: "2023-03-01",
    Priority: "Low",
    Picture: "none",
  },
  {
    id: 2,
    TodoName: "Grocery Shopping",
    Description: "Buy groceries for the week",
    TodoDate: "2023-03-02",
    Priority: "High",
    Picture: "none",
  },
  {
    id: 3,
    TodoName: "Workout",
    Description: "Morning workout session",
    TodoDate: "2023-03-03",
    Priority: "Medium",
    Picture: "none",
  },
  {
    id: 4,
    TodoName: "Read Book - Atomic Habits",
    Description: "Read chapters 1-3",
    TodoDate: "2023-03-04",
    Priority: "Low",
    Picture: "none",
  },
  {
    id: 5,
    TodoName: "Call Parents",
    Description: "Catch up with parents",
    TodoDate: "2023-03-05",
    Priority: "High",
    Picture: "none",
  },
  {
    id: 6,
    TodoName: "Complete Project Report",
    Description: "Finish writing the project report",
    TodoDate: "2023-03-06",
    Priority: "High",
    Picture: "none",
  },
  {
    id: 7,
    TodoName: "Pay Bills",
    Description: "Pay electricity and water bills",
    TodoDate: "2023-03-07",
    Priority: "Medium",
    Picture: "none",
  },
  {
    id: 8,
    TodoName: "Plan Weekend Trip",
    Description: "Plan itinerary for weekend trip",
    TodoDate: "2023-03-08",
    Priority: "Low",
    Picture: "none",
  },
  {
    id: 9,
    TodoName: "Attend Workshop",
    Description: "Attend the React workshop",
    TodoDate: "2023-03-09",
    Priority: "High",
    Picture: "none",
  },
  {
    id: 10,
    TodoName: "Clean the House",
    Description: "Do a thorough house cleaning",
    TodoDate: "2023-03-10",
    Priority: "Medium",
    Picture: "none",
  },
];

export const ObjectTodos = [
  {
    title: "Daily Tasks",
    date: "2024-08-24",
    todos: [
      { id: "1", title: "Organize workspace", date: "2024-08-24" },
      { id: "2", title: "Finish project proposal", date: "2024-08-24" },
      { id: "3", title: "Read React documentation", date: "2024-08-24" },
      { id: "4", title: "Practice TypeScript", date: "2024-08-24" },
      { id: "5", title: "Write a blog post", date: "2024-08-24" },
      { id: "6", title: "Exercise for 30 minutes", date: "2024-08-24" },
      { id: "7", title: "Meal prep for the week", date: "2024-08-24" },
      { id: "8", title: "Organize workspace", date: "2024-08-24" },
      { id: "9", title: "Watch a tutorial", date: "2024-08-24" },
      { id: "10", title: "Plan weekend activities", date: "2024-08-24" },
      { id: "11", title: "Organize workspace", date: "2024-08-24" },
      { id: "12", title: "Finish project proposal", date: "2024-08-24" },
      { id: "13", title: "Read React documentation", date: "2024-08-24" },
      { id: "14", title: "Practice TypeScript", date: "2024-08-24" },
      { id: "15", title: "Write a blog post", date: "2024-08-24" },
      { id: "16", title: "Exercise for 30 minutes", date: "2024-08-24" },
      { id: "17", title: "Meal prep for the week", date: "2024-08-24" },
      { id: "18", title: "Organize workspace", date: "2024-08-24" },
      { id: "19", title: "Watch a tutorial", date: "2024-08-24" },
      { id: "20", title: "Plan weekend activities", date: "2024-08-24" },
      { id: "21", title: "Organize workspace", date: "2024-08-24" },
      { id: "22", title: "Finish project proposal", date: "2024-08-24" },
      { id: "23", title: "Read React documentation", date: "2024-08-24" },
      { id: "24", title: "Practice TypeScript", date: "2024-08-24" },
      { id: "25", title: "Write a blog post", date: "2024-08-24" },
      { id: "26", title: "Exercise for 30 minutes", date: "2024-08-24" },
      { id: "27", title: "Meal prep for the week", date: "2024-08-24" },
      { id: "28", title: "Organize workspace", date: "2024-08-24" },
      { id: "29", title: "Watch a tutorial", date: "2024-08-24" },
      { id: "30", title: "Plan weekend activities", date: "2024-08-24" },
      { id: "31", title: "Organize workspace", date: "2024-08-24" },
      { id: "32", title: "Finish project proposal", date: "2024-08-24" },
      { id: "33", title: "Read React documentation", date: "2024-08-24" },
      { id: "34", title: "Practice TypeScript", date: "2024-08-24" },
      { id: "35", title: "Write a blog post", date: "2024-08-24" },
      { id: "36", title: "Exercise for 30 minutes", date: "2024-08-24" },
      { id: "37", title: "Meal prep for the week", date: "2024-08-24" },
      { id: "38", title: "Organize workspace", date: "2024-08-24" },
      { id: "39", title: "Watch a tutorial", date: "2024-08-24" },
      { id: "40", title: "Plan weekend activities", date: "2024-08-24" },
    ],
  },
  {
    title: "Weekend Planning",
    date: "2024-08-25",
    todos: [
      { id: "41", title: "Plan weekend trip", date: "2024-08-25" },
      { id: "42", title: "Book a hotel", date: "2024-08-25" },
      { id: "43", title: "Research destinations", date: "2024-08-25" },
      { id: "44", title: "Pack essentials", date: "2024-08-25" },
      { id: "45", title: "Plan route", date: "2024-08-25" },
      { id: "46", title: "Create itinerary", date: "2024-08-25" },
      { id: "47", title: "Check weather forecast", date: "2024-08-25" },
      { id: "48", title: "Charge devices", date: "2024-08-25" },
      { id: "49", title: "Finalize budget", date: "2024-08-25" },
      { id: "50", title: "Confirm reservations", date: "2024-08-25" },
    ],
  },
  {
    title: "Webinar Preparation",
    date: "2024-08-26",
    todos: [
      { id: "51", title: "Attend webinar on AI", date: "2024-08-26" },
      { id: "52", title: "Prepare questions", date: "2024-08-26" },
      { id: "53", title: "Take notes", date: "2024-08-26" },
      { id: "54", title: "Review AI concepts", date: "2024-08-26" },
      { id: "55", title: "Join webinar early", date: "2024-08-26" },
      { id: "56", title: "Engage in Q&A", date: "2024-08-26" },
      { id: "57", title: "Write summary", date: "2024-08-26" },
      { id: "58", title: "Discuss with peers", date: "2024-08-26" },
      { id: "59", title: "Implement ideas", date: "2024-08-26" },
      { id: "60", title: "Share key takeaways", date: "2024-08-26" },
    ],
  },
  {
    title: "House Cleaning",
    date: "2024-08-27",
    todos: [
      { id: "61", title: "Clean the house", date: "2024-08-27" },
      { id: "62", title: "Vacuum living room", date: "2024-08-27" },
      { id: "63", title: "Dust furniture", date: "2024-08-27" },
      { id: "64", title: "Mop kitchen floor", date: "2024-08-27" },
      { id: "65", title: "Clean bathroom", date: "2024-08-27" },
      { id: "66", title: "Organize closet", date: "2024-08-27" },
      { id: "67", title: "Wash windows", date: "2024-08-27" },
      { id: "68", title: "Take out trash", date: "2024-08-27" },
      { id: "69", title: "Wipe down counters", date: "2024-08-27" },
      { id: "70", title: "Launder bedding", date: "2024-08-27" },
    ],
  },
  {
    title: "New Project Kickoff",
    date: "2024-08-28",
    todos: [
      { id: "71", title: "Start a new project", date: "2024-08-28" },
      { id: "72", title: "Brainstorm ideas", date: "2024-08-28" },
      { id: "73", title: "Create a project plan", date: "2024-08-28" },
      { id: "74", title: "Define goals", date: "2024-08-28" },
      { id: "75", title: "Assign tasks", date: "2024-08-28" },
      { id: "76", title: "Set deadlines", date: "2024-08-28" },
      { id: "77", title: "Communicate with team", date: "2024-08-28" },
      { id: "78", title: "Track progress", date: "2024-08-28" },
      { id: "79", title: "Hold a kickoff meeting", date: "2024-08-28" },
      { id: "80", title: "Gather feedback", date: "2024-08-28" },
    ],
  },
];
