import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './statuslight.styles';
import standardTemplate from './statuslight.template';
let Statuslight = class Statuslight extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.label = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Statuslight.componentStyles = [labelStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Statuslight.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Statuslight.prototype, "label", void 0);
Statuslight = __decorate([
    customElement('sp-statuslight')
], Statuslight);
export { Statuslight };
//# sourceMappingURL=statuslight.component.js.map