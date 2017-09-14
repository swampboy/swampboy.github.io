import React from 'react';
import PropTypes from 'prop-types';
import svg4everybody from 'svg4everybody';
import iconData from './icon-defs';

if (global.window) {
	svg4everybody();
}

const Icon = (props) => {
	const iconDetail = iconData[props.name];
	if (!iconDetail) {
		throw Error(`Svg named '${props.name}' not found`);
	}
	const iconPath = iconDetail.path;
	const iconViewBox = iconDetail.viewBox;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			className={props.className}
			title={props.name}
			fill={props.fill}
			height={props.size}
			width={props.size}
			stroke={props.stroke}
			strokeWidth={props.strokeWidth}
			viewBox={props.viewBox || iconViewBox}
		>
			<path d={iconPath} />
		</svg>
	);
};

Icon.propTypes = {
	/** An optional className to be added to the Column element. */
	className: PropTypes.string,
	/**  A size for the icon, must include a valid CSS unit. */
	size: PropTypes.string,
	/** The name of the icon, used as an identifier to load the image. */
	name: PropTypes.string,
	/** The icon fill color, a valid CSS color value. */
	fill: PropTypes.string,
	/** The icon stroke color, a valid CSS color value. */
	stroke: PropTypes.string,
	/** The icon stroke, must include a valid CSS unit. */
	strokeWidth: PropTypes.string,
	/** The icon viewbox. Will use default for icon if not given. */
	viewBox: PropTypes.string,
};

Icon.defaultProps = {
	className: null,
	fill: null,
	stroke: null,
	strokeWidth: '0.025rem',
	viewBox: null,
	size: '1em',
	name: 'j',
};

export default Icon;
