import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './statuslight.styles';
import standardTemplate from './statuslight.template';

@customElement('sp-statuslight')
export class Statuslight extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: String }) public type: string = '';
  @property({ type: String }) public label: string = '';
  
  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-statuslight': Statuslight;
  }
}
