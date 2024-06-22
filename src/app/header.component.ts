import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
