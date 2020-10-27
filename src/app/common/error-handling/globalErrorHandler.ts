import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LoggingService } from '../services/logging.service'; 

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(
        private injector: Injector,
        private loggingService: LoggingService) {
    }

    handleError(error: Error | HttpErrorResponse){
        if(error instanceof HttpErrorResponse){
            //show notification alert
            //log error
        }else{
            this.loggingService.Logger(error);//log error
        }
    }
}
// import { ErrorHandler, Injectable, Injector } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';

// import { LoggingService } from '../services/logging.service';

// @Injectable()
// export class GlobalErrorHandler implements ErrorHandler{

//     // Error handling is important and needs to be loaded first.
//     // Because of this we should manually inject the services with Injector.
//     constructor(
//         private injector: Injector,
//         private loggingService: LoggingService) {
//     }

//     handleError(error: Error | HttpErrorResponse){
//         if(error instanceof HttpErrorResponse){
//             this.loggingService.Logger(error);
//         }else{
//             this.loggingService.Logger(error);
//         }
//     }
// }