import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

const PdfViewer = () => {
    useEffect(() => {
        // Create a jsPDF instance
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.text('Hello, this is a PDF generated using jsPDF in React!', 10, 10);

        // Output the PDF as a data URI
        const pdfDataUri = pdf.output('datauri');

        // Create an iframe to display the PDF
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '800px'; // Set your desired height
        iframe.src = pdfDataUri;

        // Append the iframe to the component
        document.getElementById('pdfViewer').appendChild(iframe);
    }, []);

    return (
        <div id="pdfViewer">
            {/* The PDF will be displayed here */}
        </div>
    );
};

export default PdfViewer;
