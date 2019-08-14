import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lightswitch",
  templateUrl: "./lightswitch.component.html",
  styleUrls: ["./lightswitch.component.css"]
})
export class LightswitchComponent implements OnInit {
  @Input() isOn: boolean;
  @Output() flip = new EventEmitter<any>();

  constructor() {}

  onFlip() {
    this.flip.emit();
  }

  ngOnInit() {}
}
