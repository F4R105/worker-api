import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
  _id: integer('product_id').primaryKey(),
  name: text('name', {length: 255}).notNull(),
  description: text('description', {length: 255}).notNull(),
//   category_id: integer('category_id'),
//   subcategory_id: integer('subcategory_id'),
//   brand_id: integer('brand_id'),
//   price: decimal('price', 10, 2).notNull(),
//   sale_price: sql.decimal('sale_price', 10, 2),
//   quantity_in_stock: integer('quantity_in_stock').notNull(),
//   image_url: sql.varchar('image_url', 255),
//   rating: sql.decimal('rating', 3, 2),
//   review_count: integer('review_count')
});