import {ChangeDetectorRef, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import {MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserPreferenceDialogueComponent } from './components/user-preference-dialogue/user-preference-dialogue.component';
import { DialogData } from './services/newsFeedServices/feedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {

  title = 'World News';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFeeds = false;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('max-width: 600px');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    iconRegistry
      .addSvgIcon('menu-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/menu-icon.svg'));
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const dialogref = this.dialog.open(UserPreferenceDialogueComponent, { });
      dialogref.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.showFeeds = true;
      });
    }, 150);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
