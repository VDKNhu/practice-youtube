import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent {
  optionLabels = ['All', 'Music', 'Mixes', 'Live', 'Background music', 'Playlists', 'Soundtracks', 'Dance-Pop', 'International English Language Testing System', 'Sonatas', 'Thoughts', 'Game shows', 'Podcasts', 'Computer Science', 'Electronic dance music', 'Recently uploaded', 'Watched', 'New to you'];
  videos = [
    {
      id: '-OwDIQ-WNmg',
      thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
      avatar: './../../../assets/photos/avatar.jpg',
      title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
      channel: 'SMTOWN',
      view: 60000000,
      createdDate: '07/07/2022'
    },
    {
      id: '-OwDIQ-WNmg',
      thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
      avatar: './../../../assets/photos/avatar.jpg',
      title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
      channel: 'SMTOWN',
      view: 60000000,
      createdDate: '07/07/2022'
    },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },
    // {
    //   thumbnail: 'https://www.youtube.com/embed/-OwDIQ-WNmg',
    //   avatar: './../../../assets/photos/avatar.jpg',
    //   title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 믿듣탱 태연의 띵곡 모음 ✨',
    //   channel: 'SMTOWN',
    //   view: 60000000,
    //   createdDate: '07/07/2022'
    // },

  ]
}
