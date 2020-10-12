import { html } from 'lit-element';
import { DemoStatuslight } from './demo-statuslight.component';

import '@spectrum/sp-statuslight';
import '@spectrum/sp-container';


export default function template(this: DemoStatuslight) {
  return html`
  <sp-container>

      <sp-rule medium label="Colors"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="celery" label="Celery Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="yellow" label="Yellow Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="fuchsia" label="Fuchsia Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="indigo" label="Indigo Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="seafoam" label="Seafoam Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="chartreuse" label="Chartreuse Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="magenta" label="Magenta Status"></sp-statuslight></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-statuslight type="purple" label="Purple Status"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Neutral"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="neutral" label="Paused"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Info"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="info" label="Active"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Positive"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="positive" label="Approved"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Notice"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="notice" label="Needs Approval"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Negative"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="negative" label="Rejected"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Disabled"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="disabled" label="Disabled"></sp-statuslight></pre>
      </sp-demo>

      <sp-rule medium label="Active"></sp-rule>

      <sp-demo width="200">
        <pre><sp-statuslight type="active" label="Active"></sp-statuslight></pre>
      </sp-demo>

  </sp-container>
  
  `;
  
}
