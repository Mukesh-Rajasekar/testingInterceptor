import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant, User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


url:string="http://localhost:8765/api/v2/"  
// CRud


  registerUser(user?:User):Observable<User>
  {
    return this.http.post<User>(this.url+"register",user);
  }


  // @GetMapping("/user/display-all-fav-restaurant/{userId}")
  //   public ResponseEntity displayAllFavRestaurant(@PathVariable String userId) throws UserNotFoundException {
  //       List<Restaurant> favRest = iUserService.favRestaurants(userId);
  //       return new ResponseEntity(favRest,HttpStatus.OK);
  //   }

  getFavRestaurants(userId?:string):Observable<any>
  {
    console.log(userId);
    return this.http.get<any>(this.url+"user/display-all-fav-restaurant/"+userId);
  }

// getOneEmp(id?:number):Observable<User>
// {
//  // return this.http.get<employee>(this.url+"/"+id);
//   return this.http.get<User>(this.url+"users/"+id);
  
// }
// deleteOneEmp(id?:number):Observable<User>
// {
// //  return this.http.delete<employee>(this.url+"/"+id);
//   return this.http.delete<User>(this.url+"deluser/"+id);
// }
// insertOneEmp(emp?:User):Observable<User>
// {
//   return this.http.post<User>(this.url,emp);
// }
// updateOneEmp(id?:number,emp?:User):Observable<User>
// {
//  // return this.http.put<employee>(this.url+"/"+id,emp);
//  return this.http.put<User>(this.url+"user/"+id,emp);
// }
}
