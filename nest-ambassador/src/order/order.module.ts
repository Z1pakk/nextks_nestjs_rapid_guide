import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./order";
import { OrderItem } from "./order-item";
import { OrderItemService } from "./order-item.service";
import { SharedModule } from "../shared/shared.module";
import { LinkModule } from "../link/link.module";
import { ProductModule } from "../product/product.module";
import { StripeModule } from "nestjs-stripe";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { OrderListener } from "./listeners/order.listener";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    SharedModule,
    LinkModule,
    ProductModule,
    StripeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('STRIPE_KEY'),
        apiVersion: '2020-08-27',
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'host.docker.internal',
        port: 25
      },
      defaults: {
        from: 'no-reply@example.com'
      }
    })
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderItemService, OrderListener]
})
export class OrderModule {}
