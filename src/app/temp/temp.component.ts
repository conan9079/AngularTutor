import { Component, OnInit } from '@angular/core';
import {Dish} from '../../shared/dish';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  isCooked = false;
  material1: string;
  material2: string;
  finalDish: string;
  dishes: Dish[] = [new Dish('西红柿', '鸡蛋', '西红柿炒鸡蛋'),
    new Dish('鸡蛋', '木耳', '鸡蛋炒木耳'),
    new Dish('青椒', '土豆丝', '青椒炒土豆丝'),
    new Dish('西红柿', '', '凉拌西红柿'),
    new Dish('鸡蛋', '', '煎鸡蛋')];

  resetDishes() {
    this.isCooked = false;
    this.material1 = null;
    this.material2 = null;
  }

  cookDishes() {
    this.isCooked = true;
    if (this.material1 == null) {
      this.material1 = '';
    }
    if (this.material2 == null) {
      this.material2 = '';
    }
    if (this.material1 === '' && this.material2 === '') {
      this.finalDish = '爆炒空气！！！';
      return;
    }
    for (const item of this.dishes) {
      if (this.material1.trim() === item.material1 && this.material2.trim() === item.material2) {
        this.finalDish = item.dish;
        return;
      } else if (this.material1.trim() === item.material2 && this.material2.trim() === item.material1) {
        this.finalDish = item.dish;
        return;
      }
    }
    if (this.material1 === '') {
      this.finalDish = '黑暗料理: 爆炒' + this.material2;
    } else if (this.material2 === '') {
      this.finalDish = '黑暗料理: 爆炒' + this.material1;
    } else {
      this.finalDish = '黑暗料理: ' + this.material1 + '炒' + this.material2;
    }
  }

  ngOnInit() {
  }

}
