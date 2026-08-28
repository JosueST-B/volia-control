CREATE TABLE `cloud_snapshot_versions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`owner_id` text NOT NULL,
	`revision` integer NOT NULL,
	`encrypted_payload` text NOT NULL,
	`checksum` text NOT NULL,
	`device_id` text NOT NULL,
	`keys_count` integer NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `cloud_versions_owner_revision_idx` ON `cloud_snapshot_versions` (`owner_id`,`revision`);--> statement-breakpoint
CREATE TABLE `cloud_snapshots` (
	`owner_id` text PRIMARY KEY NOT NULL,
	`revision` integer NOT NULL,
	`encrypted_payload` text NOT NULL,
	`checksum` text NOT NULL,
	`device_id` text NOT NULL,
	`keys_count` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
