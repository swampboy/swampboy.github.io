import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = (props) => {
    const {to, children, ...rest} = props;

    const parseTo = (to) => {
        let parser = document.createElement('a');
        parser.href = to;
        return parser;
    }

    const isInternal = (to) =>  {
        // If it's a relative url such as '/path', 'path' and does not contain a protocol we can assume it is internal.
        if(to.indexOf("://")=== -1) return true;
        const toLocation = parseTo(to);
        return window.location.hostname === toLocation.hostname;
    }

    const isInternalLink = isInternal(to);

    if (isInternalLink) {
        return (<ReactRouterLink to={to} {...rest}>{children}</ReactRouterLink>);
    } else {
        return (<a href={to} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>);
    }
}

export default Link;