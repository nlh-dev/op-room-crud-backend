/*
  Warnings:

  - You are about to alter the column `op_users_state` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `op_users_state` BOOLEAN NOT NULL DEFAULT false;
