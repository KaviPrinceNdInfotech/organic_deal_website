import React, { useState } from 'react'
import axios from "axios"

function SellerRegistration() {
    const [step, setStep] = useState(1);

    const [VendorName, setVendorName] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [city, setCity] = useState("");
    const [State, setState] = useState("");
    const [Password, setPassword] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [LegalCompanyName, setLegalCompanyName] = useState("");
    const [BusinessFilingStatus, setBusinessFilingStatus] = useState("");
    const [PAN_No, setPAN_No] = useState("");
    const [RegisteredAddress, setRegisteredAddress] = useState("");
    const [OperatingAddress, setOperatingAddress] = useState("");
    const [PayToName, setPayToName] = useState("")
    const [BankName, setBankName] = useState("");
    const [AccountNumber, setAccountNumber] = useState("");
    const [IFSC_Code, setIFSC_Code] = useState("");
    const [BranchAddress, setBranchAddress] = useState("");
    const [PanCard, setPanCard] = useState("");
    const [AddressProof, setAddressProof] = useState("");
    const [CancelCheque, setCancelCheque] = useState("");
    const [GovtCertificate, setGovtCertificate] = useState("");
    const [FoodLicence, setFoodLicence] = useState("");
    const [BusinessDocumnet, setBusinessDocumnet] = useState("");

    const vendorRegister = async () => {
       
        const BulkRegister = {
            VendorName,
            ContactNumber,
            EmailId,
            city,
            State,
            Password,
            CompanyName,
            LegalCompanyName,
            BusinessFilingStatus,
            PAN_No,
            RegisteredAddress,
            OperatingAddress,
            PayToName,
            BankName,
            AccountNumber,
            IFSC_Code,
            BranchAddress,
            PanCard,
            AddressProof,
            CancelCheque,
            GovtCertificate,
            FoodLicence,
            BusinessDocumnet

        }

        const bulk = await axios.post("https://admin.organicdeal.in/api/VendorApi/Add", BulkRegister);

        if (bulk.status === 200) {
            setVendorName("")
            setContactNumber("")
            setEmailId("")
            setCity("")
            setState("")
            setPassword("")
            setCompanyName("")
            setLegalCompanyName("")
            setBusinessFilingStatus("")
            setPAN_No("")
            setRegisteredAddress("")
            setOperatingAddress("")
            setPayToName("")
            setBankName("")
            setAccountNumber("")
            setIFSC_Code("")
            setBranchAddress("")
            setPanCard("")
            setAddressProof("")
            setCancelCheque("")
            setGovtCertificate("")
            setFoodLicence("")
            setBusinessDocumnet("")


        }
    }

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };
    return (
        <>
            <div className="breadcrumb-main ">
                <div className="">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-contain">
                                <div>
                                    <h2>Become A organicdeal Partner</h2>
                                    <ul>
                                        <li><a>home</a></li>
                                        <li><i className="fa fa-angle-double-right"></i></li>
                                        <li>create Account Here</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-big-py-space b-g-light">
                <div className="custom-container">
                    <div className="checkout-page contact-page">
                        <div className="checkout-form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-xs-12">

                                        {step === 1 && (
                                            <>
                                                <div className="checkout-title">
                                                    <h3>Fill Your All Personal  Details</h3>
                                                </div>
                                                <div className="theme-form">
                                                    <div className="row check-out ">

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>First Name *</label>
                                                            <input type="text"

                                                                name="field-name"
                                                                value={VendorName} onChange={(e) => setVendorName(e.target.value)}
                                                                placeholder="" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Mobile No *</label>
                                                            <input type="text"
                                                                value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)}
                                                                name="field-name"

                                                                placeholder="" />
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                            <label className="field-label">Email *</label>
                                                            <input type="text" 
                                                            name="field-name"
                                                            value={EmailId} onChange={(e) => setEmailId(e.target.value)}
                                                              placeholder="" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">City *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={city} onChange={(e) => setCity(e.target.value)}
                                                               placeholder="" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                            <label className="field-label">State *</label>
                                                            <select   value={State} onChange={(e) => setState(e.target.value)}>
                                                                <option>Select State</option>
                                                                <option>Delhi</option>
                                                                <option>Uttar Pradesh</option>
                                                                <option>Uttrakhand</option>
                                                                <option>Haryana</option>
                                                                <option>Madhya Pradesh</option>
                                                                <option>Kashmir</option>
                                                                <option>Rajasthan</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Password *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={Password} onChange={(e) => setPassword(e.target.value)}
                                                               placeholder="Password" />
                                                        </div>


                                                    </div>
                                                    <button type='button' className='p-3 mt-3 float-right bg-orange-600 w-40 text-white' onClick={handleNext}>Next</button>
                                                </div>
                                            </>

                                        )}
                                        {step === 2 && (
                                            <>
                                                <div className="checkout-title">
                                                    <h3>Fill Your Company  Details</h3>
                                                </div>
                                                <div className="theme-form">
                                                    <div className="row check-out ">

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Brand Name *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={CompanyName} onChange={(e) => setCompanyName(e.target.value)}
                                                               placeholder="Company Name" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Legal Company Name *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={LegalCompanyName} onChange={(e) => setLegalCompanyName(e.target.value)}
                                                               placeholder="Legal Company Name" />
                                                        </div>
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Business Filing Status *</label>
                                                            <select   value={BusinessFilingStatus} onChange={(e) => setBusinessFilingStatus(e.target.value)}>
                                                                <option>Select Business Filing Status</option>
                                                                <option>Proprietor</option>
                                                                <option>PartnerShip</option>
                                                                <option>Pvt Ltd</option>
                                                                <option>Ltd</option>
                                                                <option>Huf</option>

                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">PAN Details *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={PAN_No} onChange={(e) => setPAN_No(e.target.value)}
                                                               placeholder="Pan Card Number" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">Registered Address *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={RegisteredAddress} onChange={(e) => setRegisteredAddress(e.target.value)}
                                                              placeholder="Registered Address " />
                                                        </div>

                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <label className="field-label">Operating Address *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={OperatingAddress} onChange={(e) => setOperatingAddress(e.target.value)}
                                                               placeholder="Operating Address" />
                                                        </div>


                                                    </div>
                                                    <div className='space-x-4 flex float-right'>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' onClick={handlePrev}>Previous</button>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' onClick={handleNext}>Next</button>
                                                    </div>

                                                </div>
                                            </>

                                        )}

                                        {step === 3 && (
                                            <>
                                                <div className="checkout-title">
                                                    <h3>Fill Your Account  Details</h3>
                                                </div>
                                                <div className="theme-form">
                                                    <div className="row check-out ">

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Pay To Name *</label>
                                                            <input type="text" 
                                                            name="field-name"
                                                            value={PayToName} onChange={(e) => setPayToName(e.target.value)}
                                                             placeholder="Pay To Name" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label>Bank Name *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={BankName} onChange={(e) => setBankName(e.target.value)}
                                                               placeholder="Bank Name" />
                                                        </div>

                                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                            <label className="field-label">Account Number *</label>
                                                            <input type="text" 
                                                            name="field-name" 
                                                            value={AccountNumber} onChange={(e) => setAccountNumber(e.target.value)}
                                                            placeholder="Account Number" />
                                                        </div>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <label className="field-label">IFSC Code *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={IFSC_Code} onChange={(e) => setIFSC_Code(e.target.value)}
                                                               placeholder="IFSC Code " />
                                                        </div>

                                                        <div className="form-group col-md-6 mt-2 col-sm-12 col-xs-12">
                                                            <label className="field-label">Branch Address *</label>
                                                            <input type="text"
                                                             name="field-name"
                                                             value={BranchAddress} onChange={(e) => setBranchAddress(e.target.value)}
                                                               placeholder="Branch Address" />
                                                        </div>


                                                    </div>
                                                    <div className='space-x-4 flex float-right'>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' onClick={handlePrev}>Previous</button>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' onClick={handleNext}>Next</button>
                                                    </div>

                                                </div>
                                            </>

                                        )}

                                        {step === 4 && (
                                            <>
                                                <div className="checkout-title">
                                                    <h3>Upload Here All Document</h3>
                                                </div>
                                                <div className="theme-form">
                                                    <div className="row check-out ">
                                                        <p className='text-red-600'>All Document will be only png,jpg,jpeg formate</p>
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="pancard" className='mt-2'>Pan Card:</label><br />
                                                            <input type="file"
                                                              value={PanCard} onChange={(e) => setPanCard(e.target.value)}
                                                             name="Pan Card" /><br />
                                                        </div>
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="address proof" className='mt-2'>Address Proof:</label><br />
                                                            <input type="file"
                                                              value={AddressProof} onChange={(e) => setAddressProof(e.target.value)}
                                                             name="address" /><br />
                                                        </div>
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="username" className='mt-2'>Cancel Cheque:</label><br />
                                                            <input type="file"
                                                              value={CancelCheque} onChange={(e) => setCancelCheque(e.target.value)}
                                                             name="cheque" /><br />
                                                        </div>
                                                       
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="username" className='mt-2'>Government Issue Certificate Copy:</label><br />
                                                            <input type="file"
                                                              value={GovtCertificate} onChange={(e) => setGovtCertificate(e.target.value)}
                                                             name="copy" /><br />
                                                        </div>
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="username" className='mt-2'>Food Licence:</label><br />
                                                            <input type="file"
                                                              value={FoodLicence} onChange={(e) => setFoodLicence(e.target.value)}
                                                             id="username" name="username" /><br />
                                                        </div>
                                                        <div className='flex space-evenly space-x-6'>
                                                            <label for="username" className='mt-2'>Company Business Document:</label><br />
                                                            <input type="file" 
                                                              value={BusinessDocumnet} onChange={(e) => setBusinessDocumnet(e.target.value)}
                                                            id="username" name="username" /><br />
                                                        </div>



                                                    </div>
                                                    <div className='space-x-4 flex float-right'>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' onClick={handlePrev}>Previous</button>
                                                        <button type='button' className='p-3 mt-3  bg-orange-600 w-40 text-white' disabled={!VendorName}  onClick={(e) => vendorRegister()}>Submit Here</button>
                                                    </div>

                                                </div>
                                            </>

                                        )}
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SellerRegistration