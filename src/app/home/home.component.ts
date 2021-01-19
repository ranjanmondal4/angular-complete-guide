import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // ,providers: [LoggingService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,
    private logger: LoggingService) { }

  ngOnInit(): void {
    this.logger.log('hi service is injected');
  }

  onNavigateServer(){
    this.router.navigate(['server'], {relativeTo: this.route});
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
