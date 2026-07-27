import { Course } from "@/types/course";
import { Lesson } from "@/types/lesson";
import { LeaderboardEntry } from "@/types/api";

export const SEED_COURSES: Course[] = [
  {
    id: "javascript-basics",
    title: "JavaScript Fundamentals for Beginners",
    slug: "javascript-basics",
    description: "Pelajari konsep dasar pemrograman JavaScript dari variabel, fungsi, kondisi, hingga manipulasi array secara interaktif.",
    shortDescription: "Kuasai bahasa pemrograman paling populer di dunia untuk pengembangan web modern.",
    icon: "Code2",
    color: "from-amber-500/20 to-yellow-500/10",
    level: "beginner",
    language: "javascript",
    totalLessons: 5,
    totalXp: 250,
    estimatedHours: 4,
    isPopular: true,
    modules: [
      {
        id: "mod-1",
        title: "Modul 1: Pengenalan JavaScript",
        description: "Dasar variabel dan tipe data dalam JavaScript.",
        order: 1,
        lessonSlugs: ["js-intro", "js-variables", "js-data-types"],
      },
      {
        id: "mod-2",
        title: "Modul 2: Logika & Kondisi",
        description: "Membuat keputusan dengan percabangan if-else.",
        order: 2,
        lessonSlugs: ["js-conditionals", "js-functions"],
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "python-masterclass",
    title: "Python Masterclass: Logika & Algoritma",
    slug: "python-masterclass",
    description: "Panduan lengkap belajar bahasa Python dari nol. Cocok untuk data science, otomatisasi, dan pengembangan sistem.",
    shortDescription: "Bahasa pemrograman paling simpel, powerful, dan disukai oleh pemula maupun profesional.",
    icon: "Terminal",
    color: "from-blue-500/20 to-cyan-500/10",
    level: "beginner",
    language: "python",
    totalLessons: 3,
    totalXp: 150,
    estimatedHours: 3,
    isNew: true,
    modules: [
      {
        id: "mod-py-1",
        title: "Modul 1: Fondasi Python",
        description: "Mencetak teks dan manipulasi data dasar.",
        order: 1,
        lessonSlugs: ["py-intro", "py-variables", "py-loops"],
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "web-development-html-css",
    title: "Web Development: HTML & CSS Interactive",
    slug: "web-development-html-css",
    description: "Buat halaman web modern dan indah menggunakan struktur HTML5 dan styling CSS3.",
    shortDescription: "Langkah awal membangun website profesional secara visual dan interaktif.",
    icon: "Layout",
    color: "from-emerald-500/20 to-teal-500/10",
    level: "beginner",
    language: "html",
    totalLessons: 2,
    totalXp: 100,
    estimatedHours: 2,
    modules: [
      {
        id: "mod-web-1",
        title: "Modul 1: Struktur Web HTML5",
        description: "Elemen dasar website.",
        order: 1,
        lessonSlugs: ["html-intro", "html-buttons"],
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const SEED_LESSONS: Lesson[] = [
  // JS Lesson 1
  {
    id: "js-intro",
    courseSlug: "javascript-basics",
    slug: "js-intro",
    title: "1. Hello World dengan JavaScript",
    description: "Langkah pertama kamu dalam dunia coding JavaScript! Pelajari cara mencetak pesan ke konsol.",
    contentMarkdown: `### Selamat Datang di JavaScript! 🚀

Dalam JavaScript, perintah \`console.log()\` digunakan untuk mencetak pesan atau keluaran ke konsol browser.

#### Contoh:
\`\`\`javascript
console.log("Hello, World!");
\`\`\`

#### Tugas Kamu:
Cetak teks **"Hello Prayoga!"** ke dalam konsol menggunakan perintah \`console.log()\`.
`,
    language: "javascript",
    initialCode: `// Tulis kode kamu di bawah ini\nconsole.log("Hello Prayoga!");\n`,
    solutionCode: `console.log("Hello Prayoga!");`,
    xpReward: 50,
    order: 1,
    hints: ["Gunakan console.log() dan pastikan huruf besarnya tepat."],
    testCases: [
      {
        id: "tc-1",
        expectedOutput: "Hello Prayoga!",
        description: "Mencetak 'Hello Prayoga!' ke konsol",
      },
    ],
    nextLessonSlug: "js-variables",
  },
  // JS Lesson 2
  {
    id: "js-variables",
    courseSlug: "javascript-basics",
    slug: "js-variables",
    title: "2. Memahami Variabel dalam JavaScript",
    description: "Variabel digunakan untuk menyimpan nilai data agar dapat digunakan kembali dalam program.",
    contentMarkdown: `### Variabel (\`let\` dan \`const\`) 📦

Di JavaScript modern, kita menggunakan:
- \`let\` untuk variabel yang nilainya bisa diubah.
- \`const\` untuk variabel konstan yang nilainya tidak berubah.

#### Contoh:
\`\`\`javascript
let nama = "Budi";
const umur = 20;
console.log(nama);
\`\`\`

#### Tugas Kamu:
Buatlah variabel bernama \`bahasa\` dengan nilai **"JavaScript"**, lalu cetak variabel tersebut dengan \`console.log(bahasa)\`.
`,
    language: "javascript",
    initialCode: `// Buat variabel bahasa dan cetak hasilnya\nlet bahasa = "JavaScript";\nconsole.log(bahasa);\n`,
    solutionCode: `let bahasa = "JavaScript";\nconsole.log(bahasa);`,
    xpReward: 50,
    order: 2,
    hints: ["Gunakan let bahasa = 'JavaScript'; lalu console.log(bahasa);"],
    testCases: [
      {
        id: "tc-2",
        expectedOutput: "JavaScript",
        description: "Output harus menampilkan 'JavaScript'",
      },
    ],
    prevLessonSlug: "js-intro",
    nextLessonSlug: "js-data-types",
  },
  // JS Lesson 3
  {
    id: "js-data-types",
    courseSlug: "javascript-basics",
    slug: "js-data-types",
    title: "3. Tipe Data Angka & Operasi Matematika",
    description: "Lakukan penjumlahan, pengurangan, dan perkalian dengan operator aritmatika.",
    contentMarkdown: `### Operasi Aritmatika 🔢

JavaScript mendukung penjumlahan (\`+\`), pengurangan (\`-\`), perkalian (\`*\`), dan pembagian (\`/\`).

#### Contoh:
\`\`\`javascript
let hasil = 10 + 5;
console.log(hasil); // 15
\`\`\`

#### Tugas Kamu:
Hitung hasil perkalian dari \`7 * 8\` simpan ke dalam variabel \`hasilPerkalian\`, lalu cetak variabel tersebut.
`,
    language: "javascript",
    initialCode: `let hasilPerkalian = 7 * 8;\nconsole.log(hasilPerkalian);\n`,
    solutionCode: `let hasilPerkalian = 7 * 8;\nconsole.log(hasilPerkalian);`,
    xpReward: 50,
    order: 3,
    hints: ["7 dikali 8 adalah 56"],
    testCases: [
      {
        id: "tc-3",
        expectedOutput: "56",
        description: "Harus mencetak hasil perkalian 56",
      },
    ],
    prevLessonSlug: "js-variables",
    nextLessonSlug: "js-conditionals",
  },
  // JS Lesson 4
  {
    id: "js-conditionals",
    courseSlug: "javascript-basics",
    slug: "js-conditionals",
    title: "4. Percabangan Jika-Maka (If - Else)",
    description: "Memungkinkan kode mengambil keputusan berdasarkan kondisi logis.",
    contentMarkdown: `### Pernyataan If-Else 🤔

Gunakan \`if\` untuk mengeksekusi blok kode hanya jika kondisi bernilai \`true\`.

#### Contoh:
\`\`\`javascript
let nilai = 85;
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Coba Lagi");
}
\`\`\`

#### Tugas Kamu:
Buat kondisi jika \`skor\` bernilai **90** dan skor \`>= 80\`, cetak **"Kerja Bagus!"**.
`,
    language: "javascript",
    initialCode: `let skor = 90;\nif (skor >= 80) {\n  console.log("Kerja Bagus!");\n}\n`,
    solutionCode: `let skor = 90;\nif (skor >= 80) {\n  console.log("Kerja Bagus!");\n}`,
    xpReward: 50,
    order: 4,
    hints: ["Pastikan string yang dicetak persis 'Kerja Bagus!'"],
    testCases: [
      {
        id: "tc-4",
        expectedOutput: "Kerja Bagus!",
        description: "Harus mencetak 'Kerja Bagus!'",
      },
    ],
    prevLessonSlug: "js-data-types",
    nextLessonSlug: "js-functions",
  },
  // JS Lesson 5
  {
    id: "js-functions",
    courseSlug: "javascript-basics",
    slug: "js-functions",
    title: "5. Fungsi (Functions) dalam JavaScript",
    description: "Fungsi adalah blok kode yang dirancang untuk menjalankan tugas tertentu.",
    contentMarkdown: `### Membuat Fungsi ⚡

Fungsi menerima argumen dan mengembalikan nilai dengan kata kunci \`return\`.

#### Contoh:
\`\`\`javascript
function sapa(nama) {
  return "Halo " + nama;
}
console.log(sapa("Prayoga"));
\`\`\`

#### Tugas Kamu:
Buat fungsi \`tambah(a, b)\` yang mengembalikan jumlah dari \`a + b\`. Panggil fungsi tersebut dengan nilai \`tambah(12, 8)\` dan cetak hasilnya dengan \`console.log()\`.
`,
    language: "javascript",
    initialCode: `function tambah(a, b) {\n  return a + b;\n}\nconsole.log(tambah(12, 8));\n`,
    solutionCode: `function tambah(a, b) {\n  return a + b;\n}\nconsole.log(tambah(12, 8));`,
    xpReward: 50,
    order: 5,
    hints: ["12 + 8 = 20"],
    testCases: [
      {
        id: "tc-5",
        expectedOutput: "20",
        description: "Harus mencetak hasil 20",
      },
    ],
    prevLessonSlug: "js-conditionals",
  },
  // Python Lesson 1
  {
    id: "py-intro",
    courseSlug: "python-masterclass",
    slug: "py-intro",
    title: "1. Pengenalan Bahasa Python",
    description: "Belajar sintaksis dasar Python yang sangat bersih dan intuitif.",
    contentMarkdown: `### Hello World di Python 🐍

Dalam Python, kita menggunakan sintaks \`print()\` untuk menampilkan output.

#### Contoh:
\`\`\`python
print("Halo Pemrogram Python!")
\`\`\`

#### Tugas Kamu:
Cetak pesan **"Python Sangat Mudah!"** menggunakan \`print()\`.
`,
    language: "python",
    initialCode: `# Tulis kode Python kamu di sini\nprint("Python Sangat Mudah!")\n`,
    solutionCode: `print("Python Sangat Mudah!")`,
    xpReward: 50,
    order: 1,
    hints: ["Gunakan print(\"Python Sangat Mudah!\")"],
    testCases: [
      {
        id: "tc-py-1",
        expectedOutput: "Python Sangat Mudah!",
        description: "Mencetak 'Python Sangat Mudah!'",
      },
    ],
    nextLessonSlug: "py-variables",
  },
  // Python Lesson 2
  {
    id: "py-variables",
    courseSlug: "python-masterclass",
    slug: "py-variables",
    title: "2. Variabel & Tipe Data Python",
    description: "Di Python, kamu tidak perlu menentukan tipe data secara eksplisit.",
    contentMarkdown: `### Variabel Python 💡

Contoh:
\`\`\`python
nama = "Prayoga"
xp = 100
print(nama)
\`\`\`

#### Tugas Kamu:
Buat variabel \`kota\` berisikan **"Jakarta"** dan cetak dengan \`print(kota)\`.
`,
    language: "python",
    initialCode: `kota = "Jakarta"\nprint(kota)\n`,
    solutionCode: `kota = "Jakarta"\nprint(kota)`,
    xpReward: 50,
    order: 2,
    hints: ["print(kota)"],
    testCases: [
      {
        id: "tc-py-2",
        expectedOutput: "Jakarta",
        description: "Mencetak 'Jakarta'",
      },
    ],
    prevLessonSlug: "py-intro",
    nextLessonSlug: "py-loops",
  },
  // Python Lesson 3
  {
    id: "py-loops",
    courseSlug: "python-masterclass",
    slug: "py-loops",
    title: "3. Perulangan (For Loops) Python",
    description: "Jalankan instruksi berulang kali menggunakan `range()`.",
    contentMarkdown: `### For Loop Python 🔄

\`\`\`python
for i in range(3):
    print("Prayoga Rocks!")
\`\`\`

#### Tugas Kamu:
Cetak teks **"Belajar Python"** sebanyak perulangan loop sederhana.
`,
    language: "python",
    initialCode: `for i in range(1):\n    print("Belajar Python")\n`,
    solutionCode: `for i in range(1):\n    print("Belajar Python")`,
    xpReward: 50,
    order: 3,
    hints: ["Gunakan print('Belajar Python') dalam loop"],
    testCases: [
      {
        id: "tc-py-3",
        expectedOutput: "Belajar Python",
        description: "Mencetak 'Belajar Python'",
      },
    ],
    prevLessonSlug: "py-variables",
  },
  // HTML Lesson 1
  {
    id: "html-intro",
    courseSlug: "web-development-html-css",
    slug: "html-intro",
    title: "1. Struktur Dasar Tag HTML",
    description: "HTML adalah fondasi dari seluruh halaman di World Wide Web.",
    contentMarkdown: `### Tag Heading HTML 🌐

HTML menggunakan elemen pembuka dan penutup seperti \`<h1>Judul</h1>\`.

#### Tugas Kamu:
Buat tag \`<h1>\` dengan isi teks **"Aplikasi Pertama Saya"**.
`,
    language: "html",
    initialCode: `<h1>Aplikasi Pertama Saya</h1>`,
    solutionCode: `<h1>Aplikasi Pertama Saya</h1>`,
    xpReward: 50,
    order: 1,
    hints: ["Gunakan tag <h1>Aplikasi Pertama Saya</h1>"],
    testCases: [
      {
        id: "tc-html-1",
        expectedOutput: "Aplikasi Pertama Saya",
        description: "Menampilkan heading HTML",
      },
    ],
    nextLessonSlug: "html-buttons",
  },
  // HTML Lesson 2
  {
    id: "html-buttons",
    courseSlug: "web-development-html-css",
    slug: "html-buttons",
    title: "2. Membuat Tombol Interaktif dengan HTML",
    description: "Tambahkan elemen interaktif seperti tombol `<button>` pada web kamu.",
    contentMarkdown: `### Tombol HTML 🔘

Gunakan elemen \`<button>Klik Saya</button>\`.

#### Tugas Kamu:
Buat tombol HTML dengan teks **"Mulai Belajar"**.
`,
    language: "html",
    initialCode: `<button>Mulai Belajar</button>`,
    solutionCode: `<button>Mulai Belajar</button>`,
    xpReward: 50,
    order: 2,
    hints: ["<button>Mulai Belajar</button>"],
    testCases: [
      {
        id: "tc-html-2",
        expectedOutput: "Mulai Belajar",
        description: "Menampilkan tombol HTML dengan isi Mulai Belajar",
      },
    ],
    prevLessonSlug: "html-intro",
  },
];

export const SEED_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    uid: "user-top-1",
    displayName: "Alex Rivera",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=Alex",
    xp: 1450,
    streak: 18,
    level: 12,
  },
  {
    rank: 2,
    uid: "user-top-2",
    displayName: "Siti Rahma",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=Siti",
    xp: 1200,
    streak: 14,
    level: 10,
  },
  {
    rank: 3,
    uid: "user-top-3",
    displayName: "Prayoga Tech",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=Prayoga",
    xp: 980,
    streak: 9,
    level: 8,
  },
  {
    rank: 4,
    uid: "demo-user-123",
    displayName: "Pro Learner (Anda)",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=ProLearner",
    xp: 450,
    streak: 5,
    level: 4,
  },
  {
    rank: 5,
    uid: "user-top-5",
    displayName: "Daniel Kim",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=Daniel",
    xp: 350,
    streak: 3,
    level: 3,
  },
];
