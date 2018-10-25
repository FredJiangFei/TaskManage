import { AlertController } from "ionic-angular";
import { ErrorHandler, Inject } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpErrorResponse } from "@angular/common/http";

export class MyErrorHandler implements ErrorHandler {
    constructor(
        @Inject(AlertController) private alerts: AlertController,
        @Inject(SplashScreen) public splashScreen: SplashScreen
    ) { }

    alertError(errorMsg: string) {
        const alert = this.alerts.create({
            title: 'An Error Has Occurred',
            subTitle: errorMsg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present();
    }

    async handleError(error) {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
                this.alertError(error.statusText);
                return;
            }

            const applicationError = error.headers.get('Application-Error');
            if (applicationError) {
                this.alertError(applicationError);
                return;
            }

            const serverError = error.error;
            let modalStateErrors = '';
            if (serverError && typeof serverError === 'object') {
                for (const key in serverError) {
                    if (serverError[key]) {
                        modalStateErrors += serverError[key] + '\n';
                    }
                }
            }
            this.alertError(modalStateErrors || serverError || 'Server Error');
        }
    }
}