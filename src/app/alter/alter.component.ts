import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class DynamicComponent implements OnInit {

  @Input() type: string = "success";
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
