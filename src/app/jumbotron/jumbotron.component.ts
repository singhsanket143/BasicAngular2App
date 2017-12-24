import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = 'Hello World';
    this.jbtText = 'There is a reason why we take pride in branding ourselves the best programming language institute in Delhi. Our instructors, graduates from Stanford University, IITs, IIITs, are Master craftsmen with years of industry experience at Facebook, Amazon, American Express, Times Internet, etc. At Coding Ninjas, our mission is to continuously innovate the best ways to train the next generation of developers and to transform the way tech education is delivered. We’re constantly evolving the ways in which we train amazing developers, as staying stagnant is not an option.';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';
  }

  ngOnInit() {
  }

}
