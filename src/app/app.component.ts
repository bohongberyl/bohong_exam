import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild("sidenav") sidenav: any;
  title = '品牌电器销售统计表';
  now = new Date();
}
