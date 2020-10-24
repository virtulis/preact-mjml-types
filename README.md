# Preact MJML types

A quick and dirty hack to allow mj-* tags and corresponding attributes in Preact TSX (as intrinsic elements, not components).

## Installation

    npm install preact-mjml-types
    
## Usage

    import { h } from 'preact';
    import 'preact-mjml-types'; // *must* go after 'preact'
    
    import { render } from 'preact-render-to-string';
    import mjml2html = require('mjml');
    
    import { userInfo } from 'os';
    
    const mjmlVNodes = <mjml>
        <mj-body>
            <mj-section background-color="white">
                <mj-text>This seems to work, {userInfo().username}!</mj-text>
            </mj-section>
        </mj-body>
    </mjml>;
    
    const mjmlCode = render(mjmlVNodes);
    console.log(mjmlCode);
    
    const result = mjml2html(mjmlCode);
    console.log(result.html);

## License

MIT
