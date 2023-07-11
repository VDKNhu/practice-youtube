import { VideosService } from 'src/app/services/videos.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/interfaces/video';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WatchComponent {
  id: string = '';
  videoUrl: string = '';
  video: Video = {
    id: '',
    thumbnail: '',
    avatar: '',
    title: '',
    channel: '',
    viewers: 0,
    subscribers: 0,
    postedDate: ''
  };

  constructor(private route: ActivatedRoute, private videoService: VideosService) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getVideo(this.id);
  }

  getVideo(id: string) {
    this.videoService.getVideo(this.id).subscribe((video) => {
      this.video = video;
    })
  }

  showWrapBtns() {
    let wrapBtns = document.querySelectorAll('.btn-wrap'); 
    if(wrapBtns[0].classList.contains('active')) {
      wrapBtns[0].classList.remove('active');
    } else {
      wrapBtns[0].classList.add('active');
    }
  }
}
