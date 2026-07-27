export function validateLesson(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.title) errors.push("Judul materi wajib diisi");
  if (!data.slug) errors.push("Slug materi wajib diisi");
  if (!data.courseSlug) errors.push("Course slug wajib ada");
  return { valid: errors.length === 0, errors };
}
