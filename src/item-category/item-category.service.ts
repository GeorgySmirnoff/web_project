import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemCategoryService {
  getHello(): string {
    return 'Hello World!';
  }
}
