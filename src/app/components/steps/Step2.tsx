import React, { useState } from 'react';

interface StepProps {
    nextStep: () => void;
    prevStep: () => void;
}

const Step2: React.FC<StepProps> = ({ nextStep, prevStep }) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const isValid = () => {
        return street && city && postalCode && country;
    };

    return (
        <div>
        <h2 className="text-2xl mb-4">Address</h2>
        <input
            type="text"
            placeholder="Street Address"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="border p-2 mb-4 w-full"
        />
        <select
            aria-label="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-2 mb-4 w-full"
        >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
        </select>
        <div className="flex justify-between">
            <button onClick={prevStep} className="p-2 bg-gray-500 text-white">Anterior</button>
            <button
            onClick={nextStep}
            disabled={!isValid()}
            className={`p-2 ${!isValid() ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default Step2;