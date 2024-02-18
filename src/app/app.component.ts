import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello</h1><h3>Aya</h3>',
  // styles : ['a{text-decoration:none;margin-left:200px}','h1{font-size:300px}'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // display:boolean=true;
  // content:string = "view Content";
  // displayContent()
  // {
  //   if(this.content == "view Content" )
  //   {
  //       this.content = "Hidden Content";
  //       this.display = false;
  //   }
  //   else
  //   {
  //       this.content = "view Content";
  //       this.display = true;
  //   }
  // }

  // view:string = "Aya Moustafa"


  product:any =
  {
    id: 1,
    name : "Dress",
    price : 1000,
    Model : "A"
  }

  val:string = "Aya";
  // setValue(event:any)
  // {
  //   this.val = event.target.value;
  // }
}

