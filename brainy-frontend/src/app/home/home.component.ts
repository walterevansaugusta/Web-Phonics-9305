import { UserService } from './../services/user.service';
import { CategoriesComponent } from './../categories/categories.component';
import { StateService } from './../services/state.service';
import { ICategory } from './../interfaces/phoneme.interface';
import { Categories } from './../constants/category.constants';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() logoutClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private stateService: StateService,
    private userService: UserService,
  ) { }

  categoryImgs: ICategory[] = Categories;

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          console.log(res['user']);
        },
        err => {}
      );
  }

  onLogout() {
    this.router.navigate([`../landing/`]);
  }

  onCategoryClick(image: ICategory) {
    this.stateService.categoryState = image;
    this.router.navigate(['category', image.key]);
  }

  onShowAll() {
    this.router.navigate(['category', 'all']);
  }
}
