import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { EventsService } from "../../shared/services/events.service";
import { CategoriesService } from "../../shared/services/categories.service";
import { BusEvent } from "../../shared/models/event.model";
import { Category } from "../../shared/models/category.model";
import { Subscription } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "bus-history-detail",
  templateUrl: "./history-detail.component.html",
  styleUrls: ["./history-detail.component.scss"]
})
export class HistoryDetailComponent implements OnInit, OnDestroy {
  event: BusEvent;
  category: Category;

  isLoaded = false;
  s1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.s1 = this.route.params
      .pipe(
        mergeMap((params: Params) => this.eventsService.getEventById(params["id"]))
      )
      // .subscribe((event: BusEvent) => {console.log(event);} )
      .pipe(
        mergeMap((event: BusEvent) => {
          this.event = event; 
          return this.categoriesService.getCategoryById(event.category);
        })
      )
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }
}
