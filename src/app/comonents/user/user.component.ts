import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 20;
    this.email = '';
    this.address = {
      town: 'Ballyhaunis',
      county: 'Mayo',
      country: 'Ireland'
    }
    this.hobbies = ['Drink beer', 'Fuck bitches', 'Have depression'];

    this.dataService.getPost().subscribe((posts) => {
      this.posts = posts;
    });
  }


    onClick()
    {
      this.name= "name";
    }

    addHobby(hobby)
    {
      this.hobbies.unshift(hobby);
      return false;
    }

    deleteHobby(hobby)
    {
      for (let i = 0; i < this.hobbies.length; i++)
        {
          if(this.hobbies[i] == hobby)
            {
              this.hobbies.splice(i, 1);
            }
        }
    }
}

interface Address
{
  town:string,
  county:string,
  country:string
}

interface Post
{
  id:number,
  title:string,
  body:string,
  userId: number
}