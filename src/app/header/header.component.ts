import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
    //styleUrls: ['./server.component.css']  
})
export class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature:string){
    //     this.featureSelected.emit(feature);
    // }
    constructor(private dataStorage: DataStorageService){

    }
    onSaveData(){
       this.dataStorage.storeRecipes();
    }
    onFetchData(){
        this.dataStorage.fetchRecipes().subscribe();
    }
}