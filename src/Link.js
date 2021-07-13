import React from 'react';

const Link = ({name, link}) => {
  return (<a href={link}>{name}</a>)
}

export default Link;