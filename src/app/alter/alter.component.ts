import { Component, OnInit , Input,Output,EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class DynamicComponent implements OnInit {

  @Input() type: string;
  @Input() count: number;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.count = this.count + 1;
    this.output.next(this.count);
  }
}
