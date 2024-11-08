import Select from 'react-select';
import { StylesConfig } from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface FilterSelectProps {
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
  placeholder?: string;
}

const customStyles: StylesConfig<Option, false> = {
  control: (base) => ({
    ...base,
    minWidth: '250px',
    borderRadius: '0.5rem',
    borderColor: '#e2e8f0',
    '&:hover': {
      borderColor: '#cbd5e1',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#e2e8f0' : 'white',
    '&:active': {
      backgroundColor: '#3b82f6',
    },
  }),
};

const FilterSelect = ({ options, value, onChange, placeholder }: FilterSelectProps) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isClearable
      styles={customStyles}
      className="w-full"
    />
  );
};

export default FilterSelect; 