import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { msgInterface } from './msgInf';
@Injectable({
  providedIn: 'root'
})
export class ChatdataService {

  public curMsg:msgInterface={} as msgInterface;
  public keyNum:number=0;
  public agentS:string="A";
  public welcomeMsg:string="Welcome to hippo chat";
  public msgArr:msgInterface[]=[];
  
  constructor() { }
  
  


  public curDate=new Date();
  storeData(usr:string){
      console.log(usr);
      this.curMsg.key=this.keyNum;
      this.curMsg.username=usr;
      this.curDate=new Date();
      this.curMsg.timeArr=new Array();
      this.curMsg.timeArr.push(this.curDate);
      this.curMsg.senderArr=new Array();
      this.curMsg.senderArr.push("A");
      this.curMsg.msgArr=new Array();
      this.curMsg.msgArr.push(this.welcomeMsg);
  
      console.log(this.curMsg);
      this.msgArr.push(this.curMsg);
      console.log("Msg Array");
      console.log(this.msgArr);
      
      this.keyNum++;
   

  }

}
