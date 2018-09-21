import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResoures = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('boy', ds.bypassSecurityTrustResourceUrl('assets/portraits/boy.svg'));
    ir.addSvgIcon('jenny', ds.bypassSecurityTrustResourceUrl('assets/portraits/jenny.svg'));
    ir.addSvgIcon('lily', ds.bypassSecurityTrustResourceUrl('assets/portraits/lily.svg'));
    ir.addSvgIcon('man', ds.bypassSecurityTrustResourceUrl('assets/portraits/man.svg'));
    ir.addSvgIcon('sugar', ds.bypassSecurityTrustResourceUrl('assets/portraits/sugar.svg'));
};
