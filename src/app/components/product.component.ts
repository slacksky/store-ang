import {
     Component,
     Input,
     Output,
     EventEmitter, 
     OnChanges, 
     SimpleChanges, 
     OnInit, 
     DoCheck, 
     OnDestroy
    } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl:'./product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(){
        console.log('constructor');
    }

//    ngOnChanges(changes: SimpleChanges){
//        console.log('ngOnchanges');
//        console.log(changes);
//    }
    ngOnInit(){
        console.log('ngOnInit');
    }
    ngDoCheck(){
        console.log('ngDoCheck');//thisone might conflict with on changes
    }
    ngOnDestroy(){
        console.log('ngOnDestroy')
    }

    AddCart() {
        console.log('anadir al carrito');
        this.productClicked.emit(this.product.id);
    }

}