import {ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'World News';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('max-width: 600px');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    iconRegistry
      .addSvgIcon('menu-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/menu-icon.svg'));
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
