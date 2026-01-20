/*
  Warnings:

  - You are about to drop the column `customer_unique_id` on the `customers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `customers_customer_unique_id_key` ON `customers`;

-- AlterTable
ALTER TABLE `customers` DROP COLUMN `customer_unique_id`;
