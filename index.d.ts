// Generated with: npm run prepare

declare namespace MJMLAttributes {

	interface Base {
		children?: any;
	}

	interface Body extends Base {
		'width'?: any;
		'background-color'?: any;
	}

	interface Breakpoint extends Base {
		'width'?: any;
	}

	interface Font extends Base {
		'name'?: any;
		'href'?: any;
	}

	interface Style extends Base {
		'inline'?: any;
	}

	interface Hero extends Base {
		'mode'?: any;
		'height'?: any;
		'background-url'?: any;
		'background-width'?: any;
		'background-height'?: any;
		'background-position'?: any;
		'container-background-color'?: any;
		'inner-background-color'?: any;
		'inner-padding'?: any;
		'inner-padding-top'?: any;
		'inner-padding-left'?: any;
		'inner-padding-right'?: any;
		'inner-padding-bottom'?: any;
		'padding'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'background-color'?: any;
		'vertical-align'?: any;
	}

	interface Button extends Base {
		'align'?: any;
		'background-color'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-radius'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'border'?: any;
		'color'?: any;
		'container-background-color'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-style'?: any;
		'font-weight'?: any;
		'height'?: any;
		'href'?: any;
		'name'?: any;
		'inner-padding'?: any;
		'letter-spacing'?: any;
		'line-height'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'rel'?: any;
		'target'?: any;
		'text-decoration'?: any;
		'text-transform'?: any;
		'vertical-align'?: any;
		'text-align'?: any;
		'width'?: any;
	}

	interface Column extends Base {
		'background-color'?: any;
		'border'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-radius'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'direction'?: any;
		'inner-background-color'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'inner-border'?: any;
		'inner-border-bottom'?: any;
		'inner-border-left'?: any;
		'inner-border-radius'?: any;
		'inner-border-right'?: any;
		'inner-border-top'?: any;
		'padding'?: any;
		'vertical-align'?: any;
		'width'?: any;
	}

	interface Divider extends Base {
		'border-color'?: any;
		'border-style'?: any;
		'border-width'?: any;
		'container-background-color'?: any;
		'padding'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'width'?: any;
	}

	interface Group extends Base {
		'background-color'?: any;
		'direction'?: any;
		'vertical-align'?: any;
		'width'?: any;
	}

	interface Image extends Base {
		'alt'?: any;
		'href'?: any;
		'name'?: any;
		'src'?: any;
		'srcset'?: any;
		'sizes'?: any;
		'title'?: any;
		'rel'?: any;
		'align'?: any;
		'border'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'border-radius'?: any;
		'container-background-color'?: any;
		'fluid-on-mobile'?: any;
		'padding'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'target'?: any;
		'width'?: any;
		'height'?: any;
		'max-height'?: any;
		'font-size'?: any;
		'usemap'?: any;
	}

	interface Section extends Base {
		'background-color'?: any;
		'background-url'?: any;
		'background-repeat'?: any;
		'background-size'?: any;
		'background-position'?: any;
		'background-position-x'?: any;
		'background-position-y'?: any;
		'border'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-radius'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'direction'?: any;
		'full-width'?: any;
		'padding'?: any;
		'padding-top'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'text-align'?: any;
		'text-padding'?: any;
	}

	interface Spacer extends Base {
		'border'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'container-background-color'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'height'?: any;
	}

	interface Text extends Base {
		'align'?: any;
		'background-color'?: any;
		'color'?: any;
		'container-background-color'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-style'?: any;
		'font-weight'?: any;
		'height'?: any;
		'letter-spacing'?: any;
		'line-height'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'text-decoration'?: any;
		'text-transform'?: any;
		'vertical-align'?: any;
	}

	interface Table extends Base {
		'align'?: any;
		'border'?: any;
		'cellpadding'?: any;
		'cellspacing'?: any;
		'container-background-color'?: any;
		'color'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-weight'?: any;
		'line-height'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'table-layout'?: any;
		'vertical-align'?: any;
		'width'?: any;
	}

	interface Wrapper extends Base {
		'background-color'?: any;
		'background-url'?: any;
		'background-repeat'?: any;
		'background-size'?: any;
		'background-position'?: any;
		'background-position-x'?: any;
		'background-position-y'?: any;
		'border'?: any;
		'border-bottom'?: any;
		'border-left'?: any;
		'border-radius'?: any;
		'border-right'?: any;
		'border-top'?: any;
		'direction'?: any;
		'full-width'?: any;
		'padding'?: any;
		'padding-top'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'text-align'?: any;
		'text-padding'?: any;
	}

	interface Social extends Base {
		'align'?: any;
		'border-radius'?: any;
		'container-background-color'?: any;
		'color'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-style'?: any;
		'font-weight'?: any;
		'icon-size'?: any;
		'icon-height'?: any;
		'icon-padding'?: any;
		'inner-padding'?: any;
		'line-height'?: any;
		'mode'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'table-layout'?: any;
		'text-padding'?: any;
		'text-decoration'?: any;
		'vertical-align'?: any;
	}

	interface SocialElement extends Base {
		'align'?: any;
		'background-color'?: any;
		'color'?: any;
		'border-radius'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-style'?: any;
		'font-weight'?: any;
		'href'?: any;
		'icon-size'?: any;
		'icon-height'?: any;
		'icon-padding'?: any;
		'line-height'?: any;
		'name'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'text-padding'?: any;
		'src'?: any;
		'srcset'?: any;
		'sizes'?: any;
		'alt'?: any;
		'title'?: any;
		'target'?: any;
		'text-decoration'?: any;
		'vertical-align'?: any;
	}

