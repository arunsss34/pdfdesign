import React, { useState } from 'react';
import add from './add.png'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from './logo.jpeg'
import contact from './P.png'
import mail from './M.png'
import addr from './L.png'
import pdf from './2747240.png'


const FormWithAddButton = () => {
    const [gettotal, setTotal] = useState(0)
    const [formData, setFormData] = useState([{ SLNo: '', Description: '', Quantity: '', Rate: '', Amount: '' }]);
    const allOptions = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    const handleInputChange = (index, field, value) => {
        setFormData((prevFormData) => {
            const updatedData = [...prevFormData];
            updatedData[index][field] = value;
            updatedData[index]['SLNo'] = index + 1;
            updatedData[index]['Amount'] = updatedData[index]['Quantity'] * updatedData[index]['Rate']
            const totAmount = formData.reduce((sum, obj) => sum + obj.Amount, 0);
            setTotal(totAmount)
            return updatedData;
        });
    };

    const handleAddForm = () => {
        setFormData((prevFormData) => [...prevFormData, { SLNo: '', Description: '', Quantity: '', Rate: '', Amount: '' }]);
        // const totAmount = formData.reduce((sum, obj) => sum + obj.Amount, 0);
        // setTotal(totAmount)
    };

    function generatePDF() {
        const pdf = new jsPDF();
        pdf.setFontSize(12);
        pdf.setFont('Times');
        pdf.addImage(logo, 'JPEG', 77, 5, 40, 20);
        pdf.text('7STAR POWER CONTROL SYSTEM', 65, 30);
        pdf.addImage(contact, 'PNG', 14, 37, 4, 4);
        pdf.text('8675276668', 20, 40);
        pdf.addImage(mail, 'PNG', 14, 43, 4, 3);
        pdf.text('7starpowercontrolsystem@gmail.com', 20, 46);
        pdf.addImage(addr, 'PNG', 14, 49, 4, 4);
        pdf.text('Thalaivasal,Salem Dt', 20, 53);
        pdf.text('GST No : S434FD44445', 148, 40);
        const currentDateTime = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDateTime = currentDateTime.toLocaleString('en-US', options);
        pdf.text('Date :' + formattedDateTime, 148, 46);
        pdf.text('To M/s:', 14, 65);
        pdf.text('............................................................................................................................................................', 26, 70)
        const headers = Object.keys(formData[0]);
        const body = formData.map((row) => Object.values(row));
        pdf.autoTable({
            head: [headers],
            body: body,
            startX: 20,
            startY: 80,
            styles: { fontSize: 12, setFont: 'Timer' },

        });
        // console.log(formData.length, "lllllllllllllllllllll")
        pdf.text('Total:' + gettotal, 160, 100 + formData.length);
        pdf.text('Customer Sign', 30, 130 + formData.length);
        pdf.text('For 7star', 140, 130 + formData.length);
        pdf.save('table.pdf');
    };

    return (
        <div>
            {formData.map((form, index) => (
                <div key={index}>
                    <div class="container text-center mycontainer">
                        <div class="row">
                            <div class="col-12">
                                <div>
                                    <input
                                        className="form-control"
                                        placeholder="Product"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        list="fruits"
                                        id={`Description-${index}`}
                                        value={form.Description}
                                        onChange={(e) => handleInputChange(index, 'Description', e.target.value)}
                                    />
                                </div><br />
                            </div>
                            <div class="col-12">
                                <div>
                                    <input
                                        className="form-control"
                                        placeholder="Quantity"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="number"
                                        id={`Quantity-${index}`}
                                        value={form.Quantity}
                                        onChange={(e) => handleInputChange(index, 'Quantity', e.target.value)}
                                    />
                                </div><br />
                            </div>
                            <div class="col-12">
                                <div>
                                    <input
                                        className="form-control"
                                        placeholder="Rate"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="number"
                                        id={`Rate-${index}`}
                                        value={form.Rate}
                                        onChange={(e) => handleInputChange(index, 'Rate', e.target.value)}
                                    />
                                </div><br />
                            </div><br />
                        </div>
                    </div>
                    <datalist id="fruits">
                        {allOptions.map((option, index) => (
                            <option key={index} value={option} />
                        ))}
                    </datalist>

                </div>
            ))}
            <a onClick={handleAddForm} className='add_button'><img src={add} className='addicon' /></a>
            <a onClick={generatePDF} className='pdf_btn'><img src={pdf} className='pdficon' /></a>
        </div>
    );
};

export default FormWithAddButton;