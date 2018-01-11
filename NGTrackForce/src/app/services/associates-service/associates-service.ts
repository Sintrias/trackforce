import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Associate } from "../../models/Associate";
import { Response } from "@angular/http/src/static_response";
import { environment } from "../../../environments/environment";

@Injectable()
export class AssociateService {

    status: string
    client: string

    constructor(private http: HttpClient) {

    }

    /**
     * Get all of the associates
     */
    getAllAssociates() {
        let url: string = environment.url + "TrackForce/track/associates/all"

        return this.http.get(url).map((response: Response) => response.json());
    }

    /**
     * Update the given associates statuses/clients
     * @param ids of associates to be updated
     */
    updateAssociates(ids: number[], ustatus: string, uclient: string) {
        console.log("service");
        let url: string = environment.url + "TrackForce/track/associates/update/" + ustatus + "/" + uclient
        
        this.http.put(url, ids).subscribe()
    }
}