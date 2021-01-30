import { PanelOption } from './panel-option';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() title: string;
  @Input() collapsible = true;
  @Input() labelText: string;
  @Input() labelClass = 'label-success';
  @Input() options: PanelOption[];
  @Output() optionClick = new EventEmitter<PanelOption>();

  constructor() { }

  ngOnInit() {}

  collapse($event: { target: any; }) {
    const ibox = $($event.target).closest('div.ibox');
    const button = $(this).find('i');
    const content = ibox.children('.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(() => {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  }

  onOptionClick(option: PanelOption) {
    this.optionClick.emit(option);
  }

}
