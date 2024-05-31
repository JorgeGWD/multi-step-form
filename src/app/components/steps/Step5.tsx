import React from 'react';

interface StepProps {
  prevStep: () => void;
}

const Step5: React.FC<StepProps> = ({ prevStep }) => {
    const handleSubmit = async () => {
        const data = {
        /* Collect all the data from previous steps */
        };
        const response = await fetch('API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        });
        if (response.ok) {
        // Redirect to summary page
        } else {
        // Handle error
        }
    };

    return (
        <div>
        <h2 className="text-2xl mb-4">Summary</h2>
        {/* Display summary of all data */}
        <button onClick={prevStep} className="p-2 bg-gray-500 text-white">Previous</button>
        <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white">Send </button>
        </div>
    );
};

export default Step5;