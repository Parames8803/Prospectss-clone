const PDFDocument = require('pdfkit')
const { Parser } = require('json2csv')
const fs = require('fs')


const json2CSV = (data, filename) => {

    try {

        const jsonData = JSON.parse(JSON.stringify(data));
        const parser = new Parser();
        const csvData = parser.parse(jsonData)
        fs.writeFile(
            `P:/Projects/Practice/rolemvc/server/public/files/${filename}.csv`, csvData,
            (error, res) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('The file is converted to CSV')
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}


const json2PDF = (data, filename) => {
    try {

        const document = new PDFDocument();
        document.pipe(
            fs.createWriteStream(`P:/Projects/Practice/rolemvc/server/files/${filename}.pdf`)
        );
        data.forEach((row) => {
            document.text(JSON.stringify(row))
        });
        document.end();
        console.log(' PDF has been created')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    json2PDF,
    json2CSV
}


