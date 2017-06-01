import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service'
import { PortfolioItem } from '../../models/portfolio-item'

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {}

  portfolios: PortfolioItem[] = [];

  loadFakePortfolios() {
    for(var i = 0; i < 10; i++){
      var item = new PortfolioItem();
      item.name = "testname" + i;
      item.filename = "testfilename" + i;
      this.portfolios.push(item);
    }
  }

  ngOnInit() {
    this.portfolioService.getAllPortfolios().subscribe(portfolios => {
      //this.portfolios = portfolios;
      this.loadFakePortfolios();
    });
  }

}
