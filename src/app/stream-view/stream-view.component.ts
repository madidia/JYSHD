import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataserviceService} from '../services/dataservice.service';
import {Result} from '../models/models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-stream-view',
  templateUrl: './stream-view.component.html',
  styleUrls: ['./stream-view.component.scss']
})
export class StreamViewComponent implements OnInit, OnDestroy {

  public streamData: Result[] = [];
  public streamDataMap: Map<string, Result[]> = new Map<string, Result[]>();
  private sub: Subscription;
  public isLoading: boolean;
  private isFirstTime = true;
  public hasData = () => this.streamDataMap && this.streamDataMap.size > 0;

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this._fetchData();
    setInterval(() => {
      this._fetchData();
    }, 20000);
  }

  private _fetchData() {
    this.startLoading()
    this.sub = this.dataService.fetchData()
      .subscribe(data => {
        this.streamData = data.result;
        this._generateData();
        this.stopLoading();
      });
  }

  private _generateData() {
    let blockInterval = 0;
    MONTHS.forEach(month => {
      let tmpData: Result[];
      tmpData = this.streamData.filter((value, index) => index >= blockInterval && index < blockInterval + 30)
      this.streamDataMap.set(month, tmpData);
      blockInterval = blockInterval + 30;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private startLoading() {
    if (this.isFirstTime) {
      this.isLoading = true;
      this.isFirstTime = false;
    }
  }

  private stopLoading() {
    this.isLoading = false;
  }

}

const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

