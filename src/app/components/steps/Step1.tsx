import React, { useState } from 'react';

interface StepProps {
    nextStep: () => void;
}

const Step1: React.FC<StepProps> = ({ nextStep }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const isValid = () => {
        return fullName.split(' ').length >= 2 && /\S+@\S+\.\S+/.test(email) && /^\d{10}$/.test(phone);
    };

    return (
        <div>
        <h2 className="text-2xl mb-4">Personal Information</h2>
        <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <button
            onClick={nextStep}
            disabled={!isValid()}
            className={`p-2 w-full ${!isValid() ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
            Siguiente
        </button>
        </div>
    );
};

export default Step1;