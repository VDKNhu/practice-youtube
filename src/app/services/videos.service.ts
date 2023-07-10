import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private baseUrl = 'http://127.0.0.1:5001/practice-9d3fe/us-central1/app'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getVideos(): Observable<Video[]> {
    const url = `${this.baseUrl}/videos`;
    return this.http.get<Video[]>(url).pipe(
      map((videos: Video[]) => {
        return videos.map((video) => {
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
      catchError(this.handleError<Video[]>('getVideos', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getVideo(id: string): Observable<Video> {
    const url = `${this.baseUrl}/videos/${id}`;
    return this.http.get<Video>(url).pipe(
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
      catchError(this.handleError<Video>(`getVideo id=${id}`))
    );
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
