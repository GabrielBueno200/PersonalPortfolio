import Select, { Props as SelectProps, StylesConfig } from 'react-select'

interface IComboboxProps extends SelectProps {}

const Combobox = (props: IComboboxProps) => {
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgb(24 24 27 / var(--tw-bg-opacity))',
      border: !state.isFocused ? '1px solid #00CC00' : '1px solid green',
      borderRadius: '4px',
      '&:hover': {
        border: '1px solid green'
      },
      '& *': {
        color: '#FFF!important'
      },
      boxShadow: 'none'
    }),
    option: (provided, state) => ({
      color: '#FFF',
      padding: '.5em',
      '&:hover': {
        backgroundColor: '#00CC00',
        color: '#FFF'
      }
    }),
    menu: (provided, state) => ({
      ...provided,
      background: 'rgb(24 24 27 / var(--tw-bg-opacity))'
    })
  }

  return <Select {...props} styles={customStyles} />
}

export default Combobox

