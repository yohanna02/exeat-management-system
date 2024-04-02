/*
  Warnings:

  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `type` ENUM('MAKE_REQUEST', 'REQUEST_ACCECPTED', 'REQUEST_REJECTED') NOT NULL;
