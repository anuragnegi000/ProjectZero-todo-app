const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

// Fetch all frames
export const getFrames = async () => {
  const response = await fetch(`${API_URL}/frames`);
  if (!response.ok) throw new Error("Failed to fetch frames");
  return response.json();
};

// Create a new frame
export const createFrame = async (name: string) => {
  const response = await fetch(`${API_URL}/frames`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) throw new Error("Failed to create frame");
  return response.json();
};

// Fetch todos for a specific frame
export const getTodos = async (frameId: number) => {
  const response = await fetch(`${API_URL}/frames/${frameId}/todos`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
};

// Create a new todo
export const createTodo = async (frameId: number, todoData: any) => {
  const response = await fetch(`${API_URL}/frames/${frameId}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
};
