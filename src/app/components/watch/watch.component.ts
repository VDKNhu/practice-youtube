import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WatchComponent {
  id: string | null = '';
  videoUrl: string = '';

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.videoUrl = 'https://www.youtube.com/embed/' + this.id;
  }
}
