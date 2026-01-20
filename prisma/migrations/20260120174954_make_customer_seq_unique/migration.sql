/*
  Warnings:

  - Made the column `customer_seq` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customers` MODIFY `customer_seq` INTEGER NOT NULL;
