import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  sections = [
    {
      "title": "Section 1 - Strategy & Planning",
      "questions": [
        {
          "title": "Have Annual Quality Targets been agreed and submitted to Electrolux and/or other customers?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Have the trends in meeting the above objectives, included the internal targets, been analysed and action taken where the targets are not being achieved?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Is there a system to establish quality costs that monitors internal failures, external failures, prevention, and appraisal?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Have specific improvement projects been identified, and clearly scheduled and approved, as part of management review?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Are there appropriate measurables for improvement projects with evidence of regular follow up within the defined schedule?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Have Quality Plans been prepared defining controls for new product introduction and changes to existing products resulting in approved control plans?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Is there an effective process for ensuring Electrolux specifications and changes to them are reviewed and communicated to the functions concerned?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Does an effective process exist for communicating changes to products and processes where these can potentially affect the form, fit or function of the product?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Are Process Risk Assessment/F.M.E.A. prepared and utilized (after definition of process flow) with input from all relevant departments?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Is there evidence that corrective actions resulting from Process Risk Assessment/F.M.E.A are implemented and that such Risk Assessment are updated and re-issued at product or process change?",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Have Electrolux or other customer's preliminary process capability requirements been met? Ppk / Cmk ≥ 1.67.",
          "rating": null,
          "car": null,
          "comments": null
        },
        {
          "title": "Are the relevant information on actions taken including changes to procedures submitted for management review?",
          "rating": null,
          "car": null,
          "comments": null
        },
      ]
    }
  ];
  selected = null;
  selectedIndex = null;
  step = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  select(s, i) {
    this.selected = s;
    this.selectedIndex = i;
    console.log(this.selected);
    this.step = 1;
  }

  // selectQ() {
  //   this.step = 2;
  // }

  menu(){
    this.router.navigate(['menu'], { replaceUrl: true })
  }

}
