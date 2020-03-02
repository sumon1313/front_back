import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  formData: FormGroup;
  slist:any;
  chkid:any;
  cond:boolean=false;

  constructor(private formBuilder:FormBuilder, private usserv:UsersService,private router:Router) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      Id:     ['',Validators.required],
      fname : ['',Validators.required],
      lname : ['',Validators.required]
    });
    this.showdata();
  
   
  }
  insert(){
    this.usserv.setlist(this.formData.value).subscribe(
      res=>{
        if(res=="inserted"){
          this.showdata();
          this.formData.reset();
        }
        else{
         
        }
      }
    );
  }
  upddata(){
    let arr:any={
      fname:this.formData.controls.fname.value,
      lname:this.formData.controls.lname.value,
      Id:this.formData.controls.Id.value

    };
    console.log(arr);
    this.usserv.updaterow(arr).subscribe(res=>{
      if(res=="Success"){
        this.showdata();
        this.formData.reset();
       
      }
    }),
    err=>{
      console.log(err);
    }
  }
  
  editdata(Id:any){
    if(this.cond==false){
      this.cond=true;
    this.usserv.fetchrow(Id).subscribe((res:any)=>{
      if(res.stat=="Success"){
        this.formData.patchValue({
          Id:res.data.Id,
          fname:res.data.fname,
          lname:res.data.lname,
        });
       // console.log(res.rows);
      }
    });
  }
  else if(this.cond==true){
    this.cond=false;
  this.usserv.fetchrow(Id).subscribe((res:any)=>{
    if(res.stat=="Success"){
      this.formData.patchValue({
        id:res.data.Id,
        fname:res.data.fname,
        lname:res.data.lname,
      });
     // console.log(res.rows);
    }
  });
}

  }
  cancel(){
    if(this.cond==true){
      this.cond=false;
    this.formData.setValue({
      Id:'',
      fname:'',
      lname:''
    });
  }
  else{
    this.cond=true;
    this.formData.setValue({
      Id:'',
      fname:'',
      lname:''
    });
  }
  }
  showdata(){
     this.usserv.getdata().subscribe(
      res=>{
        this.slist=res.data;
        console.log((res.data));
      }
    )
  }

  deldata(id:any){
    this.usserv.deleterow(id).subscribe(
        res=>{
          if(res=="Success"){
            this.showdata();
          }
          else{
            console.log("error")
          }
        },
        err=>{
          console.log(err)
        }
      )
  }

  deletedatabyid(id:any){
    let did:any={
      id:id
    };
    
    this.usserv.deletebypost(did).subscribe(
      res=>{
        if(res=="Success"){
          this.showdata();
         
        }
        
      }
    )
  }

  
 

}
