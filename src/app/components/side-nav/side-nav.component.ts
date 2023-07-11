import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  section1 = [
    {
      title: 'Home',
      icon: 'home'
    },
    {
      title: 'Shorts',
      icon: 'timelapse'
    },
    {
      title: 'Subscriptions',
      icon: 'subscriptions'
    }
  ];
  section2 = [
    {
      title: 'Library',
      icon: 'video_library'
    },
    {
      title: 'History',
      icon: 'history'
    },
    {
      title: 'Your video',
      icon: 'smart_display'
    },
    {
      title: 'Watch later',
      icon: 'query_builder'
    },
    {
      title: 'Liked videos',
      icon: 'thumb_up_alt'
    }
  ];
  subscriptions = [
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe1',
      hasNewPost: true
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe2',
      hasNewPost: true
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe3',
      hasNewPost: false
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe4',
      hasNewPost: true
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe5',
      hasNewPost: true
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe6',
      hasNewPost: false
    },
    { 
      avatar: './../../../assets/images/avatar.jpg',
      name: 'HaHiHe7',
      hasNewPost: true
    },
  ]
  explore = [
    {
      title: 'Trending',
      icon: 'whatshot'
    },
    {
      title: 'Music',
      icon: 'audiotrack'
    },
    {
      title: 'Gaming',
      icon: 'sports_esports'
    },
    {
      title: 'News',
      icon: 'feed'
    },
    {
      title: 'Sports',
      icon: 'emoji_events'
    }
  ];
  more = [
    {
      title: 'YouTube Premium',
      icon: './../../../assets/images/favicon_32x32.png'
    },
    {
      title: 'YouTube Studio',
      icon: './../../../assets/images/polygon-youtube-logo.png'
    },
    {
      title: 'YouTube Music',
      icon: './../../../assets/images/circle-youtube-logo.png'
    },
    {
      title: 'YouTube Kids',
      icon: './../../../assets/images/kid-youtube-logo.png'
    }
  ];
  setting = [
    {
      title: 'Settings',
      icon: 'settings'
    },
    {
      title: 'Report history',
      icon: 'flag'
    },
    {
      title: 'Help',
      icon: 'help_outline'
    },
    {
      title: 'Send feedback',
      icon: 'feedback'
    }
  ];
  about1 = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers'];
  about2 = ['Terms', 'Privacy', 'Policy and Safety', 'How YouTube works', 'Test new features'];
}
