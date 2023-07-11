import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video.model';
import { VideosService } from 'src/app/core/services/videos.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  optionLabels = ['All', 'Music', 'Mixes', 'Live', 'Background music', 'Playlists', 'Soundtracks', 'Dance-Pop', 'International English Language Testing System', 'Sonatas', 'Thoughts', 'Game shows', 'Podcasts', 'Computer Science', 'Electronic dance music', 'Recently uploaded', 'Watched', 'New to you'];
  // videos = [
  //   {
  //     id: '-OwDIQ-WNmg',
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     id: '-OwDIQ-WNmg',
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  //   {
  //     thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
  //     avatar: './../../../assets/images/avatar.jpg',
  //     title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
  //     channel: 'SMTOWN',
  //     view: 60000000,
  //     createdDate: '07/07/2022'
  //   },
  // ]

  videos:Video[] = [];

  constructor(private videoService: VideosService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }
}
