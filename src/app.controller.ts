import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

//important for handling incoming request and responding
//This controller will hit the root route
@Controller()
export class AppController {
  //dependancy injection, adding a constructor, specifying what we are trying to get which is of type AppService
  //Assign type AppService to appService, nest.js will pass the service object, appService was added as a provider
  constructor(private readonly appService: AppService) {}

  //the method will run when a get method is requestd to the root route
  //This method does filter, so only GET methods to the root would execute, not to users or anything else
  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return this.appService.getHello();
  }
}

//This controller will hit the products route
// @Controller("products")
// export class ProductsController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getSomeFunction(): string {
//     return this.appService.getSomeFunction();
//   }
// }
