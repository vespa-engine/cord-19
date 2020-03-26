import React from 'react';
import { Link as InternalLink } from '@reach/router';

function Link({ to, ...props }) {
  if ('download' in props)
    return (
      <a {...props} href={to}>
        {props.children}
      </a>
    );
  if (to && !to.startsWith('http') && !to.startsWith('/api/'))
    return <InternalLink to={to} {...props} />;
  return (
    <a target="_blank" rel="noopener noreferrer" {...props} href={to}>
      {props.children}
    </a>
  );
}

export default Link;
