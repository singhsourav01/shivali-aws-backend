-- CreateTable
CREATE TABLE `users` (
    `user_id` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_phone` VARCHAR(191) NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_role` ENUM('SUPER_ADMIN', 'ADMIN') NOT NULL DEFAULT 'ADMIN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_user_email_key`(`user_email`),
    UNIQUE INDEX `users_user_phone_key`(`user_phone`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `customer_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `customer_name` VARCHAR(191) NOT NULL,
    `customer_email` VARCHAR(191) NOT NULL,
    `customer_phone` VARCHAR(191) NULL,
    `customer_address` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customers_customer_email_key`(`customer_email`),
    UNIQUE INDEX `customers_customer_phone_key`(`customer_phone`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `garments` (
    `garment_id` VARCHAR(191) NOT NULL,
    `garment_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`garment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `service_id` VARCHAR(191) NOT NULL,
    `garment_id` VARCHAR(191) NOT NULL,
    `service_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `services_garment_id_idx`(`garment_id`),
    PRIMARY KEY (`service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` VARCHAR(191) NOT NULL,
    `customer_id` VARCHAR(191) NOT NULL,
    `availability_status` ENUM('MAHA_URGENT', 'URGENT', 'NORMAL') NOT NULL DEFAULT 'NORMAL',
    `return_expected_by` DATETIME(3) NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `orders_customer_id_idx`(`customer_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `order_item_id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `garment_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `order_items_order_id_idx`(`order_id`),
    INDEX `order_items_garment_id_idx`(`garment_id`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_garment_id_fkey` FOREIGN KEY (`garment_id`) REFERENCES `garments`(`garment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_garment_id_fkey` FOREIGN KEY (`garment_id`) REFERENCES `garments`(`garment_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
