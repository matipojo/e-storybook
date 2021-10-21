import React from 'react';;

import './color-swatch.scss';

export default function ColorSwatch( props ) {
	const style = {
		'--color-swatch--background-color': props.swatch,
		'--color-swatch--dark-background-color': props.swatchDark,
	};

	return (
		<div className="ui-c-color-swatch__item">
			<div className="ui-c-color-swatch__swatch" style={ style }></div>
			<h3 className="ui-c-color-swatch__caption ui-c-color-swatch__caption--name">{ props.title }</h3>
			<h3 className="ui-c-color-swatch__caption ui-c-color-swatch__caption--light">Light: { props.swatch }</h3>
			<h3 className="ui-c-color-swatch__caption ui-c-color-swatch__caption--dark">Dark: { props.swatchDark }</h3>
		</div>
	);
}