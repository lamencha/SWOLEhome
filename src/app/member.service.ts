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

  constructor(
    private http: HttpClient, 
    private messageService: MessageService){ }

  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    this.messageService.add('MemberService: Member fetched');
    return members;
  }

  getMember(id: number): Observable<Member> {
    const member = MEMBERS.find(h => h.id === id)!;
    this.messageService.add(`MemberService: fetched hero id=${id}`);
    return of(member);
  }
}
