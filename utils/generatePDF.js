const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.generatePDF = (content, outputPath) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();

    const fullOutputPath = path.join(__dirname, '..', outputPath);
    const writeStream = fs.createWriteStream(fullOutputPath);

    doc.pipe(writeStream);

    doc.fontSize(20).text('Laudo Odontológico', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(content);

    doc.end();

    writeStream.on('finish', () => {
      resolve(fullOutputPath);
    });

    writeStream.on('error', (err) => {
      reject(err);
    });
  });
};
