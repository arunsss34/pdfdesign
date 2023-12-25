import React, { useState } from 'react';
import add from './add.png'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from './logo1.png'
import logo1 from './logo.jpeg'
import contact from './P.png'
import mail from './M.png'
import addr from './L.png'
import pdf from './pdf.png'
import logout from './logout.jpg'
import dropdown from './dropdown.js'
import print from './print.png'



const Dashboard = () => {
    const [gettotal, setTotal] = useState(0)
    const [cus_name, setCus_name] = useState('')
    const [getadrrs, setgetadrrs] = useState('')
    const [get_Mobile, ssetMobile] = useState('')
    const [formData, setFormData] = useState([{ SLNo: '', Description: '', Quantity: '', Rate: '', Amount: '' }]);
    const allOptions = dropdown && dropdown.dp && dropdown.dp.map(item => item);
    const handleInputChange1 = (event) => {
        setCus_name(event)
    }
    const handleInputChange2 = (event) => {
        setgetadrrs(event)
    }
    const handleInputChange3 = (event) => {
        ssetMobile(event)
    }
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
    };

    function generatePDF() {
        const pdf = new jsPDF();
        pdf.setFontSize(12);
        pdf.setFont('Times');
        pdf.addImage(logo1, 'JPEG', 77, 5, 40, 20);
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
        pdf.text('QUOTATION', 89, 60);
        pdf.text('To', 20, 70)
        pdf.text('Name: ', 25, 76)
        pdf.text(cus_name, 40, 76)
        pdf.text('Address: ', 25, 82)
        pdf.text(getadrrs, 43, 82)
        pdf.text('Mobile: ', 25, 88)
        pdf.text(get_Mobile, 40, 88)
        pdf.rect(14, 63, 182, 29);
        const headers = Object.keys(formData[0]);
        const body = formData.map((row) => Object.values(row));
        pdf.autoTable({
            head: [headers],
            body: body,
            startX: 20,
            startY: 95,
            styles: { fontSize: 12, setFont: 'Timer' },

        });
        pdf.text('Total:' + gettotal, 160, (150 + formData.length * 10));
        pdf.text('Customer Sign', 30, (170 + formData.length * 10));
        pdf.text('For 7star', 140, (170 + formData.length * 10));
        pdf.save('Quotation.pdf');
    };
    const printPDF = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(12);
        pdf.setFont('Times');
        pdf.addImage(logo1, 'JPEG', 77, 5, 40, 20);
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
        pdf.text('QUOTATION', 89, 60);
        pdf.text('To', 20, 70)
        pdf.text('Name: ', 25, 76)
        pdf.text(cus_name, 40, 76)
        pdf.text('Address: ', 25, 82)
        pdf.text(getadrrs, 43, 82)
        pdf.text('Mobile: ', 25, 88)
        pdf.text(get_Mobile, 40, 88)
        pdf.rect(14, 63, 182, 29);
        const headers = Object.keys(formData[0]);
        const body = formData.map((row) => Object.values(row));
        pdf.autoTable({
            head: [headers],
            body: body,
            startX: 20,
            startY: 95,
            styles: { fontSize: 12, setFont: 'Timer' },

        });
        pdf.text('Total:' + gettotal, 160, (150 + formData.length * 10));
        pdf.text('Customer Sign', 30, (170 + formData.length * 10));
        pdf.text('For 7star', 140, (170 + formData.length * 10));
        pdf.autoPrint();
        window.open(pdf.output('bloburl'), '_blank');

    };

    return (<>
        <header id="header" class="header fixed-top d-flex align-items-center p-2">
            <div class="title">
                <h5><img src={logo} className='logo' /></h5>
            </div>
            <nav class="header-nav ms-auto pe-4">
                <div class="p-3">
                    <a class="btn btn-outline-success btn-md ms-2" onClick={handleAddForm}>
                        <i class="bi bi-box-arrow-right pe-1"></i>
                        <span>Add</span>
                    </a>
                    <a class="btn btn-outline-danger btn-md ms-2" onClick={generatePDF}>
                        <i class="bi bi-box-arrow-right pe-1"></i>
                        <span>Pdf</span>
                    </a>
                    <a class="btn btn-outline-primary btn-md ms-2" onClick={printPDF}>
                        <i class="bi bi-box-arrow-right pe-1"></i>
                        <span>Print</span>
                    </a>
                    {/* <a class="btn btn-outline-danger btn-md ms-2" href="/login" id="logoutButton">
                        <i class="bi bi-box-arrow-right pe-1"></i>
                        <span>Log Out</span>
                    </a> */}
                </div>
            </nav>
        </header>
        <div className='dash'>
            <div className='container customer'>
                <div class="row">
                    <div class="col">
                        <div class="input-box1 p-6">
                            <input
                                className="form-control"
                                placeholder="Customer Name"
                                aria-label="Product"
                                aria-describedby="basic-addon1"
                                type="text"
                                value={cus_name}
                                onChange={(e) => handleInputChange1(e.target.value)}
                                id="address_id"
                            />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-box1 p-6">
                            <input
                                className="form-control"
                                placeholder="To Address"
                                aria-label="Product"
                                aria-describedby="basic-addon1"
                                type="text"
                                value={getadrrs}
                                onChange={(e) => handleInputChange2(e.target.value)}
                                id="address_id"
                            />
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-box1 p-6">
                            <input
                                className="form-control"
                                placeholder="Mobile"
                                aria-label="Product"
                                aria-describedby="basic-addon1"
                                type="text"
                                value={get_Mobile}
                                onChange={(e) => handleInputChange3(e.target.value)}
                                id="address_id"
                            />
                        </div>
                    </div>
                </div>
            </div><br />
            {formData.map((form, index) => (
                <div key={index}>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-6">
                                <div class="input-box1">
                                    <input
                                        className="form-control"
                                        placeholder="Product"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        list="fruits"
                                        required
                                        id={`Description-${index}`}
                                        value={form.Description}
                                        onChange={(e) => handleInputChange(index, 'Description', e.target.value)}
                                    />
                                </div><br />
                            </div>
                            <div class="col-3">
                                <div class="input-box1">
                                    <input
                                        className="form-control"
                                        placeholder="Quantity"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="number"
                                        required
                                        id={`Quantity-${index}`}
                                        value={form.Quantity}
                                        onChange={(e) => handleInputChange(index, 'Quantity', e.target.value)}
                                    />
                                </div><br />
                            </div>
                            <div class="col-3">
                                <div class="input-box1">
                                    <input
                                        className="form-control"
                                        placeholder="Rate"
                                        aria-label="Product"
                                        aria-describedby="basic-addon1"
                                        type="number"
                                        required
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
            <br />
        </div >
    </>);
};

export default Dashboard;