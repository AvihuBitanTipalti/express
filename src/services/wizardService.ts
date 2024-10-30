export const fetchGreeting = (): string => {
  return "Hello Wizards 🧙";
};
export const fetchProtected = (): string => {
  return "Welcome to the protected wizard area!";
};
export const fetchError = (): Error => {
  throw new Error("This is a simulated error for testing the error handler.");
};
