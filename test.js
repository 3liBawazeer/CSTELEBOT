const fs = require("fs");
const path = require('path');
const { localDB } = require("./subjects");
const folderPath = 'computer scince/level_2/term_1/DS/0';
// "C:\Users\ali bawazeer\Desktop\teleBot\computer scince\level_2\term_1\DS\0" // تعيين مسار المجلد هنا

console.log(localDB["level" + 1 ]["term" + 1]);

// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error('حدث خطأ في قراءة محتوى المجلد:', err);
//     return;
//   }


//   files.forEach(file => {
//     const filePath = path.join(folderPath, file);

//     // هنا يمكنك تنفيذ العمليات التي ترغب في تطبيقها على كل ملف PDF
//     console.log('اسم الملف:', file);
//     console.log('مسار الملف:', filePath);
//     console.log('---');
//   });
// });