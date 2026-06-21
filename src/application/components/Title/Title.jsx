import React from 'react';
import PropTypes from 'prop-types';
import Heading from './styles';

const CreateTitle = ({ Type, Content }) => {
  const Tag = `h${Type}`;
  return (
    <Heading>
      <Tag> {Content} </Tag>
    </Heading>
  );
};

CreateTitle.propTypes = {
  Type: PropTypes.number.isRequired,
  Content: PropTypes.string.isRequired
};
export default CreateTitle;
