import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
    dbCredentials: {
    url: 'postgresql://neondb_owner:npg_KQgThfu0OM1i@ep-billowing-snow-aezc28cx.c-2.us-east-2.aws.neon.tech/mock-ai-interview?sslmode=require&channel_binding=require',
  }
});