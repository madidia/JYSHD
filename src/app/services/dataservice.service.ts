import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeviceGeolocationResult, StreamResult} from '../models/models';

@Injectable({
  providedIn: 'root'
})


export class DataserviceService {
  private urlDomain = 'https://api.iotagora.net/';
  private streamUrl = 'streams/?order=-1/';
  private geoLocationUrl = 'devices/Fontaine_Aidson@Bruno_Vernay.etud24';
  private header = new HttpHeaders().set('carriots.apikey', '34230616ff865401e28f40c217d19a760db0ad9df8a2b85bee272c4200f75a1f');

  constructor(private htpp: HttpClient) {
  }

  public fetchData(): Observable<StreamResult> {
    return this.htpp.get<StreamResult>(`${this.urlDomain}${this.streamUrl}`, {headers: this.header});
  }

  public fetchDeviceGeolocation(): Observable<DeviceGeolocationResult> {
    return this.htpp.get<DeviceGeolocationResult>(`${this.urlDomain}${this.geoLocationUrl}`, {headers: this.header});
  }
}
