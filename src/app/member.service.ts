import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './our-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'api/members';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService){ }

    /** GET heroes from the server */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
  }

  getMember(id: number): Observable<Member> {
    const member = MEMBERS.find(h => h.id === id)!;
    this.messageService.add(`MemberService: fetched hero id=${id}`);
    return of(member);
  }
}
