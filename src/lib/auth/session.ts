import { UserProfile } from "@/types/user";

export const MOCK_USER: UserProfile = {
  uid: "demo-user-123",
  email: "developer@prayoga.tech",
  displayName: "Pro Learner",
  photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=ProLearner",
  role: "student",
  xp: 450,
  level: 4,
  streak: 5,
  lastActiveDate: new Date().toISOString(),
  completedLessons: ["js-intro", "js-variables", "py-intro"],
  enrolledCourses: ["javascript-basics", "python-masterclass"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export function getLocalSession(): UserProfile | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("prayoga_user_session");
  if (!stored) return MOCK_USER; // Default demo guest
  try {
    return JSON.parse(stored);
  } catch {
    return MOCK_USER;
  }
}

export function setLocalSession(user: UserProfile) {
  if (typeof window !== "undefined") {
    localStorage.setItem("prayoga_user_session", JSON.stringify(user));
  }
}

export function clearLocalSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("prayoga_user_session");
  }
}
