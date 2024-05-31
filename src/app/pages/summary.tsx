import React from 'react';

const Summary = () => {
    // Supongamos que los datos están almacenados en un estado global o en un contexto
    const data = {};

    return (
        <div className="container mx-auto p-4">
        <h2 className="text-2xl mb-4">Resumen</h2>
        {/* Renderiza todos los datos aquí */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Summary;