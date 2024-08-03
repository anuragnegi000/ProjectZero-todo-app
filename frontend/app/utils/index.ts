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
