import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Video } from '../interfaces/video';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private store: AngularFirestore) {}

  /** GET heroes from the server */
  getVideos(): Observable<Video[]> { 
    return (this.store.collection('videos').valueChanges({ idField: 'id' }) as Observable<Video[]>)
    .pipe(
      map((data: Video[]) => {
        return data.map((video) => {
          return {
            id: video.id,
            thumbnail: video.thumbnail.replace('watch?v=', 'embed/'),
            avatar: video.avatar,
            title: video.title,
            channel: video.channel,
            viewers: video.viewers,
            subscribers: video.subscribers,
            postedDate: video.postedDate,
          };
        }); 
      }),
      catchError(this.handleError<Video[]>(`getVideos`))
    )
  }

  /** GET hero by id. Will 404 if id not found */
  getVideo(id: string): Observable<Video> {
    return (this.store.collection('videos').doc(id).valueChanges() as Observable<Video>)
    .pipe(
      map((video: Video) => {
          return {
            id: video.id,
            thumbnail: video.thumbnail.replace('watch?v=', 'embed/'),
            avatar: video.avatar,
            title: video.title,
            channel: video.channel,
            viewers: video.viewers,
            subscribers: video.subscribers,
            postedDate: video.postedDate,
          };
        }),
      catchError(this.handleError<Video>(`getVideos id=${id}`))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
