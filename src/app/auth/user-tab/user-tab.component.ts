import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent {
  title = 'login';
  tabOption=1

  ngOnInit(): void {

  }

  onTabChange(tab:number){
    this.tabOption = tab
  }
}
