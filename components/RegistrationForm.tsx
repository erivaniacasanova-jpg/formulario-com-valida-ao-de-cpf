import React from "react";

export const RegistrationForm = ({ representative }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulário</h1>
      <p className="mb-2">Representante: {representative?.name}</p>
      <p className="mb-4 text-gray-600 text-sm">
        (Componente RegistrationForm criado apenas para evitar erro de compilação)
      </p>
    </div>
  );
};
