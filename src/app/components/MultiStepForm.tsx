"use client"

import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4A from './steps/Step4A';
import Step4B from './steps/Step4B';
import Step5 from './steps/Step5';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleData = (data) => {
        setFormData({ ...formData, ...data });
    };

    return (
        <div className="container mx-auto p-4">
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && formData.userProfile === 'Personal' && <Step4A nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && formData.userProfile === 'Business' && <Step4B nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 prevStep={prevStep} />}
        </div>
    );
};

export default MultiStepForm;