import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const cloudSnapshots = sqliteTable("cloud_snapshots", {
  ownerId: text("owner_id").primaryKey(),
  revision: integer("revision").notNull(),
  encryptedPayload: text("encrypted_payload").notNull(),
  checksum: text("checksum").notNull(),
  deviceId: text("device_id").notNull(),
  keysCount: integer("keys_count").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const cloudSnapshotVersions = sqliteTable(
  "cloud_snapshot_versions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    ownerId: text("owner_id").notNull(),
    revision: integer("revision").notNull(),
    encryptedPayload: text("encrypted_payload").notNull(),
    checksum: text("checksum").notNull(),
    deviceId: text("device_id").notNull(),
    keysCount: integer("keys_count").notNull(),
    createdAt: text("created_at").notNull(),
  },
  (table) => [
    index("cloud_versions_owner_revision_idx").on(
      table.ownerId,
      table.revision,
    ),
  ],
);
