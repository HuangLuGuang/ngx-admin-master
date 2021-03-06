import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class GetAllRolesService {

  menuTreeUrl = this.config.getPrefix() + '/get_all_roles';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  getAllRoles() {
    return this.http.get(this.menuTreeUrl);
  }
}
