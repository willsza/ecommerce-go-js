import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm/find-options/operator/In';
import { Repository } from 'typeorm/repository/Repository';
import { Product } from '../products/entities/product.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const productIds = createOrderDto.items.map((item) => item.product_id);
    const uniqueProductIds = [...new Set(productIds)];
    const products = await this.productRepo.findBy({
      id: In(uniqueProductIds),
    });

    if (uniqueProductIds.length !== products.length) {
      throw new Error(
        `Alguns produtos não foram encontrados. Produtos passdos ${productIds}, produtos encontrados ${products.map((p) => p.id)}`,
      );
    }

    const order = Order.create({
      client_id: 1,
      items: createOrderDto.items.map((item) => {
        const product = products.find((p) => p.id === item.product_id);

        return {
          product_id: item.product_id,
          quantity: item.quantity,
          price: product.price,
        };
      }),
    });

    return await this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
