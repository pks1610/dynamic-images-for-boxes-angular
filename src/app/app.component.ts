import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeBlock';
  url;
  demoArray = new Array(6).fill('');

  processFile(event: any, index){
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.onload = () => {
        this.url = reader.result as string;
        this.demoArray[index] = this.url;
          for(let i=0; i<this.demoArray.length; i++){
              if(this.demoArray[i] == '' && i<index){
                this.demoArray[i] = this.demoArray[index];
                this.demoArray[index] = '';
              }
          }        
      }   
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  deleteImg(index){
    this.demoArray.splice(index, 1);
    this.demoArray.push('');
  }
}
