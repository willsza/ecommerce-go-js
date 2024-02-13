export class CreateOrderDto {
  items: OrderItemDto[];
  card_hash: string;
}

export class OrderItemDto {
  product_id: string;
  quantity: number;
}
