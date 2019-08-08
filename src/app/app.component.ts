import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'test-project';
  display: boolean = false;
  image: string = "";
  time_one: boolean = true;
  closeBtn: boolean = false;


   ngOnInit() {
  	this.progressBar();
  	if (window.matchMedia("(orientation:portrait)").matches) {
	  	
	  	this.image="https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png";
	}
	else {
  		this.image="https://static.aviapark.com/files/155333/960x576_1.png";
	}
  }

  progressBar(){
  	 var timeleft = 4;
	var downloadTimer = setInterval(() => {
  	timeleft -= 1;
	  	if(timeleft <= 0){
	    	clearInterval(downloadTimer);
	    	this.time_one = !this.time_one;
	    	this.closeBtn = !this.closeBtn;
		}
	}, 1000);
  }

  closeMark(){
  	this.display= !this.display;
  	console.log("close");
  }
  
}
