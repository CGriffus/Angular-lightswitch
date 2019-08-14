import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-light",
  templateUrl: "./light.component.html",
  styleUrls: ["./light.component.css"]
})
export class LightComponent implements OnInit {
  isOn: boolean = false;
  constructor() {}

  onFlip() {
    this.isOn = !this.isOn;
  }

  ngOnInit() {}
}
