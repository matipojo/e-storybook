import React from 'react';
import ColorSwatch from 'e-storybook/view/components/color-swatch';
import Utils from 'e-storybook/view/utils/utils';

import CssGrid from 'elementor-app/ui/atoms/css-grid';

export default {
	title: 'Base/Color',
	component: ColorSwatch,
};

const getRootCSSVariable = (styleSheets = document.styleSheets) => {
	var cssVars = [];

	// loop each stylesheet.
	for ( let i = 0; i < styleSheets.length; i++ ){
		// loop stylesheet's cssRules.
		try { // try/catch used because 'hasOwnProperty' doesn't work
			for ( let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
				try {
					// loop stylesheet's cssRules' style (property names).
					for ( let k = 0; k < styleSheets[i].cssRules[j].style.length; k++ ){
						let name = styleSheets[i].cssRules[j].style[k];

						// test name for css variable signature and uniqueness.
						if( name.startsWith('--') && cssVars.indexOf(name) === -1 ){
							cssVars.push( name );
						}
					}
				} catch ( error ) {}
			}
		} catch ( error ) {}
	}
	return cssVars;
};


// This solution is pending for moving all components CSS vars declarations from :root to the components level.
const colorsPending = getRootCSSVariable().map( ( cssVar ) => {
	return {
		title: Utils.dashCaseToSpacesPascalCase( cssVar.replace( '--', '' ) ),
		color: `var(${ cssVar })`
	};
} );

const colors = [
	{ title: 'success', color: '#39b54a', dark: '#39b54a' },
	{ title: 'warning', color: '#fcb92c', dark: '#fcb92c' },
	{ title: 'danger', color: '#b01b1b', dark: '#F84343' },
	{ title: 'cta', color: '#93003F', dark: '#93003F' },
	{ title: 'info', color: '#58d0f5', dark: '#58d0f5' },
	{ title: 'dark', color: '#000', dark: '#000' },
	{ title: 'text-muted', color: '#d5dadf', dark: '#7d7e82' },
	{ title: 'disabled', color: '#c2cbd2', dark: '#64666a' },
	{ title: 'light', color: '#fff', dark: '#fff' },
];

const tints = [
	{ title: '800', color: '#495157', dark: '#26292C' },
	{ title: '700', color: '#556068', dark: '#34383c' },
	{ title: '600', color: '#6d7882', dark: '#404349' },
	{ title: '500', color: '#a4afb7', dark: '#4c4f56' },
	{ title: '400', color: '#c2cbd2', dark: '#64666a' },
	{ title: '300', color: '#d5dadf', dark: '#7d7e82' },
	{ title: '200', color: '#f1f3f5', dark: '#b4b5b7' },
	{ title: '100', color: '#fcfcfc', dark: '#e0e1e3' },
];

const sections = [
	{ title: 'Theme Colors', data: colors },
	{ title: 'Tints', data: tints },
];

export const Palette = () => (
	<>
		{
			sections.map( ( section ) => (
				<section key={ section.title }>
					<h1>{ section.title }</h1>
					<CssGrid columns={9} colMinWidth={50} spacing={0}>
						{
							section.data.map( ( swatch, index ) => (
								<ColorSwatch
									key={ index }
									title={ Utils.dashCaseToSpacesPascalCase( `${ swatch.title }` ) }
									swatch={ swatch.color }
									swatchDark={ swatch.dark }
								/>
							) )
						}
					</CssGrid>
				</section>
			) )
		}
	</>
);