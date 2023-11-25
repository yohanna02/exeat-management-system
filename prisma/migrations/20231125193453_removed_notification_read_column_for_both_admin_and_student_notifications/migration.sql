/*
  Warnings:

  - You are about to drop the column `read` on the `AdminNotification` table. All the data in the column will be lost.
  - You are about to drop the column `read` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `AdminNotification` DROP COLUMN `read`;

-- AlterTable
ALTER TABLE `Notification` DROP COLUMN `read`;
