import React, { useState } from 'react';

interface Props {
  placeholder: string;
  type? : string;
  id: string;
}

const Input = ({ placeholder,type = "text",id }: Props) => {
  const [inputValue, setInputValue] = useState('');
const x =`
    #label
    {
      margin-top: 40px;
      font-size: 25px;
      // margin-right: 200px;
      color: white;
      // float: left;
      align-self: flex-start;
      margin-left: 30px;
      // float: left;
      // width: 10em;
      // margin-right: 3em;
    }
`
  return (
    <React.Fragment>
      <style>
        {x}
      </style>
      
      <label id="label">{placeholder}</label>
      <input id={id}
        placeholder={placeholder}
        value={inputValue}
        type = {type}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </React.Fragment>
  );
};

export default Input;