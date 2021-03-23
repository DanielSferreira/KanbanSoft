import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  profileActions: Array<PoToolbarAction>;

  title: string = 'Dashboard';

  normal = [
    { icon: 'po-icon-user', label: 'Account', action: () => this.route.navigate(['/account']) },
    { icon: 'po-icon-pallet-full', label: 'Panel', action: () => this.route.navigate(['/dashboard']) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.login.Logout() }
  ];

  admin = [
    { icon: 'po-icon-user', label: 'Account', action: () => this.route.navigate(['/account']) },
    { icon: 'po-icon-pallet-full', label: 'Panel', action: () => this.route.navigate(['/dashboard']) },
    { icon: 'po-icon-waiter', label: 'Admin', action: () => this.route.navigate(['/admin']) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.login.Logout() }
  ]

  constructor(private login: LoginServiceService, private route: Router) {
    this.lg = this.login.Decode();

    this.profile = {
      avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
      title: this.lg.unique_name,
      subtitle: this.lg.role,
    }
    this.profileActions = this.lg.role === "normal" ? this.normal : this.admin;
  }

}
