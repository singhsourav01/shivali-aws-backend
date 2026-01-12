/*
  Warnings:

  - A unique constraint covering the columns `[customer_unique_id]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `CustomerSequence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `customers_customer_unique_id_key` ON `customers`(`customer_unique_id`);
