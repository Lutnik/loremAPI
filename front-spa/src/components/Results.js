import React from 'react';
import PropTypes from 'prop-types';
import pStyle from '../css/pStyle';
import '../css/spinner.css';

const Results = ({ isLoading, contents }) => {
  const hover = (event) => {
    if (event.type === 'mouseenter') {
      event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
      event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    }
  };

  if (isLoading) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div className="lds-dual-ring" />
      </div>
    );
  }
  if (contents && !Array.isArray(contents.body)) {
    return <p> A following error has occured: {contents.body} </p>;
  }
  if (contents) {
    return (
      <section>
        { contents.body.map((w, i) => (
          <p
            style={pStyle.root}
            key={i}
            onMouseEnter={(e) => hover(e)}
            onMouseLeave={(e) => hover(e)}
          >
            { w }
          </p>
        )) }
        <p style={{ height: '50px' }} />
      </section>
    );
  }
  return null;
};

Results.propTypes = {
  isLoading: PropTypes.bool,
  contents: PropTypes.shape({
    status: PropTypes.number,
    body: PropTypes.arrayOf(PropTypes.string),
  }),
};

Results.defaultProps = {
  isLoading: false,
  contents: null,
};

export default Results;
