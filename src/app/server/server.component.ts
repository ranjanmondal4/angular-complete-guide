import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    serverId = 10;
    serverStatus = 'offline';
    allowNewServer = false

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);

    }
    
    setOnline(){
        this.serverStatus = 'online';
    }

    ngOnInit(): void {
    }
    
}