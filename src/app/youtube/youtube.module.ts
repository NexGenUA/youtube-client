import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { SharedModule } from '../shared/shared.module';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchResultItemComponent,
    InfoBarComponent,
    DetailedInfoComponent,
    CreateItemComponent,
  ],
  imports: [SharedModule]
})
export class YoutubeModule {
}
