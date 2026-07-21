import { pgTable, text, integer, timestamp, uuid } from 'drizzle-orm/pg-core';

// Users / Accounts
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  auth0Id: text('auth0_id').unique(),
  email: text('email').notNull().unique(),
  name: text('name'),
  role: text('role').default('customer').notNull(), // 'customer', 'admin', 'warehouse'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Products / SKUs (ATMOS Objects)
export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  sku: text('sku').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  price: integer('price').notNull(), // In smallest currency unit (e.g. cents / IDR)
  currency: text('currency').default('USD').notNull(),
  stockQuantity: integer('stock_quantity').default(0).notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Orders
export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  customerEmail: text('customer_email').notNull(),
  status: text('status').default('PENDING').notNull(), // PENDING, PAID, PROCESSING, SHIPPED, DELIVERED, CANCELLED
  totalAmount: integer('total_amount').notNull(),
  trackingNumber: text('tracking_number'),
  shippingAddress: text('shipping_address'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Order Items
export const orderItems = pgTable('order_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').references(() => orders.id).notNull(),
  productId: uuid('product_id').references(() => products.id).notNull(),
  quantity: integer('quantity').notNull(),
  unitPrice: integer('unit_price').notNull(),
});

// Payment Transactions
export const paymentTransactions = pgTable('payment_transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').references(() => orders.id).notNull(),
  provider: text('provider').notNull(), // 'stripe' or 'midtrans'
  transactionId: text('transaction_id').notNull().unique(),
  status: text('status').notNull(), // 'success', 'pending', 'failed'
  payload: text('payload'), // Webhook payload JSON string
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
