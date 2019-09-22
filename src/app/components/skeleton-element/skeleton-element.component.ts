import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-element',
  templateUrl: './skeleton-element.component.html',
  styleUrls: ['./skeleton-element.component.scss'],
})
export class SkeletonElementComponent implements OnInit {
  @Input() width: string = '100%';
  @Input() height: string = '16px';
  @Input() borderRadius: string = '0';
  @Input() rounded: boolean = false;
  @Input() noAnimated: boolean = false;
  @Input() inline: boolean = false;

  styles: any = {};

  ngOnInit() {
    this.styles = {
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius,
    }

    if (this.rounded) {
      this.styles.borderRadius = '999em';
    }
  }
}
