-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `op_users` VARCHAR(191) NOT NULL,
    `op_users_password` VARCHAR(191) NOT NULL,
    `op_users_role` INTEGER NOT NULL,
    `op_users_state` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `roles_id` INTEGER NOT NULL AUTO_INCREMENT,
    `roles_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roles_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patients` (
    `patients_id` INTEGER NOT NULL AUTO_INCREMENT,
    `patients_name` VARCHAR(191) NOT NULL,
    `patients_surgery_type_id` INTEGER NOT NULL,
    `patients_started_date` DATETIME(3) NOT NULL,
    `patients_updated_date` DATETIME(3) NULL,
    `patients_surgery_state_id` INTEGER NOT NULL,

    PRIMARY KEY (`patients_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surgery_types` (
    `surgery_type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `surgery_type_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`surgery_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surgery_states` (
    `surgery_state_id` INTEGER NOT NULL AUTO_INCREMENT,
    `surgery_state_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`surgery_state_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_op_users_role_fkey` FOREIGN KEY (`op_users_role`) REFERENCES `roles`(`roles_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_patients_surgery_type_id_fkey` FOREIGN KEY (`patients_surgery_type_id`) REFERENCES `surgery_types`(`surgery_type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_patients_surgery_state_id_fkey` FOREIGN KEY (`patients_surgery_state_id`) REFERENCES `surgery_states`(`surgery_state_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
