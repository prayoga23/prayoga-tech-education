export function validateProgress(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.userId) errors.push("User ID wajib diisi");
  if (!data.lessonSlug) errors.push("Lesson slug wajib diisi");
  return { valid: errors.length === 0, errors };
}
