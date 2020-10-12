import { Base } from '@spectrum/sp-base';
export declare class Statuslight extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    type: string;
    label: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-statuslight': Statuslight;
    }
}
