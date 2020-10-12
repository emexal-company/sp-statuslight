import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Statuslight } from './statuslight.component';

export default function standardTemplate(this: Statuslight) {
    
    const classes = {
        'spectrum-StatusLight--celery': this.type === 'celery',
        'spectrum-StatusLight--yellow': this.type === 'yellow',
        'spectrum-StatusLight--fuchsia': this.type === 'fuchsia',
        'spectrum-StatusLight--indigo': this.type === 'indigo',
        'spectrum-StatusLight--seafoam': this.type === 'seafoam',
        'spectrum-StatusLight--chartreuse': this.type === 'chartreuse',
        'spectrum-StatusLight--magenta': this.type === 'magenta',
        'spectrum-StatusLight--purple': this.type === 'purple',
        'spectrum-StatusLight--neutral': this.type === 'neutral',
        'spectrum-StatusLight--info': this.type === 'info',
        'spectrum-StatusLight--positive': this.type === 'positive',
        'spectrum-StatusLight--notice': this.type === 'notice',
        'spectrum-StatusLight--negative': this.type === 'negative',
        'spectrum-StatusLight--active': this.type === 'active',
        'is-disabled': this.type === 'disabled',
    };

return html`
<div class="spectrum-StatusLight ${classMap(classes)}">${this.label}</div>
   `;
}
