/**
 * External dependencies
 */
import { omit } from 'lodash'
import { i18n } from 'stackable'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { addFilter } from '@wordpress/hooks'

// Remove text from block designs being applied.
addFilter( 'stackable.notification.design.no-text-attributes', 'stackable/notification', attributes => {
	return omit( attributes, [
		'title',
		'description',
		'buttonText',
	] )
} )

// Ignore these attributes when exporting / applying designs.
addFilter( 'stackable.notification.design.filtered-block-attributes', 'stackable/notification', attributes => {
	return omit( attributes, [
		'buttonUrl',
		'buttonNewTab',
		'buttonNoFollow',
	] )
} )

addFilter( 'stackable.notification.edit.designs', 'stackable/notification', designs => {
	return {
		...designs,
		corporateLight1: {
			label: __( 'Corporate Light 1', i18n ),
			image: 'https://gambitph.github.io/Stackable/assets/block-design-previews/stack-notification-design-corporate-light-01.jpg',
			attributes: {
				borderRadius: 0,
				columnBackgroundColor: '#ff550a',
				columnBackgroundColorOpacity: 0.8,
				titleFontFamily: 'Roboto Condensed',
				titleFontWeight: '100',
				titleLetterSpacing: 0.5,
				titleColor: '#ffd781',
				titleAlign: 'center',
				descriptionColor: '#ffffff',
				buttonFontFamily: 'Roboto Condensed',
				buttonLetterSpacing: 0.5,
				buttonSize: 'small',
				buttonTextColor: '#ffffff',
				buttonBackgroundColor: '#ffd781',
				buttonHoverEffect: 'lift',
				buttonBorderRadius: 100,
				buttonAlign: 'center',
				titleBottomMargin: 30,
				descriptionBottomMargin: 55,
				columnPaddingTop: 60,
				columnPaddingRight: 40,
				columnPaddingBottom: 60,
				columnPaddingLeft: 40,
				columnContentVerticalAlign: 'center',
				showBlockBackground: true,
				blockInnerWidth: 'center',
				align: 'full',
				blockBackgroundBackgroundColor: '#ffffff',
				contentAlign: 'left',
			},
		},
		corporateLight2: {
			label: __( 'Corporate Light 2', i18n ),
			image: 'https://gambitph.github.io/Stackable/assets/block-design-previews/stack-notification-design-corporate-light-02.jpg',
			attributes: {
				borderRadius: 0,
				columnBackgroundColor: '#c49732',
				columnBackgroundColorOpacity: 0.8,
				titleFontFamily: 'Roboto Condensed',
				titleFontWeight: '100',
				titleLetterSpacing: 0.5,
				titleColor: '#ffffff',
				titleAlign: 'center',
				descriptionColor: '#ffffff',
				buttonFontFamily: 'Roboto Condensed',
				buttonLetterSpacing: 0.5,
				buttonDesign: 'basic',
				buttonSize: 'small',
				buttonTextColor: '#ffffff',
				buttonBackgroundColor: '#1e55d3',
				buttonHoverEffect: 'lift',
				buttonBorderRadius: 100,
				buttonAlign: 'center',
				titleBottomMargin: 30,
				descriptionBottomMargin: 55,
				columnPaddingTop: 60,
				columnPaddingRight: 40,
				columnPaddingBottom: 60,
				columnPaddingLeft: 40,
				columnContentVerticalAlign: 'center',
				showBlockBackground: true,
				blockInnerWidth: 'center',
				align: 'full',
				blockBackgroundBackgroundColor: '#ffffff',
				contentAlign: 'left',
			},
		},
		corporateDark1: {
			label: __( 'Corporate Dark 1', i18n ),
			image: 'https://gambitph.github.io/Stackable/assets/block-design-previews/stack-notification-design-corporate-dark-01.jpg',
			attributes: {
				borderRadius: 0,
				columnBackgroundColor: '#0c4887',
				columnBackgroundColorOpacity: 0.8,
				titleFontFamily: 'Roboto Condensed',
				titleFontWeight: '100',
				titleLetterSpacing: 0.5,
				titleAlign: 'center',
				buttonFontFamily: 'Roboto Condensed',
				buttonLetterSpacing: 0.5,
				buttonDesign: 'basic',
				buttonSize: 'small',
				buttonTextColor: '#3f4174',
				buttonBackgroundColor: '#c4e558',
				buttonHoverEffect: 'lift',
				buttonBorderRadius: 100,
				buttonAlign: 'center',
				titleBottomMargin: 30,
				descriptionBottomMargin: 55,
				columnPaddingTop: 60,
				columnPaddingRight: 40,
				columnPaddingBottom: 60,
				columnPaddingLeft: 40,
				columnContentVerticalAlign: 'center',
				showBlockBackground: true,
				blockInnerWidth: 'center',
				align: 'full',
				blockBackgroundBackgroundColor: '#081831',
				contentAlign: 'left',
			},
		},
		corporateDark2: {
			label: __( 'Corporate Dark 2', i18n ),
			image: 'https://gambitph.github.io/Stackable/assets/block-design-previews/stack-notification-design-corporate-dark-02.jpg',
			attributes: {
				borderRadius: 0,
				columnBackgroundColor: '#707070',
				columnBackgroundColorOpacity: 0.8,
				titleFontFamily: 'Roboto Condensed',
				titleFontWeight: '100',
				titleLetterSpacing: 0.5,
				titleColor: '#06c19d',
				titleAlign: 'center',
				descriptionColor: '#ffffff',
				buttonFontFamily: 'Roboto Condensed',
				buttonLetterSpacing: 0.5,
				buttonSize: 'small',
				buttonTextColor: '#ffffff',
				buttonBackgroundColor: '#06c19d',
				buttonHoverEffect: 'lift',
				buttonBorderRadius: 100,
				buttonAlign: 'center',
				titleBottomMargin: 30,
				descriptionBottomMargin: 55,
				columnPaddingTop: 60,
				columnPaddingRight: 40,
				columnPaddingBottom: 60,
				columnPaddingLeft: 40,
				columnContentVerticalAlign: 'center',
				showBlockBackground: true,
				blockInnerWidth: 'center',
				align: 'full',
				blockBackgroundBackgroundColor: '#2f2f2f',
				contentAlign: 'left',
			},
		},
	}
} )
