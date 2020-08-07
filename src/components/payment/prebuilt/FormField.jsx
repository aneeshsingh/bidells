import React, { useState }  from 'react';


const Label = ``;

const Input = ``;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </>
  );
};

export default FormField;
