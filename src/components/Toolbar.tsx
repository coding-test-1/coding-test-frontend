import React from 'react';

// import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@atlaskit/select';
const Toolbar = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    
    <div 
      style={{
        display: 'flex',
        height: '40px',
        boxShadow: 'inset rgb(0 0 0 / 21%) -2px -1px 3px',
        gap:'20px'
      }}
    >
        <Select
      inputId="single-select-example"
      className="single-select"
      classNamePrefix="react-select"
      options={[
        { label: 'C', value: 'c' },
        { label: 'C++', value: 'cpp' },
        { label: 'Java', value: 'java' },
      ]}
      spacing='compact'
    />
    </div>
  );
};

export default Toolbar;
