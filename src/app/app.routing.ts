import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutComponent } from './about/about.component';
import { MembershipPageComponent } from './membership-page/membership-page.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
const appRoutes: Routes = [ {
  path: '',
  component: FrontPageComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'membership-page',
  component: MembershipPageComponent
},
{
  path: 'members/:id',
  component: MemberDetailComponent
}
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
