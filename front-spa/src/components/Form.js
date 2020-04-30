import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import formStyle from '../css/formStyle';

const Form = ({ formHandler }) => {
  const label = useRef();
  const par = useRef();

  const polishIsHard = (val) => {
    if (val === '1') {
      label.current.textContent = 'paragraf';
      par.current[0].textContent = 'krótki';
      par.current[1].textContent = 'średni';
      par.current[2].textContent = 'długi';
    } else if (val === '5') {
      label.current.textContent = 'paragrafów';
      par.current[0].textContent = 'krótkich';
      par.current[1].textContent = 'średnich';
      par.current[2].textContent = 'długich';
    } else {
      label.current.textContent = 'paragrafy ';
      par.current[0].textContent = 'krótkie ';
      par.current[1].textContent = 'średnie ';
      par.current[2].textContent = 'długie  ';
    }
  };

  return (
    <form onSubmit={formHandler} style={formStyle.form}>
      <select
        defaultValue={3}
        style={formStyle.select}
        onChange={(e) => polishIsHard(e.target.value)}
        required
      >
        <option> 1 </option>
        <option> 2 </option>
        <option> 3 </option>
        <option> 4 </option>
        <option> 5 </option>
      </select>
      <select
        defaultValue="50"
        ref={par}
        style={{ ...formStyle.select, width: '6em' }}
        required
      >
        <option value="20" id="kr"> krótkie </option>
        <option value="50" id="sr"> średnie </option>
        <option value="80" id="dl"> długie </option>
      </select>
      <label style={formStyle.label} ref={label}> paragrafy </label>
      <button style={formStyle.select} type="submit"> poproszę </button>
    </form>
  );
};

Form.propTypes = {
  formHandler: PropTypes.func.isRequired,
};

export default Form;
