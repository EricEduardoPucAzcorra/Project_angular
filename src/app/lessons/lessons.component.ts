import {Component, OnInit} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Observable, of} from 'rxjs';
import {NewsletterService} from "../services/newsletter.service";
import {Lesson} from "../model/lesson";
import {SwPush} from "@angular/service-worker";
import {catchError} from 'rxjs/operators';

@Component({
    selector: 'lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

    lessons$: Observable<Lesson[]>;
    isLoggedIn$: Observable<boolean>;
  
    //key
    // {"publicKey":"BE6TcO5NBrApsOOYLvHXkZD_w8ErT0TC57QshMZdO2q6_ELvZF09IsTRgXeB34k1k5A6aSRBHqlKQmQxtwWdWLQ","privateKey":"cMW5DkLPDm8gQlarauFHaio7b1GqbVkBKftAYZgJnyk"}


    // constructor(private lessonsService: LessonsService) {

    // }

    readonly VAPID_PUBLIC_KEY = "BE6TcO5NBrApsOOYLvHXkZD_w8ErT0TC57QshMZdO2q6_ELvZF09IsTRgXeB34k1k5A6aSRBHqlKQmQxtwWdWLQ";

    constructor(
    private lessonsService: LessonsService,
    private swPush: SwPush,
    private newsletterService: NewsletterService) {

    }

    subscribete() {

        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
        .catch(err => console.error("Could not subscribe to notifications", err));
    }
    

    

    ngOnInit() {
        this.loadLessons();
    }


    loadLessons() {
        this.lessons$ = this.lessonsService.loadAllLessons().pipe(catchError(err => of([])));
    }

}
