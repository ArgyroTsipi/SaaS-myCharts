

//It allows the user from the frontend to download
//the excel file that he requested
const templatesDownload = (req, res) => {
        const templateType = req.params.templateType;
        const isExample = req.params.isExample;
        let filePath = "";
        //isExample checks if the template that was requested is
        //an example_template or an original template
        if (isExample === "false")
            filePath = './src/templatesStorage/templates_original/' + templateType + 'Template.xlsx';
        else
            filePath = './src/templatesStorage/templates_examples/' + templateType + 'Example.xlsx';

         res.download(filePath, (err) => {
            if (err) {
                // Handle error, e.g., file not found
                console.log(err);
                res.status(404).send('File not found');
            }
        })

}

module.exports = templatesDownload;