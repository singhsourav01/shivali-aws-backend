-- DropIndex
DROP INDEX `customers_customer_email_key` ON `customers`;

-- AlterTable
ALTER TABLE `customers` MODIFY `customer_email` VARCHAR(191) NULL;
