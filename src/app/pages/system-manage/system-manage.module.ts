import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import {
  NbActionsModule,
  NbAlertModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule, NbRadioModule,
  NbSearchModule, NbSelectModule, NbTableModule, NbTabsetModule,
  NbTreeGridModule, NbUserModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { PermissionSetComponent } from './permission-set/permission-set.component';
import { PageParamsComponent } from './page-params/page-params.component';
import {TreeModule} from "angular-tree-component";
import {SystemManageComponent} from './system-manage.component';
import { MenuConfigComponent } from './menu-config/menu-config.component';
import { DialogAddmenuComponent } from './menu-config/dialog-addmenu/dialog-addmenu.component';
import {PageListTableSetings} from './page-list/pageList-tableConfig';
import {MenuTreeService} from './service/menuTree-service';
import {InsertMenuService} from "./service/insert-menu.service";
import {DeleteMenuService} from "./service/delete-menu.service";
import { DialogPageListComponent } from './menu-config/dialog-page-list/dialog-page-list.component';
import {UpdateMenuService} from './service/update-menu.service';
import {GetMenuRoleService} from './service/get-menu-role.service';
import {GetAllRolesService} from './service/get-all-roles.service';
import {DeleteMenuRoleService} from "./service/delete-menu-role.service";
import {InsertMenuRoleService} from './service/insert-menu-role.service';
import {GetMenuListService} from "./service/get-menu-list.service";
import {LinkMenuService} from "./service/link-menu.service";

const COMPONENTS = [
  PageListComponent,
  PermissionSetComponent,
  PageParamsComponent,
  SystemManageComponent,
  MenuConfigComponent,
  DialogAddmenuComponent,
  DialogPageListComponent,
];

const ENTRY_COMPONENTS = [
  DialogAddmenuComponent,
  DialogPageListComponent,
];

const IMPORTS = [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbPopoverModule,
    NbSearchModule,
    NbTableModule,
    NbTabsetModule,
    NbAlertModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbDatepickerModule,
    ThemeModule,
    NbRadioModule,
    NbCheckboxModule,
    CommonModule,
    Ng2SmartTableModule,
    SystemManageRoutingModule,
    ReactiveFormsModule,
    TreeModule,
    NbDialogModule.forChild(),
];

const PROVIDERS = [
  PageListTableSetings,
  MenuTreeService,
  InsertMenuService,
  DeleteMenuService,
  UpdateMenuService,
  GetMenuRoleService,
  GetAllRolesService,
  DeleteMenuRoleService,
  InsertMenuRoleService,
  GetMenuListService,
  LinkMenuService,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [...PROVIDERS],
})
export class SystemManageModule { }
