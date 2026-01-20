/*
  Warnings:

  - A unique constraint covering the columns `[customer_seq]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `customers` ADD COLUMN `customer_seq` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `customers_customer_seq_key` ON `customers`(`customer_seq`);
