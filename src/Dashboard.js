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


const Dashboard = () => {
    const [gettotal, setTotal] = useState(0)
    const [getadrrs, setgetadrrs] = useState('')
    const [formData, setFormData] = useState([{ SLNo: '', Description: '', Quantity: '', Rate: '', Amount: '' }]);
    const allOptions = ['25A (TC1-D12004) 4NO', '25A (TC1-D12008) 2NO/2NC', '32A (TC1-D18004) 4NO', '40A (TC1-D25004) 4NO', '40A (TC1-D25008)', '60A (TC1-D40004) 4NO', '60A (TC1-D40008) 2NO/2NC', '80A (TC1-D50004) 4NO', '80A (TC1-D50008) 2NO/2NC', '80A (TC1-D65004) 4NO', '80A (TC1-D65008) 2NO/2NC', '100A (TC1-D80008) 2NO/2NC', '125A (TC1-D95004) 4NO', '125A (TC1-D95008) 2NO/2NC', 'TC200A (LC1FDP115A) 3NO', 'TC200A (LC1FDP1154) 4NO', 'TC250A (LC1FDP150A) 3NO', 'TC250A (LC1FDP1504) 4NO', 'TC275A (LC1FDP185A) 3NO', 'TC275A (LC1FDP200A) 3NO', 'TC275A (LC1FDP1854) 4NO', 'TC315A (LC1FDP225A) 3NO', 'TC315A (LC1FDP2254) 4NO', 'TC350A (LC1FDP265A) 3NO', 'TC350A (LC1FDP300A) 3NO', 'TC350A (LC1FDP2654) 4NO', 'TC400A (LC1FDP330A) 3NO', 'TC400A (LC1FDP3304) 4NO', 'TC500A (LC1FDP400A) 3NO', 'TC500A (LC1FDP4004) 4NO', 'TC600A (LC1FDP460A) 3NO', 'TC700A (LC1FDP500A) 3NO', 'TC700A (LC1FDPM5004) 4NO', 'TC800A (LC1FDP580A) 3NO', 'TC1000A (LC1FDP630A) 3NO', 'TC1000A (LC1FDP800A) 3NO', 'TC1000A (LC1FDP6304) 4NO', 'TC1600A (LC1FDP780A) 3NO', 'TC1600A (LC1FDP7804) 4NO', 'TC 7 kvar 1NO+1NC', 'TC 7 kvar Conactor 2NC', 'TC 10 kvar Conactor1NO+1NC', 'TC 10 kvar Conactor2NC', 'TC 12.5 kvar Conactor1NO+1NC', 'TC12.5 kvar Conactor2NC', 'TC 16.7 kvar Conactor1NO+1NC', 'TC 16.7 kvar Conactor2NC', 'TC 20 kvar Conactor1NO+1NC', 'TC 20 kvar Conactor2NC', 'TC 25 kvar Conactor1NO+1NC', 'TC 25 kvar Conactor2NC', 'TC 33 kvar Conactor1NO+2NC', 'TC 40 kvar Conactor1N0+2NC', 'TC 50 kvar Conactor1N0+2NC', 'TC 60 kvar Conactor1NO+2NC', 'TC 75 kvar Conactor1NO+2NC', 'TC 80 kvar Conactor1NO+2NC', 'TC100 kvar Conactor1NO+2NC', 'Havells 3 kvar Conactor1NO', 'Havells 3 kvar Conactor1NC', 'Havells 5 kvar Conactor1NO', 'Havells 5 kvar Conactor1NC', 'Havells10 kvar Conactor1NO', 'Havells10 kvar Conactor1NC', 'Havells 12.5 kvar Conactor1NO', 'Havells 12.5 kvar Conactor1NC', 'Havells 15 kvar Conactor1NO', 'Havells 15 kvar Conactor1NC', 'Havells 20 kvar Conactor1NO', 'Havells 20 kvar Conactor1NC', 'Havells 25 kvar Conactor1NO', 'Havells 25 kvar Conactor1NC', 'Havells 33.3 kvar Conactor1NO+1NC', 'Havells 40 kvar Conactor2NO+2NC', 'Havells 50 kvar Conactor2NO+2NC', 'Havells 66 kvar Conactor2NO+2NC', 'Schnedier 2.5 kvar Conactor', 'Schnedier 5 kvar Conactor', 'Schnedier 6.25 kvar Conactor', 'Schnedier 7.5 kvar Conactor', 'Schnedier 12.5 kvar Conactor', 'Schnedier 16.7 kvar Conactor', 'Schnedier 20 kvar Conactor', 'Schnedier 25 kvar Conactor', 'Schnedier 30 kvar Conactor', 'Schnedier 40 kvar Conactor', 'Schnedier 45 kvar Conactor', 'Schnedier 50 kvar Conactor', 'Schnedier 60 kvar Conactor', 'L&T 3 kvar Conactor', 'L&T 5 kvar Conactor', 'L&T 8.5 kvar Conactor', 'L&T10 kvar Conactor', 'L&T 12.5 kvar Conactor', 'L&T 15 kvar Conactor', 'L&T 20 kvar Conactor', 'L&T 25 kvar Conactor', 'L&T 30 kvar Conactor', 'L&T 40 kvar Conactor', 'L&T 50 kvar Conactor', 'L&T 60 kvar Conactor', 'L&T 75 kvar Conactor', 'L&T 85 kvr Conactor', 'L&T100 kvar Conactor', 'Siemens 5 kvar Conactor1NO', 'Siemens 7 kvar Conactor1NO', 'Siemens 10 kvar Conactor1NO+1NC', 'Siemens 12.5 kvar Conactor1NO+1NC', 'Siemens 16 kvar Conactor1NO+1NC', 'Siemens 20 kvar Conactor1NO+1NC', 'Siemens 25 kvar Conactor1NO+1NC', 'Siemens 30 kvar Conactor1NO+1NC', 'Siemens 40 kvar Conactor2NO+2NC', 'Siemens 50 kvar Conactor2NO+2NC', 'Siemens 60 kvar Conactor1NO+2NC', 'Siemens 80 kvar Conactor1NO+2NC', 'Siemens 100 kvar Conactor1NO+2NC', 'TC0.10~0.16A Relay (TRD09301)', 'TC0.16~025A Relay (TR2D09302)', 'TC0.25~0.40A Relay (TR2D09303)', 'TC0.40~0.63A Relay (TR2D09304)', 'TC0.63~1.00A Relay (TR2D09305)', 'TC1.00~1.60A Relay (TR2D09306)', 'TC1.25~2.00A Relay (TR2D093X6)', 'TC1.60~2.50A Relay (TR2D09307)', 'TC2.50~4.00A Relay (TR2D09308)', 'TC4.00~6.00A Relay (TR2D09310)', 'TC5.50~8.00A Relay (TR2D09312)', 'TC7.00~10.0A Relay (TR2D09314)', 'TC9.00~13.0A Relay (TR2D09316)', 'TC9.00~14.0A Relay (TR2D09316X)', 'TC12.0~18.0A Relay (TR2D09321)', 'TC14.0~22.0A Relay (TR2D09321X)', 'TC17.0~25.0A Relay (TR2D09322)', 'TC23.0~32.0A Relay (TR2D09353)', 'TC28.0~36.0A Relay (TR2D09355)', 'TC23.0~32.0A Relay (TR2D09353)', 'TC30.0~40.0A Relay (TR2D09355)', 'TC37.0~50.0A Relay (TR2D09357)', 'TC48.0~65.0A Relay (TR2D09359)', 'TC55.0~70.0A Relay (TR2D09361)', 'TC63.0~80.0A Relay (TR2D09363)', 'TC80.0~93.0A Relay (TR2D09365', 'TC65~105A Relay (LR1F105)', 'TC80~125A Relay (LR1F125)', 'TC100~160A Relay (LR1F160)', 'TC125~200A Relay (LR1F200)', 'TC160~250A Relay (LR1F250)', 'TC200~315A Relay (LR1F315)', 'TC250~400A Relay (LR1F400)', 'TC315~500A Relay (LR1F500)', 'TC400~630A Relay (LR1F630)', 'TC500~800A Relay (LR1F800)', 'TC630~800A Relay (LR1F1000)', 'TC Add-On Block (TA1-DN10*) 1NO', 'TC Add-On Block (TA1-DN01*) 1NC', 'TC Add-On Block (TA1-DN20)  2NO', 'TC Add-On Block (TA1-DN11)  1NO+1NC', 'TC Add-On Block (TA1-DN02)  2NC', 'TC Add-On Block (TA1-DN40) 4NO', 'TC Add-On Block (TA1-DN31) 3NO+1NC', 'TC Add-On Block (TA1-DN22) 2NO+2NC', 'TC Add-On Block (TA1-DN13) 1NO+3NC', 'TC Add-On Block (TA1-DN04) 4NCs', 'TC ON Delay Timer 1NO+1NC (TA2-DT0) 0.1...30s', 'TC ON Delay Timer 1NO+1NC (TA2-DT2) 0.1...30s', 'TC ON Delay Timer 1NO+1NC  (TA2-DT4) 10...180s', 'TC OFF Delay Timer 1NO+1NC (TA3-DRO) 0.1...3s', 'TC OFF Delay Timer 1NO+1NC (TA3-DR2) 0.1...30s', 'TC OFF Delay Timer1NO+1NC (TA3-DR4) 10...180s', 'TC Star Delt Timer 1NO+1NC (TA2-DS2) 1...30s', 'TC Control Relay (TCA2-DN22)2NO+2NC', 'TC Control Relay (TCA2-DN31)3NO+1NC', 'TC Control Relay (TCA2-DN40)4NO', 'TC9A D Contactor (LC1D096) NO', 'TC9A D Contactor (LC1D099) NC', 'TC12A D Contactor (LC1D123) NO', 'TC16A D Contactor (LC1D129)NC', 'TC22A D Contactor (LC1D223)NO', 'TC22A D Contactor (LC1D229) NC', 'TC25A D Contactor (LC1D253)NO', 'TC25A D Contactor (LC1D259)NC', 'TC32A D Contactor (LC1D323)NO', 'TC32A D Contactor (LC1D329)NC', 'TC40A D Contactor (LC1D403)1NO+1NC', 'TC50A D Contactor (LC1D503)1NO+1NC', 'TC63A D Contactor (LC1D633)1NO+1NC', 'TC80A D Contactor (LC1D803)1NO+1NC', 'TC D0.10~0.16A Relay (LR1D09301)', 'TC D0.16~0.25A Relay (LR1D09302)', 'TC D0.25~0.40A Relay (LR1D09303)', 'TC D0.40~0.63A Relay (LR1D09304)', 'TC D0.63~1.00A Relay (LR1D09305)', 'TC D1.00~1.60A Relay (LR1D09306)', 'TC D1.60~2.50A Relay (LR1D09307)', 'TC D2.50~4.00A Relay (LR1D09308)', 'TC D4.00~6.00A Relay (LR1D09310)', 'TC D5.50~8.00A Relay (LR1D16312)', 'TC D7.00~10.0A Relay (LR1D09314)', 'TC D10.0~13.0A Relay (LR1D12316)', 'TC D13.0~18.0A Relay (LR1D16321)', 'TC D18.0~25.0A Relay (LR1D25322)', 'TC D23.0~32.0A Relay (LR1D32353)', 'TC D28.0~40.0A Relay (LR1D32355)', 'TC D23.0~32.0A Relay (LR1D40353)', 'TC D30.0~40.0A Relay (LR1D40355)', 'TC D38.0~50.0A Relay (LR1D63357)', 'TC D48.0~57.0A Relay (LR1D63359)', 'TC D57.0~66.0A Relay (LR1D63361)', 'C&S63A MCCB', 'C&S80A MCCB', 'C&S100A MCCB', 'C&S125A MCCB', 'C&S160A MCCB', 'C&S200A MCCB', 'C&S250A MCCB', 'C&S320A MCCB', 'C&S350A MCCB', 'C&S400A MCCB', 'Havells 63A MCCB', 'Havells 80A MCCB', 'Havells 100A MCCB', 'Havells 125A MCCB', 'Havells 160A MCCB', 'Havells 200A MCCB', 'Havells 250A MCCB', 'Havells 320A MCCB', 'Havells 350A MCCB', 'Havells 400A MCCB', 'L&T 63A MCCB', 'L&T 80A MCCB', 'L&T 100A MCCB', 'L&T 125A MCCB', 'L&T 160A MCCB', 'L&T 200A MCCB', 'L&T 250A MCCB', 'L&T 320A MCCB', 'L&T 350A MCCB', 'L&T 400A MCCB', 'Schneider 50A MCCB', 'Schneider 63A MCCB', 'Schneider 80A MCCB', 'Schneider 100A MCCB', 'Schneider 125A MCCB', 'Schneider 160A MCCB', 'Schneider 200A MCCB', 'C&S32A Fuse Unit', 'C&S63A Fuse Unit', 'C&S100A Fuse Unit', 'C&S125A Fuse Unit', 'C&S160A Fuse Unit', 'C&S200A Fuse Unit', 'C&S250A Fuse Unit', 'C&S315A Fuse Unit', 'C&S400A Fuse Unit', 'C&S630A Fuse Unit', 'C&S800A Fuse Unit', 'L &T32A Fuse Unit', 'L &T63A Fuse Unit', 'L &T100A Fuse Unit', 'L &T125A Fuse Unit', 'L &T160A Fuse Unit', 'L &T200A Fuse Unit', 'L &T250A Fuse Unit', 'L &T315A Fuse Unit', 'L &T400A Fuse Unit', 'L &T630A Fuse Unit', 'L &T800A Fuse Unit', 'C&S125A Load Break Switch', 'C&S160A Load Break Switch', 'C&S200A Load Break Switch', 'C&S250A Load Break Switch', 'C&S315A Load Break Switch', 'C&S400A Load Break Switch', 'C&S630A Load Break Switch', 'C&S800A Load Break Switch', 'C&S1000A Load Break Switch', 'C&S1250A Load Break Switch', 'C&S1600A Load Break Switch', 'C&S2000A Load Break Switch', 'C&S2500A Load Break Switch', 'C&S3150A Load Break Switch', 'L&T125A Load Break Switch', 'L&T160A Load Break Switch', 'L&T200A Load Break Switch', 'L&T250A Load Break Switch', 'L&T315A Load Break Switch', 'L&T400A Load Break Switch', 'L&T630A Load Break Switch', 'L&T800A Load Break Switch', 'L&T1000A Load Break Switch', 'L&T1250A Load Break Switch', 'L&T1600A Load Break Switch', 'L&T2000A Load Break Switch', 'L&T2500A Load Break Switch', 'L&T3150A Load Break Switch', 'C&S63A Changeover Switch', 'C&S100A Changeover Switch', 'C&S125A Changeover Switch', 'C&S160A Changeover Switch', 'C&S200A Changeover Switch', 'C&S250A Changeover Switch', 'C&S315A Changeover Switch', 'C&S400A Changeover Switch', 'C&S630A Changeover Switch', 'C&S800A Changeover Switch', 'C&S1000A Changeover Switch', 'C&S1250A Changeover Switch', 'C&S1600A Changeover Switch', 'C&S2000A Changeover Switch', 'C&S2500A Changeover Switch', 'C&S3150A Changeover Switch', 'L&T63A Changeover Switch', 'L&T100A Changeover Switch', 'L&T125A Changeover Switch', 'L&T160A Changeover Switch', 'L&T200A Changeover Switch', 'L&T250A Changeover Switch', 'L&T315A Changeover Switch', 'L&T400A Changeover Switch', 'L&T630A Changeover Switch', 'L&T800A Changeover Switch', 'L&T1000A Changeover Switch', 'L&T1250A Changeover Switch', 'L&T1600A Changeover Switch', 'L&T2000A Changeover Switch', 'L&T2500A Changeover Switch', 'L&T3150A Changeover Switch', 'C&S160A Fuse Bases DIN Type', 'C&S250A Fuse Bases DIN Type', 'C&S400A Fuse Bases DIN Type', 'C&S630A Fuse Bases DIN Type', 'C&S40A HRC Fuse Link', 'C&S50A HRC Fuse Link', 'C&S63A HRC Fuse Link', 'C&S80A HRC Fuse Link', 'C&S100A HRC Fuse Link', 'C&S125A HRC Fuse Link', 'C&S160A HRC Fuse Link', 'C&S200A HRC Fuse Link', 'C&S250A HRC Fuse Link', 'C&S315A HRC Fuse Link', 'C&S400A HRC Fuse Link', 'C&S500A HRC Fuse Link', 'C&S600A HRC Fuse Link', 'TC9A (LC1-D09) Coil', 'TC12A (LC1-D12) Coil', 'TC17A (LC1-D17) Coil', 'TC25A (LC1-D25) Coil', 'TC32A (LC1-D32) Coil', 'TC40A (LC1-D40) Coil', 'TC50A (LC1-D50**) Coil', 'TC63A (LC1-D63) Coil', 'TC80A (LC1-D80) Coil', 'Red LED Lamp', 'Yellow LED Lamp', 'Bule  LED Lamp', 'Black  LED Lamp', 'Green LED Lamp', 'Whit  LED Lamp', 'Double Push Buttaon', 'Contact Elament 1NO', 'Contact Elament 1NC', 'Emergency Push', 'C&S 0.5A MCB', 'C&S 1A MCB', 'C&S 2A MCB', 'C&S 3A MCB', 'C&S 4A MCB', 'C&S 5A MCB', 'C&S 6A MCB', 'C&S 10A MCB', 'C&S 16A MCB', 'C&S 20A MCB', 'C&S 25A MCB', 'C&S 32A MCB', 'C&S 40A MCB', 'C&S 50A MCB', 'C&S 63A MCB', 'Schnedier 1A MCB', 'Schnedier 2A MCB', 'Schnedier 3A MCB', 'Schnedier 4A MCB', 'Schnedier 6A MCB', 'Schnedier 16A MCB', 'Schnedier 20A MCB', 'Schnedier 25A MCB', 'Schnedier 32A MCB', 'Schnedier 40A MCB', 'Schnedier 50A MCB', 'Schnedier 63A MCB', 'L&T 4A MCB', 'L&T 6A MCB', 'L&T 16A MCB', 'L&T 20A MCB', 'L&T 25A MCB', 'L&T 32A MCB', 'L&T 40A MCB', 'L&T 50A MCB', 'L&T 63A MCB', 'Hager4A MCB', 'Hager 6A MCB', 'Hager 16A MCB', 'Hager 20A MCB', 'Hager 25A MCB', 'Hager 32A MCB', 'Hager 40A MCB', 'Hager 50A MCB', 'Hager 63A MCB', 'Havells 4A MCB', 'Havells 6A MCB', 'Havells 16A MCB', 'Havells 20A MCB', 'Havells 25A MCB', 'Havells 32A MCB', 'Havells 40A MCB', 'Havells 50A MCB', 'Havells 63A MCB', 'C&S 0.1~0.16A MPCB', 'C&S 0.16~0.25A MPCB', 'C&S 0.25~0.4A MPCB', 'C&S 0.4~0.63A MPCB', 'C&S 0.63~0.1A MPCB', 'C&S 0.1~0.16A MPCB', 'C&S 1.6~2.5A MPCB', 'C&S 2.5~4A MPCB', 'C&S 4~6A MPCB', 'C&S 5~8A MPCB', 'C&S 6~10A MPCB', 'C&S 9~13A MPCB', 'C&S 11~17A MPCB', 'C&S 14~22A MPCB', 'C&S 18~26A MPCB', 'C&S 22~32A MPCB', 'C&S 28~40A MPCB', 'C&S 34~50A MPCB', 'C&S 45~63A MPCB', 'C&S 55~75A MPCB', 'C&S 70~90A MPCB', 'C&S 80~100A MPCB', 'L&T 0.1-0.16A MPCB', 'L&T 0.16-0.25A MPCB', 'L&T 0.25-0.40A MPCB', 'L&T 0.40-0.63A MPCB', 'L&T 0.63-1.00A MPCB', 'L&T 1.00-1.60A MPCB', 'L&T 1.60-2.50A MPCB', 'L&T 2.50-4.00A MPCB', 'L&T 4.00-6.30A MPCB', 'L&T 6.30-10.00A MPCB', 'L&T 9.00-13.00A MPCB', 'L&T 11.00-16.00A MPCB', 'L&T 14.00-20.00A MPCB', 'L&T 19.00-25.00A MPCB', 'L&T 24.00-32.00A MPCB', 'L&T 28.00-40.00A MPCB', 'L&T 35.00-50.00A MPCB', 'L&T 45.00-63.00A MPCB', 'Schneider 0.1-0.16A MPCB', 'Schneider 0.16-0.25A MPCB', 'Schneider 0.25-0.40A MPCB', 'Schneider 0.40-0.63A MPCB', 'Schneider 0.63-1.0A MPCB', 'Schneider 1.6-2.5A MPCB', 'Schneider 2.5-4A MPCB', 'Schneider 4 - 6.3AMPCB', 'Schneider 6 - 10A MPCB', 'Schneider 9 - 14A MPCB', 'Schneider 13 - 18A MPCB', 'Schneider 17 - 23A MPCB', 'Schneider 20 - 25A MPCB', 'Schneider 24 - 32A MPCB', 'Schneider 30... 40A MPCB', 'Schneider 37...50A MPCB', 'Schneider 48...65A MPCB', 'Schneider 62...73A MPCB', 'Schneider 70...150A MPCB', 'Schneider 100...220A MPCB', 'Schneider 160...320A MPCB', 'Schneider 250...500A MPCB', 'Siemens 0.11...0.16A MPCB', 'Siemens 0.14...0.2A MPCB', 'Siemens 0.18...0.25A MPCB', 'Siemens 0.22...0.32A MPCB', 'Siemens 0.28...0.4A MPCB', 'Siemens 0.35...0.5A MPCB', 'Siemens 0.45...0.63A MPCB', 'Siemens 0.55...0.8A MPCB', 'Siemens 0.7...1A MPCB', 'Siemens 0.9...1.25A MPCB', 'Siemens 1.1...1.6A MPCB', 'Siemens 1.4...2A MPCB', 'Siemens 2.2...3.2A MPCB', 'Siemens 2.8...4A MPCB', 'Siemens 3.5...5A MPCB', 'Siemens 4.5...6.3A MPCB', 'Siemens 5.5...8A MPCB', 'Siemens 7...10A MPCB', 'Siemens 9...12.5A MPCB', 'Siemens 10...16A MPCB', 'Siemens 13...20A MPCB', 'Siemens 16...22A MPCB', 'Siemens 18...25A MPCB', 'Siemens 23...28A MPCB', 'Siemens 27...32A MPCB', 'Siemens 30...36A MPCB', 'Siemens 34...40A MPCB', 'Siemens 22..32A MPCB', 'Siemens 28...36A MPCB', 'Siemens 32...40A MPCB', 'Siemens 35...45A MPCB', 'Siemens 42...52A MPCB', 'Siemens 49...59A MPCB', 'Siemens 54...65A MPCB', 'Siemens 62...73A MPCB', 'Siemens 70...80A MPCB', 'Siemens 36...50A MPCB', 'Siemens 45...63A MPCB', 'Siemens 57...75A MPCB', 'Siemens 65...84A MPCB', 'Siemens 75...93A MPCB', 'Siemens 80...100A MPCB', 'TC544C Temperature Control', 'TC513CX Temperature Control', 'TC244CX Temperature Control', 'TC344CX Temperature Control', 'TC203CX Temperature Control', 'TC303CX Temperature Control', 'Selec VAF Meter', 'Selec Ammeter', 'Selec APFC Meter 4Stage', 'Selec APFC Meter 6Stage', 'Selec APFC Meter 8Stage', 'Selec APFC Meter12Stage', 'Selec APFC Meter 16Stage', 'Selec 600SD-2-230 Timer', 'Elmeasure VAF Meter', 'Elmeasure Ammeter', 'Elmeasure APFC Meter 4Stage', 'Elmeasure APFC Meter 6Stage', 'Elmeasure APFC Meter 8Stage', 'Elmeasure APFC Meter 12Stage', 'Elmeasure APFC Meter 16Stage', '30/5ACurrent Transformer', '50/5ACurrent Transformer', '75/5ACurrent Transformer', '100/5ACurrent Transformer', '150/5ACurrent Transformer', '200/5ACurrent Transformer', '250/5ACurrent Transformer', '300/5ACurrent Transformer', '400/5ACurrent Transformer', '550/5ACurrent Transformer', '600/5ACurrent Transformer', '800/5ACurrent Transformer', '1000/5ACurrent Transformer', '1200/5ACurrent Transformer', '1600/5ACurrent Transformer', '1.0 kvr Capacitor', '2.0 kvr Capacitor', '3.0 kvr Capacitor', '5 .0 kvr Capacitor', '7.5.0 kvr Capacitor', '10.0 kvr Capacitor', '12.0 kvr Capacitor', '15.0 kvr Capacitor', '20.0 kvr Capacitor', '25.0 kvr Capacitor', '30.0kvr Capacitor', 'Schneider Control Relay 2NO+2NC', 'Schneider Control Relay 3NO+1NC', 'Schneider Control Relay 4NO', 'Schneider9A Contactor', 'Schneider12A Contactor', 'Schneider18A Contactor', 'Schneider25A Contactor', 'Schneider32A Contactor', 'Schneider38A Contactor', 'Schneider40A Contactor', 'Schneider50A Contactor', 'Schneider65A Contactor', 'Schneider80A Contactor', 'Schneider95A Contactor', 'Schneider11A Contactor', 'Schneider150A Contacor', 'Schneider185A Contactor', 'Schneider225A Contactor', 'Schneider265A Contactor', 'Schneider330A Contactor', 'Schneider400A Contactor', 'Schneider500A Contactor', 'Schneider 0.0...16A Relay', 'Schneider 0.16...0.25A Relay', 'Schneider 0.25...0.4A Relay', 'Schneider 0.4...0.63A Relay', 'Schneider 0.63...1A Relay', 'Schneider 1...1.6 A Relay', 'Schneider 1.6...2.5A Relay', 'Schneider 2.5...4A Relay', 'Schneider 4...6A Relay', 'Schneider 5.5...8A Relay', 'Schneider 7...10A Relay', 'Schneider 9...13A Relay', 'Schneider 12...18A Relay', 'Schneider 16...24A Relay', 'Schneider 23..32A Relay', 'Schneider 30...38A Relay', 'Schneider 23...32A Relay', 'Schneider 30..40A Relay', 'Schneider 37...50A Relay', 'Schneider 48...65A Relay', 'Schneider 62...80A Relay', 'Schneider 48...65A Relay', 'Schneider 63...80A Relay', 'Schneider 80...104A Relay', 'Schneider 28...115A Relay', 'Schneider 57...225A Relay', 'Schneider 125...500A Relay', 'Schneider  160...630A Relay', 'Schneider Pneumatic ON delay1NO+1NC 0...3s', 'Schneider Pneumatic ON delay1NO+ 1NC0.1...30s', 'Schneider Pneumatic ON delay1NO+1NC10...180s', 'Schneider Pneumatic OFF delay1NO+1NC 0...3s', 'Schneider Pneumatic OFF delay1NO+ 1NC0.1...30s', 'Schneider Pneumatic OFF delay1NO+1NC10...180s', 'Schneider Add On Block 1NO+1NC', 'Schneider Add On Block 2NO', 'Schneider Add On Block 2NC', 'Schneider Add On Block 2NO+2NC', 'Schneider Add On Block 4NO', 'Schneider Add On Block 4NC', 'Schneider Add On Block 3NO+1NC', 'Siemens 0.11...0.16A Relay', 'Siemens 0.14...0.2A Relay', 'Siemens 0.18...0.25A Relay', 'Siemens 0.22...0.32A Relay', 'Siemens 0.28...0.4A Relay', 'Siemens 0.35...0.5A Relay', 'Siemens 0.45...0.63A Relay', 'Siemens 0.55...0.8A Relay', 'Siemens 0.7...1A Relay', 'Siemens 0.9...1.25A Relay', 'Siemens 1.1...1.6A Relay', 'Siemens 1.4...2A Relay', 'Siemens 1.8...2.5A Relay', 'Siemens 2.2...3.2A Relay', 'Siemens 2.8...4A Relay', 'Siemens 3.5...5A Relay', 'Siemens 4.5...6.3A Relay', 'Siemens 5.5...8A Relay', 'Siemens 7...10A Relay', 'Siemens 9...12.5A Relay', 'Siemens 11...16A Relay', 'Siemens 14...20A Relay', 'Siemens 17...22A Relay', 'Siemens 20...25A Relay', 'Siemens 23...28A Relay', 'Siemens 27...32A Relay', 'Siemens 30...36A Relay', 'Siemens 34...40A Relay', 'Siemens 18...25A Relay', 'Siemens 22...32A Relay', 'Siemens 28...40A Relay', 'Siemens 36...45A Relay', 'Siemens 40...50A Relay', 'Siemens 47...57A Relay', 'Siemens 54...65A Relay', 'Siemens 62...73A Relay', 'Siemens 70...80A Relay', 'Siemens 28...40A Relay', 'Siemens 36...50A Relay', 'Siemens 45...63A Relay', 'Siemens 57...75A Relay', 'Siemens 70...90A Relay', 'Siemens 80...90A Relay', 'Siemens Control Relay 4NO', 'Siemens Control Relay 3NO+1NC', 'Siemens Control Relay 2NO+2NC', 'Siemens 9A Contactor', 'Siemens 12A Contactor', 'Siemens 16A Contactor', 'Siemens 22A Contactor', 'Siemens 32A Contactor', 'Siemens 38 A Contactor', 'Siemens 40A Contactor', 'Siemens 45A Contactor', 'Siemens 63A Contactor', 'Siemens 65A Contactor', 'Siemens 70A Contactor', 'Siemens 75A Contactor', 'Siemens 85A Contactor', 'Siemens 110A Contactor', 'Siemens 140A Contactor', 'Siemens 170A Contactor', 'Siemens 205A Contactor', 'Siemens 250A Contactor', 'Siemens 300A Contactor', 'Siemens 400A Contactor', 'Siemens 630A Contactor', 'Siemens 820A Contactor', 'Havells 0.12-0.18A Relay', 'Havells 0.18-0.26A Relay', 'Havells 0.25-0.35A Relay', 'Havells 0.34-0.5A Relay', 'Havells 0.5-0.7A Relay', 'Havells 0.6-0.9A Relay', 'Havells 0.8-1.2A Relay', 'Havells 1.1-1.6A Relay', 'Havells 1.5-2.1A Relay', 'Havells 2-3A Relay', 'Havells 2.8-4.2A Relay', 'Havells 3-5A Relay', 'Havells 4-6A Relay', 'Havells 5.6-8A Relay', 'Havells 6-9A Relay', 'Havells 8-12A Relay', 'Havells 12-18A Relay', 'Havells 15-22A  Relay', 'Havells 17-25A Relay', 'Havells 22-32A Relay', 'Havells 28-40A Relay', 'Havells 34-50A Relay', 'Havells 45-65A Relay', 'Havells 52-75A Relay', 'Havells 59-85A Relay', 'Havells 70-100A Relay', 'Havells 48-80A Relay', 'Havells 69-115A Relay', 'Havells 78-130A Relay', 'Havells 90-150A Relay', 'Havells 111-185A Relay', 'Havells 135-225A Relay', 'Havells 159-265A Relay', 'Havells 180-300A Relay', 'Havells 240-400A Relay', 'Havells 300-500A Relay', 'Havells 378-630A Relay', 'Havells 480-800A Relay', 'Havells 9A Contactor', 'Havells 12A Contactor', 'Havells 18A Contactor', 'Havells 22A Contactor', 'Havells 25A Contactor', 'Havells 32A Contactor', 'Havells 40A Contactor', 'Havells 50A Contactor', 'Havells 65A Contactor', 'Havells 75A Contactor', 'Havells 85A Contactor', 'Havells 100A Contactor', 'Havells 115A Contactor', 'Havells 130A Contactor', 'Havells 150A Contactor', 'Havells 185A Contactor', 'Havells 225A Contactor', 'Havells 265A Contactor', 'Havells 300A Contactor', 'Havells 400A Contactor', 'Havells 500A Contactor', 'Havells 630A Contactor', 'Havells 800A Contactor', 'L&T 9A Contacoter', 'L&T 12A Contacoter', 'L&T 18A Contacoter', 'L&T 25A Contacoter', 'L&T 32A Contacoter', 'L&T 40A Contacoter', 'L&T 45A Contacoter', 'L&T 50A Contacoter', 'L&T 60A Contacoter', 'L&T 70A Contacoter', 'L&T 80A Contacoter', 'L&T 110A Contacoter', 'L&T 140A Contacoter', 'L&T 185A Contacoter', 'L&T 225A Contacoter', 'L&T 250A Contacoter', 'L&T 300A Contacoter', 'L&T 400A Contacoter', 'L&T 500A Contacoter', 'L&T 630A Contacoter', 'L&T 820A Contacoter', 'L&T Control Contacoter 4NO', 'L&T Control Contacoter 3NO+1NC', 'L&T Control Contacoter 2O+2NC', 'L&T 0.23-0.41A Relay', 'L&T 031-0.55A Relay', 'L&T 0.55-0.85A Relay', 'L&T 0.78-1.2A Relay', 'L&T 1.2-2.0A Relay', 'L&T 1.9-2.8A Relay', 'L&T 2.4-3.6A Relay', 'L&T 3.5-5.2A Relay', 'L&T 4.6-6.7A Relay', 'L&T 6.7-9.7A Relay', 'L&T 8.5-12.5A Relay', 'L&T12.5-18.5A Relay', 'L&T 17-25.5A Relay', 'L&T 25-37A Relay', 'L&T 35-45A Relay', 'L&T 30-43A Relay', 'L&T 40-57A Relay', 'L&T 50-75A Relay', 'L&T 47-62A Relay', 'L&T 60-78A Relay', 'L&T 75-110A Relay', 'L&T 57-84A Relay', 'L&T 72-108A Relay', 'L&T 105-156A Relay', 'L&T 138-102A Relay', 'L&T 201-291A Relay', 'L&T 255-375A Relay', 'L&T Add On Block 4NO', 'L&T Add On Block 3NO+1NC', 'L&T Add On Block 1NO+3NC', 'L&T Add On Block 4NC', 'L&T Add On Block 2NO', 'L&T Add On Block 1NO+1NC', 'L&T Add On Block 2NC', 'L&T Add On Block 1N0', 'L&T Add On Block 1NC', 'Elmeasure 63A Automatic Changeover', 'Elmeasure 125A Automatic Changeover', 'Elmeasure 160A Automatic Changeover', 'Elmeasure 250A Automatic Changeover', 'Elmeasure 630A Automatic Changeover', 'Elmeasure 1250A Automatic Changeover', 'Elmeasure 1600A Automatic Changeover', 'Elmeasure 2000A Automatic Changeover', 'Elmeasure 2500A Automatic Changeover', 'Elmeasure 3200A Automatic Changeover', 'Elmeasure 63A Remotely Automatic Changeover', 'Elmeasure 100A Remotely Automatic Changeover', 'Elmeasure 125A Remotely Automatic Changeover', 'Elmeasure 160A Remotely Automatic Changeover', 'Elmeasure 200ARemotely Automatic Changeover', '6     Elmeasure 250A Remotely Automatic Changeover', 'Elmeasure 63A Changeover', 'Elmeasure 100A Changeover', 'Elmeasure 125A Changeover', 'Elmeasure 160A Changeover', 'Elmeasure 200A Changeover', 'Elmeasure 250A Changeover', 'Elmeasure 315A Changeover', 'Elmeasure 400A Changeover', 'Elmeasure 630A Changeover', 'Elmeasure 800A Changeover', 'Elmeasure 1000A Changeover', 'Elmeasure 1250A Changeover', 'Elmeasure 1600A Changeover', 'Elmex Kutm 2.5mm Terminal', 'Elmex Kut 4mm Terminal', 'Elmex Kut 6mm Terminal', 'Elmex Kut 10mm Terminal', 'Elmex Kut 25mm Terminal', 'Elmex Kut 35mm Terminal', 'Elmex Kut 50mm Terminal', 'Elmex Kut 95mm Terminal', 'Elmex Cst 4mm Terminal', 'Elmex Cst 6mm Terminal', 'Elmex Cst 10mm Terminal', 'Elmex Cst 16mm Terminal', 'Elmex Cst 25mm Terminal', 'Elmex Cbt 35mm Terminal', 'Elmex Cbt 70mm Terminal', 'Elmex Cbt 95mm Terminal', 'Elmex Cst 120mm Terminal', '2&3 Phase 3HP Starter', '2&3 Phase 5HP Starter', '3    2&3 Phase 7.5HP Starter', '2&3 Phase 10HP Starter', 'AutoStarter', 'Delay timer', '25 Condenser', '36 Condenser', '50 Condenser', '72  Condenser', '120  Condenser', 'Indicator', 'ON/OFF Button', 'DOC', '2&3 Phase Relay', '3 way Connector', '5 way Connector', 'Tackle Switch', '2 Pole contact', 'BCH 16A Contactor', 'BCH 20A Contactor', 'BCH 25A Contactor', 'BCH 40A Contactor', 'L&T ML1 Contactor', 'L&T ML2 Contactor', 'DOL Panel Box', 'Star Delta Panel Box', 'invt VFD Drive 0.75 kW', 'invt VFD Drive 1.5 kW', 'invt VFD Drive 2.2 kW', 'invt VFD Drive 4 kW', 'invt VFD Drive 5.5 kW', 'invt VFD Drive 7.5 kW', 'invt VFD Drive 11 kW', 'invt VFD Drive 15 kW', 'invt VFD Drive 18.5 kW', 'invt VFD Drive 22 kW', 'invt VFD Drive 30 kW', 'invt VFD Drive 37 kW', 'invt VFD Drive 45 kW', 'invt VFD Drive 55 kW', 'invt VFD Drive 75 kW', 'invt VFD Drive 90 kW', 'invt VFD Drive 110 kW', 'invt VFD Drive 132 kW', 'invt VFD Drive 160 kW', 'invt VFD Drive 185 kW', 'invt VFD Drive 200 kW', 'invt VFD Drive 220 kW', 'invt VFD Drive 250 kW', 'invt VFD Drive 280 kW', 'invt VFD Drive 315 kW', 'invt VFD Drive 355 kW', 'invt VFD Drive 400 kW', 'invt VFD Drive 450 kW', 'invt VFD Drive 500 kW', 'CG VFX Drive 0.75 kW', 'CG VFX Drive 1.5 kW', 'CG VFX Drive 2.2 kW', 'CG VFX Drive 4 kW', 'CG VFX Drive 5.5 kW', 'CG VFX Drive 7.5 kW', 'CG VFX Drive 11 kW', 'CG VFX Drive 15 kW', 'CG VFX Drive 18.5 kW', 'CG VFX Drive 22 kW', 'CG VFX Drive 30 kW', 'CG VFX Drive 37 kW', 'CG VFX Drive 45 kW', 'CG VFX Drive 55 kW', 'CG VFX Drive 75 kW', 'CG VFX Drive 90 kW', 'CG VFX Drive 110 kW', 'CG VFX Drive 132 kW', 'CG VFX Drive 160 kW', 'CG VFX Drive 185 kW', 'CG VFX Drive 200 kW', 'CG VFX Drive 220 kW', 'CG VFX Drive 250 kW', 'CG VFX Drive 280 kW', 'CG VFX Drive 315 kW', 'CG VFX Drive 355 kW', 'CG VFX Drive 400 kW', 'CG VFX Drive 450 kW', 'CG VFX Drive 500 kW', 'Nidec VFD Drive 0.75 kW', 'Nidec VFD Drive 1.5 kW', 'Nidec VFD Drive 2.2 kW', 'Nidec VFD Drive 4 kW', 'Nidec VFD Drive 5.5 kW', 'Nidec VFD Drive 7.5 kW', 'Nidec VFD Drive 11 kW', 'Nidec VFD Drive 15 kW', 'Nidec VFD Drive 18.5 kW', 'Nidec VFD Drive 22 kW', 'Nidec VFD Drive 30 kW', 'Nidec VFD Drive 37 kW', 'Nidec VFD Drive 45 kW', 'Nidec VFD Drive 55 kW', 'Nidec VFD Drive 75 kW', 'Nidec VFD Drive 90 kW', 'Nidec VFD Drive 110 kW', 'Nidec VFD Drive 132 kW', 'Nidec VFD Drive 160 kW', 'Nidec VFD Drive 185 kW', 'Nidec VFD Drive 200 kW', 'Nidec VFD Drive 220 kW', 'Nidec VFD Drive 250 kW', 'Nidec VFD Drive 280 kW', 'Nidec VFD Drive 315 kW', 'Nidec VFD Drive 355 kW', 'Nidec VFD Drive 400 kW', 'Nidec VFD Drive 450 kW', 'Nidec VFD Drive 500 kW'];
    const handleInputChange1 = (val) => {
        setgetadrrs(val)
        console.log(val)
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
        pdf.text(getadrrs, 25, 76)
        pdf.rect(14, 63, 182, 20);
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

    return (<>
        <div className='dash'><br /><br />
            <div className='logo_login'><img src={logo} className='logo' /></div><br />
            <div class="input-box p-2">
                <input
                    className="form-control"
                    placeholder="To Address"
                    aria-label="Product"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={getadrrs}
                    onChange={(e) => handleInputChange1(e.target.value)}
                    id="address_id"
                />
            </div><br />
            {formData.map((form, index) => (
                <div key={index}>
                    <div class="container text-center mycontainer">
                        <div class="row">
                            <div class="col-12">
                                <div class="input-box">
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
                            <div class="col-12">
                                <div class="input-box">
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
                            <div class="col-12">
                                <div class="input-box">
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
            <a onClick={handleAddForm} className='add_button'><img src={add} className='addicon' /></a>
            <div className='pdf_btn'><a onClick={generatePDF} ><img src={pdf} className='pdficon' /></a></div>
        </div >
    </>);
};

export default Dashboard;