	interface Navbar extends Base {
		'align'?: any;
		'base-url'?: any;
		'hamburger'?: any;
		'ico-align'?: any;
		'ico-open'?: any;
		'ico-close'?: any;
		'ico-color'?: any;
		'ico-font-size'?: any;
		'ico-font-family'?: any;
		'ico-text-transform'?: any;
		'ico-padding'?: any;
		'ico-padding-left'?: any;
		'ico-padding-top'?: any;
		'ico-padding-right'?: any;
		'ico-padding-bottom'?: any;
		'padding'?: any;
		'padding-left'?: any;
		'padding-top'?: any;
		'padding-right'?: any;
		'padding-bottom'?: any;
		'ico-text-decoration'?: any;
		'ico-line-height'?: any;
	}

	interface NavbarLink extends Base {
		'color'?: any;
		'font-family'?: any;
		'font-size'?: any;
		'font-style'?: any;
		'font-weight'?: any;
		'href'?: any;
		'name'?: any;
		'target'?: any;
		'rel'?: any;
		'letter-spacing'?: any;
		'line-height'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
		'text-decoration'?: any;
		'text-transform'?: any;
	}

	interface Accordion extends Base {
		'container-background-color'?: any;
		'border'?: any;
		'font-family'?: any;
		'icon-align'?: any;
		'icon-width'?: any;
		'icon-height'?: any;
		'icon-wrapped-url'?: any;
		'icon-wrapped-alt'?: any;
		'icon-unwrapped-url'?: any;
		'icon-unwrapped-alt'?: any;
		'icon-position'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
	}

	interface AccordionElement extends Base {
		'background-color'?: any;
		'font-family'?: any;
		'icon-align'?: any;
		'icon-width'?: any;
		'icon-height'?: any;
		'icon-wrapped-url'?: any;
		'icon-wrapped-alt'?: any;
		'icon-unwrapped-url'?: any;
		'icon-unwrapped-alt'?: any;
		'icon-position'?: any;
	}

	interface AccordionText extends Base {
		'background-color'?: any;
		'font-size'?: any;
		'font-family'?: any;
		'font-weight'?: any;
		'letter-spacing'?: any;
		'line-height'?: any;
		'color'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
	}

	interface AccordionTitle extends Base {
		'background-color'?: any;
		'color'?: any;
		'font-size'?: any;
		'font-family'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'padding-top'?: any;
		'padding'?: any;
	}

	interface Carousel extends Base {
		'align'?: any;
		'border-radius'?: any;
		'icon-width'?: any;
		'left-icon'?: any;
		'padding'?: any;
		'padding-top'?: any;
		'padding-bottom'?: any;
		'padding-left'?: any;
		'padding-right'?: any;
		'right-icon'?: any;
		'thumbnails'?: any;
		'tb-border'?: any;
		'tb-border-radius'?: any;
		'tb-hover-border-color'?: any;
		'tb-selected-border-color'?: any;
		'tb-width'?: any;
	}

	interface CarouselImage extends Base {
		'alt'?: any;
		'href'?: any;
		'rel'?: any;
		'title'?: any;
		'src'?: any;
		'thumbnails-src'?: any;
		'border-radius'?: any;
		'tb-border'?: any;
		'tb-border-radius'?: any;
	}


}

declare namespace preact {
	export namespace JSX {
		export interface IntrinsicElements {
			
			mjml: MJMLAttributes.Base;
			
			'mj-body': MJMLAttributes.Body;
			'mj-head': MJMLAttributes.Base;
			'mj-attributes': MJMLAttributes.Base;
			'mj-breakpoint': MJMLAttributes.Breakpoint;
			'mj-html-attributes': MJMLAttributes.Base;
			'mj-font': MJMLAttributes.Font;
			'mj-preview': MJMLAttributes.Base;
			'mj-style': MJMLAttributes.Style;
			'mj-title': MJMLAttributes.Base;
			'mj-hero': MJMLAttributes.Hero;
			'mj-button': MJMLAttributes.Button;
			'mj-column': MJMLAttributes.Column;
			'mj-divider': MJMLAttributes.Divider;
			'mj-group': MJMLAttributes.Group;
			'mj-image': MJMLAttributes.Image;
			'mj-raw': MJMLAttributes.Base;
			'mj-section': MJMLAttributes.Section;
			'mj-spacer': MJMLAttributes.Spacer;
			'mj-text': MJMLAttributes.Text;
			'mj-table': MJMLAttributes.Table;
			'mj-wrapper': MJMLAttributes.Wrapper;
			'mj-social': MJMLAttributes.Social;
			'mj-social-element': MJMLAttributes.SocialElement;
			'mj-navbar': MJMLAttributes.Navbar;
			'mj-navbar-link': MJMLAttributes.NavbarLink;
			'mj-accordion': MJMLAttributes.Accordion;
			'mj-accordion-element': MJMLAttributes.AccordionElement;
			'mj-accordion-text': MJMLAttributes.AccordionText;
			'mj-accordion-title': MJMLAttributes.AccordionTitle;
			'mj-carousel': MJMLAttributes.Carousel;
			'mj-carousel-image': MJMLAttributes.CarouselImage;

		}
	}
}

