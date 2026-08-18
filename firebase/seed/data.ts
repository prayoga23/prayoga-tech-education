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
    description: "Panduan lengkap belajar bahasa Python dari nol berdasarkan kurikulum terstruktur SantriKoding. Cocok untuk logika dasar, OOP, penanganan file, dan pengembangan aplikasi.",
    shortDescription: "Bahasa pemrograman paling simpel, powerful, dan disukai oleh pemula maupun profesional.",
    icon: "Terminal",
    color: "from-blue-500/20 to-cyan-500/10",
    level: "beginner",
    language: "python",
    totalLessons: 19,
    totalXp: 950,
    estimatedHours: 8,
    isPopular: true,
    modules: [
      {
        id: "mod-py-1",
        title: "Modul 1: Fondasi & Sintaksis Dasar Python",
        description: "Pengenalan, struktur program, tipe data, variabel, konstanta, dan operator aritmatika.",
        order: 1,
        lessonSlugs: ["py-intro", "py-structure", "py-data-types", "py-variables", "py-constants", "py-operators"],
      },
      {
        id: "mod-py-2",
        title: "Modul 2: Logika Kontrol & Struktur Data",
        description: "Percabangan, perulangan, fungsi, list, tuple, set, dan dictionary.",
        order: 2,
        lessonSlugs: ["py-control-flow", "py-functions", "py-list-tuple-set", "py-dictionary"],
      },
      {
        id: "mod-py-3",
        title: "Modul 3: Pemrograman Berorientasi Objek (OOP)",
        description: "Class & Object, Enkapsulasi, Pewarisan, Polimorfisme, dan Abstraksi.",
        order: 3,
        lessonSlugs: ["py-class-object", "py-encapsulation", "py-inheritance", "py-polymorphism", "py-abstraction"],
      },
      {
        id: "mod-py-4",
        title: "Modul 4: Fitur Lanjutan & Pengolahan Data",
        description: "Exception handling, read & write file, penggunaan modul, dan paket.",
        order: 4,
        lessonSlugs: ["py-exception-handling", "py-file-handling", "py-modules", "py-packages"],
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
        id: "tc-1-1",
        expectedOutput: "Hello Prayoga!",
        description: "Test 1: Mencetak 'Hello Prayoga!' ke konsol",
      },
      {
        id: "tc-1-2",
        expectedOutput: "Hello Prayoga!",
        description: "Test 2: Verifikasi penggunaan console.log()",
      },
      {
        id: "tc-1-3",
        expectedOutput: "Hello Prayoga!",
        description: "Test 3: Format string dan huruf kapital",
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
        id: "tc-2-1",
        expectedOutput: "JavaScript",
        description: "Test 1: Output menampilkan 'JavaScript'",
      },
      {
        id: "tc-2-2",
        expectedOutput: "JavaScript",
        description: "Test 2: Deklarasi variabel bahasa",
      },
      {
        id: "tc-2-3",
        expectedOutput: "JavaScript",
        description: "Test 3: Nilai variabel bertipe string",
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
        id: "tc-3-1",
        expectedOutput: "56",
        description: "Test 1: Hasil perkalian 7 * 8 = 56",
      },
      {
        id: "tc-3-2",
        expectedOutput: "56",
        description: "Test 2: Operasi perkalian angka",
      },
      {
        id: "tc-3-3",
        expectedOutput: "56",
        description: "Test 3: Pencetakan variabel hasilPerkalian",
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
        id: "tc-4-1",
        expectedOutput: "Kerja Bagus!",
        description: "Test 1: Mencetak 'Kerja Bagus!' saat skor >= 80",
      },
      {
        id: "tc-4-2",
        expectedOutput: "Kerja Bagus!",
        description: "Test 2: Evaluasi kondisi if (skor >= 80)",
      },
      {
        id: "tc-4-3",
        expectedOutput: "Kerja Bagus!",
        description: "Test 3: Percabangan logika konsisten",
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
        id: "tc-5-1",
        expectedOutput: "20",
        description: "Test 1: Memanggil fungsi tambah(12, 8)",
      },
      {
        id: "tc-5-2",
        expectedOutput: "20",
        description: "Test 2: Fungsi mengembalikan nilai 20",
      },
      {
        id: "tc-5-3",
        expectedOutput: "20",
        description: "Test 3: Pencetakan return value fungsi",
      },
    ],
    prevLessonSlug: "js-conditionals",
  },
  // Python Lesson 1 (#1 Pengenalan & Instalasi Python)
  {
    id: "py-intro",
    courseSlug: "python-masterclass",
    slug: "py-intro",
    title: "1. Pengenalan & Instalasi Python",
    description: "Belajar sintaksis dasar Python dan mencetak teks pertama kamu.",
    contentMarkdown: `### Pengenalan Python 🐍

Python adalah bahasa pemrograman tingkat tinggi yang sangat populer karena sintaksnya yang singkat, bersih, dan mudah dipahami.

#### Perintah \`print()\`:
Digunakan untuk menampilkan teks atau hasil perhitungan ke layar konsol.

\`\`\`python
print("Halo SantriKoding!")
\`\`\`

#### Tugas Kamu:
Cetak pesan **"Halo SantriKoding!"** ke konsol menggunakan perintah \`print()\`.
`,
    language: "python",
    initialCode: `# Tulis kode Python kamu di bawah ini\nprint("Halo SantriKoding!")\n`,
    solutionCode: `print("Halo SantriKoding!")`,
    xpReward: 50,
    order: 1,
    hints: ['Gunakan print("Halo SantriKoding!")'],
    testCases: [
      {
        id: "tc-py-1-1",
        expectedOutput: "Halo SantriKoding!",
        description: "Test 1: Output mencetak 'Halo SantriKoding!'",
      },
      {
        id: "tc-py-1-2",
        expectedOutput: "Halo SantriKoding!",
        description: "Test 2: Verifikasi fungsi print()",
      },
      {
        id: "tc-py-1-3",
        expectedOutput: "Halo SantriKoding!",
        description: "Test 3: Karakter kapital tepat",
      },
    ],
    nextLessonSlug: "py-structure",
  },
  // Python Lesson 2 (#2 Struktur Dasar Program Python)
  {
    id: "py-structure",
    courseSlug: "python-masterclass",
    slug: "py-structure",
    title: "2. Struktur Dasar Program Python",
    description: "Memahami komentar (#), perintah multi-baris, dan indentasi di Python.",
    contentMarkdown: `### Struktur Kode Python 📑

Di Python:
1. Komentar diawali dengan simbol \`#\`. Komentar tidak dieksekusi oleh program.
2. Setiap pernyataan ditulis per baris tanpa titik koma (\`;\`).

#### Contoh:
\`\`\`python
# Ini adalah komentar
print("Baris 1")
print("Baris 2")
\`\`\`

#### Tugas Kamu:
Buat komentar bertuliskan **"# Kode pertama"** lalu cetak **"Baris Pertama"** dan **"Baris Kedua"** pada baris yang berbeda.
`,
    language: "python",
    initialCode: `# Kode pertama\nprint("Baris Pertama")\nprint("Baris Kedua")\n`,
    solutionCode: `# Kode pertama\nprint("Baris Pertama")\nprint("Baris Kedua")`,
    xpReward: 50,
    order: 2,
    hints: ['Gunakan print("Baris Pertama") lalu print("Baris Kedua")'],
    testCases: [
      {
        id: "tc-py-2-1",
        expectedOutput: "Baris Pertama\nBaris Kedua",
        description: "Test 1: Cetak dua baris teks terpisah",
      },
      {
        id: "tc-py-2-2",
        expectedOutput: "Baris Pertama\nBaris Kedua",
        description: "Test 2: Evaluasi komentar dan baris baru",
      },
      {
        id: "tc-py-2-3",
        expectedOutput: "Baris Pertama\nBaris Kedua",
        description: "Test 3: Format perintah konsisten",
      },
    ],
    prevLessonSlug: "py-intro",
    nextLessonSlug: "py-data-types",
  },
  // Python Lesson 3 (#3 Tipe Data Dasar)
  {
    id: "py-data-types",
    courseSlug: "python-masterclass",
    slug: "py-data-types",
    title: "3. Tipe Data Dasar Python",
    description: "Mengenal tipe data Integer, Float, String, Boolean, dan fungsi type().",
    contentMarkdown: `### Tipe Data Utama 🔢

Python memiliki tipe data bawaan:
- **int**: Angka bulat (contoh: \`100\`)
- **float**: Angka desimal (contoh: \`3.14\`)
- **str**: Teks/String (contoh: \`"Hello"\`)
- **bool**: Nilai kebenaran (\`True\` / \`False\`)

Fungsi \`type()\` digunakan untuk mengecek tipe data.

#### Tugas Kamu:
Buat variabel \`x = 100\` lalu cetak tipe datanya menggunakan \`print(type(x))\`.
`,
    language: "python",
    initialCode: `x = 100\nprint(type(x))\n`,
    solutionCode: `x = 100\nprint(type(x))`,
    xpReward: 50,
    order: 3,
    hints: ["Gunakan x = 100 lalu print(type(x))"],
    testCases: [
      {
        id: "tc-py-3-1",
        expectedOutput: "int",
        description: "Test 1: Tipe data angka 100 adalah int",
      },
      {
        id: "tc-py-3-2",
        expectedOutput: "int",
        description: "Test 2: Pengecekan fungsi type()",
      },
      {
        id: "tc-py-3-3",
        expectedOutput: "int",
        description: "Test 3: Evaluasi tipe data integer",
      },
    ],
    prevLessonSlug: "py-structure",
    nextLessonSlug: "py-variables",
  },
  // Python Lesson 4 (#4 Variable)
  {
    id: "py-variables",
    courseSlug: "python-masterclass",
    slug: "py-variables",
    title: "4. Variabel dalam Python",
    description: "Deklarasi variabel dan penggabungan teks dengan f-string.",
    contentMarkdown: `### Variabel & F-String 💡

Variabel menyimpan nilai untuk dipakai kembali. Kita bisa menyisipkan variabel ke dalam string menggunakan **f-string**:

\`\`\`python
nama = "Budi"
umur = 20
print(f"{nama} berumur {umur} tahun")
\`\`\`

#### Tugas Kamu:
Deklarasikan \`nama = "SantriKoding"\` dan \`umur = 20\`, lalu cetak **"SantriKoding berumur 20 tahun"** menggunakan f-string.
`,
    language: "python",
    initialCode: `nama = "SantriKoding"\numur = 20\nprint(f"{nama} berumur {umur} tahun")\n`,
    solutionCode: `nama = "SantriKoding"\numur = 20\nprint(f"{nama} berumur {umur} tahun")`,
    xpReward: 50,
    order: 4,
    hints: ['print(f"{nama} berumur {umur} tahun")'],
    testCases: [
      {
        id: "tc-py-4-1",
        expectedOutput: "SantriKoding berumur 20 tahun",
        description: "Test 1: Format f-string variabel nama dan umur",
      },
      {
        id: "tc-py-4-2",
        expectedOutput: "SantriKoding berumur 20 tahun",
        description: "Test 2: Pencetakan string terinterpolasi",
      },
      {
        id: "tc-py-4-3",
        expectedOutput: "SantriKoding berumur 20 tahun",
        description: "Test 3: Evaluasi variabel string & int",
      },
    ],
    prevLessonSlug: "py-data-types",
    nextLessonSlug: "py-constants",
  },
  // Python Lesson 5 (#5 Konstanta)
  {
    id: "py-constants",
    courseSlug: "python-masterclass",
    slug: "py-constants",
    title: "5. Konstanta dalam Python",
    description: "Konvensi penulisan variabel nilai tetap (UPPERCASE) di Python.",
    contentMarkdown: `### Konstanta di Python 📌

Secara konvensi, variabel yang nilainya tidak boleh diubah ditulis menggunakan **huruf kapital (UPPERCASE)**.

#### Contoh:
\`\`\`python
PI = 3.14
GRAVITASI = 9.8
\`\`\`

#### Tugas Kamu:
Deklarasikan \`PI = 3.14\` dan \`r = 7\`. Hitung keliling lingkaran dengan rumus \`2 * PI * r\` (simpan dalam variabel \`keliling\`), lalu cetak hasilnya.
`,
    language: "python",
    initialCode: `PI = 3.14\nr = 7\nkeliling = 2 * PI * r\nprint(keliling)\n`,
    solutionCode: `PI = 3.14\nr = 7\nkeliling = 2 * PI * r\nprint(keliling)`,
    xpReward: 50,
    order: 5,
    hints: ["2 * 3.14 * 7 = 43.96"],
    testCases: [
      {
        id: "tc-py-5-1",
        expectedOutput: "43.96",
        description: "Test 1: Hasil keliling lingkaran 2 * PI * r",
      },
      {
        id: "tc-py-5-2",
        expectedOutput: "43.96",
        description: "Test 2: Penggunaan konstanta PI",
      },
      {
        id: "tc-py-5-3",
        expectedOutput: "43.96",
        description: "Test 3: Operasi matematika dengan float",
      },
    ],
    prevLessonSlug: "py-variables",
    nextLessonSlug: "py-operators",
  },
  // Python Lesson 6 (#6 Operator)
  {
    id: "py-operators",
    courseSlug: "python-masterclass",
    slug: "py-operators",
    title: "6. Operator Aritmatika & Perbandingan",
    description: "Menggunakan operator sisa bagi (%), pembagian bulat (//), dan pemangkatan (**).",
    contentMarkdown: `### Operator Khusus Python ➕➖✖️

- **\`%\` (Modulus)**: Sisa hasil bagi
- **\`//\` (Floor Division)**: Pembagian dibulatkan ke bawah
- **\`**\` (Eksponen)**: Pangkat

#### Contoh:
\`\`\`python
print(10 % 3)  # Output: 1
print(2 ** 3)  # Output: 8
\`\`\`

#### Tugas Kamu:
Diberikan \`a = 17\` dan \`b = 5\`. Hitung sisa hasil bagi (\`a % b\`) simpan ke variabel \`sisa\`, lalu cetak variabel tersebut.
`,
    language: "python",
    initialCode: `a = 17\nb = 5\nsisa = a % b\nprint(sisa)\n`,
    solutionCode: `a = 17\nb = 5\nsisa = a % b\nprint(sisa)`,
    xpReward: 50,
    order: 6,
    hints: ["17 % 5 adalah 2"],
    testCases: [
      {
        id: "tc-py-6-1",
        expectedOutput: "2",
        description: "Test 1: Sisa bagi 17 % 5 = 2",
      },
      {
        id: "tc-py-6-2",
        expectedOutput: "2",
        description: "Test 2: Evaluasi operator modulus %",
      },
      {
        id: "tc-py-6-3",
        expectedOutput: "2",
        description: "Test 3: Nilai variabel sisa",
      },
    ],
    prevLessonSlug: "py-constants",
    nextLessonSlug: "py-control-flow",
  },
  // Python Lesson 7 (#7 Control Flow)
  {
    id: "py-control-flow",
    courseSlug: "python-masterclass",
    slug: "py-control-flow",
    title: "7. Percabangan & Perulangan (Control Flow)",
    description: "Membuat keputusan dengan if-elif-else dan perulangan.",
    contentMarkdown: `### Percabangan (If - Else) 🤔

Pengondisian di Python menggunakan indentasi 4 spasi dan tanda titik dua (\`:\`).

\`\`\`python
nilai = 85
if nilai >= 80:
    print("Sangat Baik")
else:
    print("Cukup")
\`\`\`

#### Tugas Kamu:
Buat percabangan: jika \`nilai = 85\` dan nilai \`>= 80\`, cetak **"Sangat Baik"**. Jika kurang, cetak **"Cukup"**.
`,
    language: "python",
    initialCode: `nilai = 85\nif nilai >= 80:\n    print("Sangat Baik")\nelse:\n    print("Cukup")\n`,
    solutionCode: `nilai = 85\nif nilai >= 80:\n    print("Sangat Baik")\nelse:\n    print("Cukup")`,
    xpReward: 50,
    order: 7,
    hints: ['Pastikan teks yang dicetak tepat "Sangat Baik"'],
    testCases: [
      {
        id: "tc-py-7-1",
        expectedOutput: "Sangat Baik",
        description: "Test 1: Mencetak 'Sangat Baik' saat nilai 85 >= 80",
      },
      {
        id: "tc-py-7-2",
        expectedOutput: "Sangat Baik",
        description: "Test 2: Percabangan kondisi logis",
      },
      {
        id: "tc-py-7-3",
        expectedOutput: "Sangat Baik",
        description: "Test 3: Evaluasi percabangan if-else",
      },
    ],
    prevLessonSlug: "py-operators",
    nextLessonSlug: "py-functions",
  },
  // Python Lesson 8 (#8 Function)
  {
    id: "py-functions",
    courseSlug: "python-masterclass",
    slug: "py-functions",
    title: "8. Fungsi (Function) dalam Python",
    description: "Membuat blok kode yang dapat dipanggil kembali dengan kata kunci def.",
    contentMarkdown: `### Mendefinisikan Fungsi (\`def\`) ⚡

Fungsi dibuat menggunakan kata kunci \`def\` diikuti nama fungsi, parameter, dan \`return\`.

\`\`\`python
def sapa(nama):
    return f"Halo {nama}"

print(sapa("Budi"))
\`\`\`

#### Tugas Kamu:
Buat fungsi \`hitung_luas_persegi(sisi)\` yang mengembalikan hasil \`sisi * sisi\`. Panggil fungsi tersebut dengan nilai \`5\` dan cetak hasilnya.
`,
    language: "python",
    initialCode: `def hitung_luas_persegi(sisi):\n    return sisi * sisi\n\nprint(hitung_luas_persegi(5))\n`,
    solutionCode: `def hitung_luas_persegi(sisi):\n    return sisi * sisi\n\nprint(hitung_luas_persegi(5))`,
    xpReward: 50,
    order: 8,
    hints: ["hitung_luas_persegi(5) menghasilkan 25"],
    testCases: [
      {
        id: "tc-py-8-1",
        expectedOutput: "25",
        description: "Test 1: Memanggil hitung_luas_persegi(5) menghasilkan 25",
      },
      {
        id: "tc-py-8-2",
        expectedOutput: "25",
        description: "Test 2: Return value fungsi perkalian sisi",
      },
      {
        id: "tc-py-8-3",
        expectedOutput: "25",
        description: "Test 3: Definisi fungsi def valid",
      },
    ],
    prevLessonSlug: "py-control-flow",
    nextLessonSlug: "py-list-tuple-set",
  },
  // Python Lesson 9 (#9 List, Tuple, dan Set)
  {
    id: "py-list-tuple-set",
    courseSlug: "python-masterclass",
    slug: "py-list-tuple-set",
    title: "9. List, Tuple, dan Set",
    description: "Mengelola koleksi data majemuk dengan List, Tuple, dan Set di Python.",
    contentMarkdown: `### Struktur Data Koleksi 📦

- **List** \`[1, 2, 3]\`: Dapat diubah (mutable), memiliki urutan.
- **Tuple** \`(1, 2, 3)\`: Tidak dapat diubah (immutable).
- **Set** \`{1, 2, 3}\`: Koleksi unik tanpa duplikat.

Untuk menambahkan item ke List, gunakan metode \`.append()\`. Fungsi \`len()\` menghitung jumlah elemen.

#### Tugas Kamu:
Buat list \`buah = ["Apel", "Pisang"]\`. Tambahkan **"Jeruk"** menggunakan \`buah.append("Jeruk")\`, lalu cetak jumlah elemen list dengan \`print(len(buah))\`.
`,
    language: "python",
    initialCode: `buah = ["Apel", "Pisang"]\nbuah.append("Jeruk")\nprint(len(buah))\n`,
    solutionCode: `buah = ["Apel", "Pisang"]\nbuah.append("Jeruk")\nprint(len(buah))`,
    xpReward: 50,
    order: 9,
    hints: ["Setel list 2 elemen -> append -> len hasilnya 3"],
    testCases: [
      {
        id: "tc-py-9-1",
        expectedOutput: "3",
        description: "Test 1: Jumlah elemen list buah setelah append adalah 3",
      },
      {
        id: "tc-py-9-2",
        expectedOutput: "3",
        description: "Test 2: Penggunaan fungsi len() pada list",
      },
      {
        id: "tc-py-9-3",
        expectedOutput: "3",
        description: "Test 3: Manipulasi list dengan append",
      },
    ],
    prevLessonSlug: "py-functions",
    nextLessonSlug: "py-dictionary",
  },
  // Python Lesson 10 (#10 Dictionary)
  {
    id: "py-dictionary",
    courseSlug: "python-masterclass",
    slug: "py-dictionary",
    title: "10. Dictionary (Key-Value Pair)",
    description: "Menyimpan dan mengelompokkan data berdasarkan pasangan kunci dan nilai.",
    contentMarkdown: `### Dictionary di Python 📖

Dictionary menyimpan data dalam format \`{ key: value }\`.

\`\`\`python
siswa = {
    "nama": "Prayoga",
    "kelas": "Python"
}
print(siswa["nama"])  # Output: Prayoga
\`\`\`

#### Tugas Kamu:
Buat dictionary \`santri = {"nama": "Ahmad", "kelas": "Python"}\`. Cetak nilai dari kunci \`"nama"\` menggunakan \`print(santri["nama"])\`.
`,
    language: "python",
    initialCode: `santri = {"nama": "Ahmad", "kelas": "Python"}\nprint(santri["nama"])\n`,
    solutionCode: `santri = {"nama": "Ahmad", "kelas": "Python"}\nprint(santri["nama"])`,
    xpReward: 50,
    order: 10,
    hints: ['Akses nilai dengan santri["nama"]'],
    testCases: [
      {
        id: "tc-py-10-1",
        expectedOutput: "Ahmad",
        description: "Test 1: Mengakses value kunci 'nama' menghasilkan 'Ahmad'",
      },
      {
        id: "tc-py-10-2",
        expectedOutput: "Ahmad",
        description: "Test 2: Struktur dictionary key-value valid",
      },
      {
        id: "tc-py-10-3",
        expectedOutput: "Ahmad",
        description: "Test 3: Pengambilan nilai dari dict",
      },
    ],
    prevLessonSlug: "py-list-tuple-set",
    nextLessonSlug: "py-class-object",
  },
  // Python Lesson 11 (#11 Class & Object (OOP Dasar))
  {
    id: "py-class-object",
    courseSlug: "python-masterclass",
    slug: "py-class-object",
    title: "11. Class & Object (OOP Dasar)",
    description: "Pemrograman Berorientasi Objek: Membuat cetak biru Class dan instansiasi Object.",
    contentMarkdown: `### Class dan Object 🏗️

- **Class**: Cetak biru (blueprint) untuk membuat objek.
- **\`__init__\`**: Metode konstruktor yang dipanggil saat objek dibuat.
- **\`self\`**: Merujuk pada instance objek itu sendiri.

\`\`\`python
class Santri:
    def __init__(self, nama):
        self.nama = nama
    def sapa(self):
        print(f"Halo, saya {self.nama}")

s1 = Santri("Umar")
s1.sapa()
\`\`\`

#### Tugas Kamu:
Buat class \`Santri\` dengan metode \`__init__(self, nama)\` dan metode \`sapa(self)\` yang mencetak **"Halo, saya Umar"**. Instansiasikan objek dengan nama **"Umar"** lalu panggil metode \`sapa()\`.
`,
    language: "python",
    initialCode: `class Santri:\n    def __init__(self, nama):\n        self.nama = nama\n    def sapa(self):\n        print(f"Halo, saya {self.nama}")\n\ns1 = Santri("Umar")\ns1.sapa()\n`,
    solutionCode: `class Santri:\n    def __init__(self, nama):\n        self.nama = nama\n    def sapa(self):\n        print(f"Halo, saya {self.nama}")\n\ns1 = Santri("Umar")\ns1.sapa()`,
    xpReward: 50,
    order: 11,
    hints: ['Panggil s1.sapa() untuk mencetak "Halo, saya Umar"'],
    testCases: [
      {
        id: "tc-py-11-1",
        expectedOutput: "Halo, saya Umar",
        description: "Test 1: Instansiasi objek Santri('Umar') dan eksekusi sapa()",
      },
      {
        id: "tc-py-11-2",
        expectedOutput: "Halo, saya Umar",
        description: "Test 2: Metode __init__ dan atribut nama",
      },
      {
        id: "tc-py-11-3",
        expectedOutput: "Halo, saya Umar",
        description: "Test 3: Evaluasi metode instance class",
      },
    ],
    prevLessonSlug: "py-dictionary",
    nextLessonSlug: "py-encapsulation",
  },
  // Python Lesson 12 (#12 Encapsulation)
  {
    id: "py-encapsulation",
    courseSlug: "python-masterclass",
    slug: "py-encapsulation",
    title: "12. Enkapsulasi (Encapsulation)",
    description: "Melindungi atribut internal objek menggunakan konsep enkapsulasi.",
    contentMarkdown: `### Enkapsulasi (Encapsulation) 🛡️

Enkapsulasi menyembunyikan detail internal objek dan membatasi akses langsung ke atribut data menggunakan getter/setter.

\`\`\`python
class Rekening:
    def __init__(self, saldo):
        self._saldo = saldo # Atribut terproteksi

    def get_saldo(self):
        return self._saldo
\`\`\`

#### Tugas Kamu:
Buat class \`Rekening\` dengan konstruktor pengisi \`_saldo\`, serta method \`get_saldo(self)\` yang mengembalikan saldo. Buat objek dengan saldo \`500000\` lalu cetak hasilnya.
`,
    language: "python",
    initialCode: `class Rekening:\n    def __init__(self, saldo):\n        self._saldo = saldo\n    def get_saldo(self):\n        return self._saldo\n\nr = Rekening(500000)\nprint(r.get_saldo())\n`,
    solutionCode: `class Rekening:\n    def __init__(self, saldo):\n        self._saldo = saldo\n    def get_saldo(self):\n        return self._saldo\n\nr = Rekening(500000)\nprint(r.get_saldo())`,
    xpReward: 50,
    order: 12,
    hints: ["r.get_saldo() mengembalikan 500000"],
    testCases: [
      {
        id: "tc-py-12-1",
        expectedOutput: "500000",
        description: "Test 1: Method get_saldo() mengembalikan angka 500000",
      },
      {
        id: "tc-py-12-2",
        expectedOutput: "500000",
        description: "Test 2: Atribut terproteksi _saldo terakses melalui getter",
      },
      {
        id: "tc-py-12-3",
        expectedOutput: "500000",
        description: "Test 3: Penerapan prinsip enkapsulasi OOP",
      },
    ],
    prevLessonSlug: "py-class-object",
    nextLessonSlug: "py-inheritance",
  },
  // Python Lesson 13 (#13 Inheritance)
  {
    id: "py-inheritance",
    courseSlug: "python-masterclass",
    slug: "py-inheritance",
    title: "13. Pewarisan (Inheritance)",
    description: "Mewarisi sifat dan metode dari Kelas Induk (Parent Class) ke Subclass.",
    contentMarkdown: `### Pewarisan (Inheritance) 🧬

Subclass mewarisi seluruh fungsi dan atribut dari kelas induk (Parent Class).

\`\`\`python
class Karyawan:
    def __init__(self, nama):
        self.nama = nama

class Developer(Karyawan):
    def kode(self):
        print(f"{self.nama} sedang menulis kode Python")
\`\`\`

#### Tugas Kamu:
Buat class \`Developer\` yang mewarisi class \`Karyawan\`. Buat instance \`Developer("Budi")\` lalu panggil method \`kode()\`.
`,
    language: "python",
    initialCode: `class Karyawan:\n    def __init__(self, nama):\n        self.nama = nama\n\nclass Developer(Karyawan):\n    def kode(self):\n        print(f"{self.nama} sedang menulis kode Python")\n\nd = Developer("Budi")\nd.kode()\n`,
    solutionCode: `class Karyawan:\n    def __init__(self, nama):\n        self.nama = nama\n\nclass Developer(Karyawan):\n    def kode(self):\n        print(f"{self.nama} sedang menulis kode Python")\n\nd = Developer("Budi")\nd.kode()`,
    xpReward: 50,
    order: 13,
    hints: ['Subclass Developer(Karyawan) mewarisi atribut nama'],
    testCases: [
      {
        id: "tc-py-13-1",
        expectedOutput: "Budi sedang menulis kode Python",
        description: "Test 1: Developer mewarisi atribut nama dari Karyawan",
      },
      {
        id: "tc-py-13-2",
        expectedOutput: "Budi sedang menulis kode Python",
        description: "Test 2: Eksekusi method kode() subclass",
      },
      {
        id: "tc-py-13-3",
        expectedOutput: "Budi sedang menulis kode Python",
        description: "Test 3: Evaluasi pewarisan class OOP",
      },
    ],
    prevLessonSlug: "py-encapsulation",
    nextLessonSlug: "py-polymorphism",
  },
  // Python Lesson 14 (#14 Polymorphism)
  {
    id: "py-polymorphism",
    courseSlug: "python-masterclass",
    slug: "py-polymorphism",
    title: "14. Polimorfisme (Polymorphism)",
    description: "Mengimplementasikan perilaku berbeda untuk metode bernama sama.",
    contentMarkdown: `### Polimorfisme (Polymorphism) 🎭

Polimorfisme memungkinkan subclass menyediakan implementasi spesifik (override) dari metode yang sudah didefinisikan pada parent class.

\`\`\`python
class Bentuk:
    def luas(self):
        return 0

class Persegi(Bentuk):
    def __init__(self, s):
        self.s = s
    def luas(self):
        return self.s * self.s
\`\`\`

#### Tugas Kamu:
Buat class \`Persegi(Bentuk)\` dengan sisi \`4\`. Panggil \`luas()\` dan cetak hasilnya.
`,
    language: "python",
    initialCode: `class Bentuk:\n    def luas(self):\n        return 0\n\nclass Persegi(Bentuk):\n    def __init__(self, s):\n        self.s = s\n    def luas(self):\n        return self.s * self.s\n\np = Persegi(4)\nprint(p.luas())\n`,
    solutionCode: `class Bentuk:\n    def luas(self):\n        return 0\n\nclass Persegi(Bentuk):\n    def __init__(self, s):\n        self.s = s\n    def luas(self):\n        return self.s * self.s\n\np = Persegi(4)\nprint(p.luas())`,
    xpReward: 50,
    order: 14,
    hints: ["4 * 4 = 16"],
    testCases: [
      {
        id: "tc-py-14-1",
        expectedOutput: "16",
        description: "Test 1: Method luas() pada Persegi(4) menghasilkan 16",
      },
      {
        id: "tc-py-14-2",
        expectedOutput: "16",
        description: "Test 2: Method overriding pada subclass",
      },
      {
        id: "tc-py-14-3",
        expectedOutput: "16",
        description: "Test 3: Evaluasi polimorfisme metode",
      },
    ],
    prevLessonSlug: "py-inheritance",
    nextLessonSlug: "py-abstraction",
  },
  // Python Lesson 15 (#15 Abstraction)
  {
    id: "py-abstraction",
    courseSlug: "python-masterclass",
    slug: "py-abstraction",
    title: "15. Abstraksi (Abstraction)",
    description: "Menyembunyikan detail kompleksitas dan berfokus pada fitur antarmuka utama.",
    contentMarkdown: `### Abstraksi (Abstraction) 🧩

Abstraksi menyembunyikan detail implementasi internal yang tidak perlu dan hanya menampilkan fungsionalitas utama kepada pengguna.

\`\`\`python
class Kendaraan:
    def bergerak(self):
        print("Kendaraan bergerak di jalan")

k = Kendaraan()
k.bergerak()
\`\`\`

#### Tugas Kamu:
Buat class \`Kendaraan\` dengan metode \`bergerak(self)\` yang mencetak **"Kendaraan bergerak di jalan"**. Instansiasikan dan panggil metode tersebut.
`,
    language: "python",
    initialCode: `class Kendaraan:\n    def bergerak(self):\n        print("Kendaraan bergerak di jalan")\n\nk = Kendaraan()\nk.bergerak()\n`,
    solutionCode: `class Kendaraan:\n    def bergerak(self):\n        print("Kendaraan bergerak di jalan")\n\nk = Kendaraan()\nk.bergerak()`,
    xpReward: 50,
    order: 15,
    hints: ['Panggil k.bergerak()'],
    testCases: [
      {
        id: "tc-py-15-1",
        expectedOutput: "Kendaraan bergerak di jalan",
        description: "Test 1: Eksekusi method bergerak() pada instance Kendaraan",
      },
      {
        id: "tc-py-15-2",
        expectedOutput: "Kendaraan bergerak di jalan",
        description: "Test 2: Format teks cetakan tepat",
      },
      {
        id: "tc-py-15-3",
        expectedOutput: "Kendaraan bergerak di jalan",
        description: "Test 3: Konsep abstraksi fungsi",
      },
    ],
    prevLessonSlug: "py-polymorphism",
    nextLessonSlug: "py-exception-handling",
  },
  // Python Lesson 16 (#16 Exception Handling)
  {
    id: "py-exception-handling",
    courseSlug: "python-masterclass",
    slug: "py-exception-handling",
    title: "16. Exception Handling (Try - Except)",
    description: "Menangani kesalahan saat runtime agar program tidak crash.",
    contentMarkdown: `### Penanganan Error (Try - Except) ⚠️

Blok \`try\` digunakan untuk menguji blok kode, sedangkan \`except\` mengeksekusi penanganan saat terjadi error.

\`\`\`python
try:
    angka = 10 / 0
except:
    print("Penanganan Error: Pembagian dengan Nol")
\`\`\`

#### Tugas Kamu:
Buat penanganan error dengan \`try-except\` untuk pembagian \`10 / 0\`. Di dalam \`except\`, cetak pesan **"Penanganan Error: Pembagian dengan Nol"**.
`,
    language: "python",
    initialCode: `try:\n    angka = 10 / 0\nexcept:\n    print("Penanganan Error: Pembagian dengan Nol")\n`,
    solutionCode: `try:\n    angka = 10 / 0\nexcept:\n    print("Penanganan Error: Pembagian dengan Nol")`,
    xpReward: 50,
    order: 16,
    hints: ['Cetak persis "Penanganan Error: Pembagian dengan Nol"'],
    testCases: [
      {
        id: "tc-py-16-1",
        expectedOutput: "Penanganan Error: Pembagian dengan Nol",
        description: "Test 1: Blok except menangkap ZeroDivisionError",
      },
      {
        id: "tc-py-16-2",
        expectedOutput: "Penanganan Error: Pembagian dengan Nol",
        description: "Test 2: Program terus berjalan tanpa terhenti crash",
      },
      {
        id: "tc-py-16-3",
        expectedOutput: "Penanganan Error: Pembagian dengan Nol",
        description: "Test 3: Evaluasi sintaksis try-except",
      },
    ],
    prevLessonSlug: "py-abstraction",
    nextLessonSlug: "py-file-handling",
  },
  // Python Lesson 17 (#17 File Handling (Read & Write File))
  {
    id: "py-file-handling",
    courseSlug: "python-masterclass",
    slug: "py-file-handling",
    title: "17. File Handling (Read & Write File)",
    description: "Membuka, menulis, dan membaca isi berkas teks dengan fungsi open().",
    contentMarkdown: `### Membaca & Menulis File 📁

Gunakan fungsi \`open(filename, mode)\`:
- Mode \`"w"\`: Menulis data baru ke file.
- Mode \`"r"\`: Membaca teks dari file.

\`\`\`python
f = open("catatan.txt", "w")
f.write("Belajar Python SantriKoding")

f = open("catatan.txt", "r")
print(f.read())
\`\`\`

#### Tugas Kamu:
Buka file \`"catatan.txt"\` dalam mode \`"w"\`, tulis teks **"Belajar Python SantriKoding"**. Kemudian buka kembali dalam mode \`"r"\` dan cetak isinya dengan \`print(f.read())\`.
`,
    language: "python",
    initialCode: `f = open("catatan.txt", "w")\nf.write("Belajar Python SantriKoding")\n\nf = open("catatan.txt", "r")\nprint(f.read())\n`,
    solutionCode: `f = open("catatan.txt", "w")\nf.write("Belajar Python SantriKoding")\n\nf = open("catatan.txt", "r")\nprint(f.read())`,
    xpReward: 50,
    order: 17,
    hints: ['Gunakan f.write("Belajar Python SantriKoding") lalu print(f.read())'],
    testCases: [
      {
        id: "tc-py-17-1",
        expectedOutput: "Belajar Python SantriKoding",
        description: "Test 1: Membaca teks yang baru ditulis dari berkas catatan.txt",
      },
      {
        id: "tc-py-17-2",
        expectedOutput: "Belajar Python SantriKoding",
        description: "Test 2: Operasi penulisan mode write 'w'",
      },
      {
        id: "tc-py-17-3",
        expectedOutput: "Belajar Python SantriKoding",
        description: "Test 3: Operasi pembacaan mode read 'r'",
      },
    ],
    prevLessonSlug: "py-exception-handling",
    nextLessonSlug: "py-modules",
  },
  // Python Lesson 18 (#18 Module)
  {
    id: "py-modules",
    courseSlug: "python-masterclass",
    slug: "py-modules",
    title: "18. Modul dalam Python",
    description: "Mengimpor dan memanfaatkan modul pustaka bawaan Python.",
    contentMarkdown: `### Modul Python ⚙️

Modul adalah file berisikan kode Python (fungsi, kelas, variabel) yang dapat diimpor menggunakan kata kunci \`import\`.

\`\`\`python
import math

hasil = math.sqrt(64)
print(hasil)  # Output: 8
\`\`\`

#### Tugas Kamu:
Impor modul \`math\`. Hitung akar kuadrat dari **64** menggunakan \`math.sqrt(64)\`, simpan dalam variabel \`hasil\`, dan cetak nilainya.
`,
    language: "python",
    initialCode: `import math\nhasil = math.sqrt(64)\nprint(hasil)\n`,
    solutionCode: `import math\nhasil = math.sqrt(64)\nprint(hasil)`,
    xpReward: 50,
    order: 18,
    hints: ["math.sqrt(64) adalah 8"],
    testCases: [
      {
        id: "tc-py-18-1",
        expectedOutput: "8",
        description: "Test 1: math.sqrt(64) menghasilkan nilai 8",
      },
      {
        id: "tc-py-18-2",
        expectedOutput: "8",
        description: "Test 2: Penggunaan modul math bawaan",
      },
      {
        id: "tc-py-18-3",
        expectedOutput: "8",
        description: "Test 3: Evaluasi fungsi matematika sqrt()",
      },
    ],
    prevLessonSlug: "py-file-handling",
    nextLessonSlug: "py-packages",
  },
  // Python Lesson 19 (#19 Package)
  {
    id: "py-packages",
    courseSlug: "python-masterclass",
    slug: "py-packages",
    title: "19. Package dalam Python",
    description: "Memahami struktur direktori paket dan pengorganisasian modul tingkat lanjut.",
    contentMarkdown: `### Package dalam Python 📦

Package adalah kumpulan dari beberapa modul Python yang diorganisir dalam sebuah direktori berkas.

#### Contoh Penggunaan:
\`\`\`python
def tambah(a, b):
    return a + b

print(f"Hasil Package Kalkulator: {tambah(10, 15)}")
\`\`\`

#### Tugas Kamu:
Buat fungsi \`tambah(a, b)\` yang mengembalikan \`a + b\`. Cetak teks **"Hasil Package Kalkulator: 25"** menggunakan f-string dengan memanggil \`tambah(10, 15)\`.
`,
    language: "python",
    initialCode: `def tambah(a, b):\n    return a + b\n\nprint(f"Hasil Package Kalkulator: {tambah(10, 15)}")\n`,
    solutionCode: `def tambah(a, b):\n    return a + b\n\nprint(f"Hasil Package Kalkulator: {tambah(10, 15)}")`,
    xpReward: 50,
    order: 19,
    hints: ['Gunakan print(f"Hasil Package Kalkulator: {tambah(10, 15)}")'],
    testCases: [
      {
        id: "tc-py-19-1",
        expectedOutput: "Hasil Package Kalkulator: 25",
        description: "Test 1: Output mencetak 'Hasil Package Kalkulator: 25'",
      },
      {
        id: "tc-py-19-2",
        expectedOutput: "Hasil Package Kalkulator: 25",
        description: "Test 2: Fungsi tambah(10, 15) di dalam package",
      },
      {
        id: "tc-py-19-3",
        expectedOutput: "Hasil Package Kalkulator: 25",
        description: "Test 3: Evaluasi akhir modul dan package Python",
      },
    ],
    prevLessonSlug: "py-modules",
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
        id: "tc-html-1-1",
        expectedOutput: "Aplikasi Pertama Saya",
        description: "Test 1: Menampilkan heading HTML",
      },
      {
        id: "tc-html-1-2",
        expectedOutput: "Aplikasi Pertama Saya",
        description: "Test 2: Tag <h1> pembuka dan penutup",
      },
      {
        id: "tc-html-1-3",
        expectedOutput: "Aplikasi Pertama Saya",
        description: "Test 3: Teks heading valid",
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
        id: "tc-html-2-1",
        expectedOutput: "Mulai Belajar",
        description: "Test 1: Tombol HTML dengan isi 'Mulai Belajar'",
      },
      {
        id: "tc-html-2-2",
        expectedOutput: "Mulai Belajar",
        description: "Test 2: Tag <button> valid",
      },
      {
        id: "tc-html-2-3",
        expectedOutput: "Mulai Belajar",
        description: "Test 3: Teks tombol interaktif",
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
