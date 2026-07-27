export function validateCourse(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.title) errors.push("Judul kursus wajib diisi");
  if (!data.slug) errors.push("Slug kursus wajib diisi");
  if (!data.language) errors.push("Bahasa pemrograman wajib dipilih");
  return { valid: errors.length === 0, errors };
}
