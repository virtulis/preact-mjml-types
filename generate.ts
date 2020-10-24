import * as ucc from 'uppercamelcase';
import { writeFileSync } from 'fs';

require('mjml');
const { components } = require('mjml-core');
const entries = Object.entries(components) as [string, any][];

const code = `// Generated with: npm run prepare

declare namespace MJMLAttributes {

interface Base {
	children?: any;
}
${entries.map(([tag, comp]) =>
comp.allowedAttributes ?
`
interface ${ucc(tag.slice(3))} extends Base {
		
${Object.keys(comp.allowedAttributes).map(key =>
`	'${key}'?: any;
`).join('')}
}
` : ''
).join('')}

}

declare namespace preact {
	export namespace JSX {
		export interface IntrinsicElements {
			
			mjml: MJMLAttributes.Base;
${entries.map(([tag, comp]) => 
`			'${tag}': MJMLAttributes.${comp.allowedAttributes ? `${ucc(tag.slice(3))}` : 'Base'};
`
).join('')}
		}
	}
}

`;

writeFileSync('index.d.ts', code);
