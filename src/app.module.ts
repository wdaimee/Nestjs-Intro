import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

//modules are split up by features in you app
@Module({
  imports: [ProductsModule],
  //Control how you handle incoming addresses, responsible
  //for incoming address and sending back the response
  controllers: [AppController],
  //Providers are extra services or classes that you can inject into
  //controllers or other providers
  providers: [AppService],
})
export class AppModule {}
