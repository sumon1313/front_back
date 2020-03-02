import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpss:HttpClient) { }
  getList(id:number,fname:string):Observable<any>{
    return this.httpss.get<any>('http://localhost:4000/getuser/'+id+'/'+fname);
    
  }
  getdata():Observable<any>{
    return this.httpss.get<any>('http://localhost:4000/getuser/');
    
  }
  setlist(insertdata:any){
    return this.httpss.post('http://localhost:4000/Insertdata',insertdata);
  }
  deleterow(id:any){
    return this.httpss.get('http://localhost:4000/delete/'+id);
  }
  fetchrow(id:any){
    return this.httpss.get('http://localhost:4000/fetch/'+id);
  }
  updaterow(data:any){
    return this.httpss.post('http://localhost:4000/update',data);
  }
  deletebypost(id:any){
    return this.httpss.post("http://localhost:4000/deletebypost",id);
  }
  getstate(){
    return this.httpss.post("http://localhost:4000/getstate",null);
  }
  getdistrict(id:any){
    return this.httpss.get("http://localhost:4000/getdistrict/"+id);
  }
  fileUpload(file:any){
    return this.httpss.post("http://localhost:4000/fileupload",file);
  }
  postdata(xyz:String){
    return xyz;
  }


}
