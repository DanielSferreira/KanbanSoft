import { Component } from '@angular/core';
import { PoToolbarAction, PoToolbarProfile, PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { TokenData } from 'src/interfaces/TaskTemplate';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  public lg: TokenData;
  profile: PoToolbarProfile;

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.login.Logout() }
  ];

  title: string = 'Dashboard';

  constructor(private login: LoginServiceService) {
    this.lg = this.login.Decode();

    this.profile = {
      avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
      title: this.lg.unique_name,
      subtitle: this.lg.role,
    }
  }

}
