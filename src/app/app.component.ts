import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProje';
  constructor(private toastreService: CustomToastrService){
    toastreService.message("Merhaba", "Harunm",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopRight
    });
    toastreService.message("Merhaba", "Harunm", {
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopRight
    });
    toastreService.message("Merhaba", "Harunm", {
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.TopRight
    });
    toastreService.message("Merhaba", "Harunm", {
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopRight
    });
  }
}

