import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  card_hash: string;
}

export class OrderItemDto {
  @IsString()
  @MaxLength(36)
  @IsNotEmpty()
  product_id: string;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
