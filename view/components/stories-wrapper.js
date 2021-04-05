import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from '@eps/theme';
import Box from 'elementor-app/ui/atoms/box';

import '../assets/lib/e-select2/js/e-select2.full.min';
import '../assets/lib/e-select2/css/e-select2.min.css';
import '../assets/lib/eicons/css/elementor-icons.css';
import '../assets/css/app.css';
import '../assets/css/app-rtl.css';

import './stories-wrapper.scss';

export default function StoriesWrapper( props ) {
	const epsTheme = createMuiTheme( theme );

	const wrapperProps = {
		className: `e-storybook__stories-wrapper${ props.dark ? ' eps-theme-dark' : '' }`,
	};

	if ( props.rtl ) {
		wrapperProps[ 'dir' ] = 'rtl';
	}

	// Currently this object is being used in the select2 source component
	window.elementorCommon = {
		config: {
			isRTL: props.rtl,
		}
	};

	useEffect( () => {
		// First we need to remove the RTL file from the DOM, only then we'll be able to make the switch between the files.
		const initialRtlCSSElement = document.querySelector( `[href="app-rtl.css"]:not(.direction-css)` );

		if ( initialRtlCSSElement ) {
			initialRtlCSSElement.parentNode.removeChild( initialRtlCSSElement );

			document
				.querySelector( `[href="app.css"]` )
				.setAttribute( 'class', 'direction-css-file' );
		}

		// Moving the main.css before the app CSS.
		const mainCssElement = document.querySelector( `[href="main.css"]` );

		mainCssElement.parentNode.insertBefore( mainCssElement, document.querySelector( '.direction-css-file' ) );
	}, [] );

	useEffect( () => {
		const directionCSSElement = document.querySelector( '.direction-css-file' ),
			directionCSSElementHref = directionCSSElement.getAttribute( 'href' ),
			rtlFileName = 'app-rtl.css',
			ltrFileName = 'app.css';

		// Making a switch between RTL and LTR CSS files.
		if ( props.rtl && rtlFileName !== directionCSSElementHref ) {
			directionCSSElement.setAttribute( 'href', rtlFileName );
		} else if ( ltrFileName !== directionCSSElementHref ) {
			directionCSSElement.setAttribute( 'href', ltrFileName );
		}
	}, [ props.rtl ] );

	return (
		<ThemeProvider theme={ epsTheme }>
			<div { ...wrapperProps }>
				<Box padding="30">
					<div>
						{ props.children }
					</div>
				</Box>
			</div>
		</ThemeProvider>
	);
}