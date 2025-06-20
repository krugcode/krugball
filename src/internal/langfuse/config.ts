import { Langfuse } from "langfuse";

const config = {
  secretKey: process.env.LANGFUSE_SECRET_KEY!,
  publicKey: process.env.LANGFUSE_PUBLIC_KEY!,
  baseUrl: process.env.LANGFUSE_HOST || 'https://cloud.langfuse.com'
};

export const langfuse = new Langfuse(config);
