import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { users, User } from './users.entity';


@Controller('users')
export class UsersController {
  constructor() { }

  @Get('')
  async getUsers() {
    try {
      return await users
    } catch (err) {
      console.log(err);
      return { "message": "Something Went Wrong" }


    }
  }

  @Get('/:id')
  async getUserByid(@Param('id') id: number) {
    try {
      const user = await users[id]
      if (user != null || user != undefined) {
        return user
      } else {
        return { "message": "User Not Found" }
      }
    } catch (err) {
      return { "message": "Something Went Wrong" }
      console.log(err);

    }
  }

  @Post('/addUser')
 async  addUsers(@Body() userData: any) {
    try {
      await users.push(new User(userData.email, userData.password))
      return { "message": "Users Added Successfully" }
    } catch (err) {
      console.log(err);

      return { "message": "Something Went Wrong" }

    }
  }


  @Put('/updateUser')
 async  updateUsers(@Body() userData: any) {
    try {
      const user = users[userData.id]
      if (user == null || user == undefined) {
        return { "message": "User Not Found" }
      } else {
        user.email = userData.email;
        user.password = userData.password
        users[userData.id] = await user
        return { "message": "Users Updated Successfully" }
      }
    } catch (err) {
      console.log(err);
     return { "message": "Something Went Wrong" }

    }
   
  }

  
  @Delete('/:id')
  async deleteUserByid(@Param('id') id: number) {
    try {
      const user = users[id]
      if (user != null || user != undefined) {
        await users.splice(id,1)
        return { "message": "User Deleted Successfully" }

      } else {
        return { "message": "User Not Found" }
      }
    } catch (err) {
      return { "message": "Something Went Wrong" }
      console.log(err);

    }
  }




}
