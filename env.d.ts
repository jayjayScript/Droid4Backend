declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    JWT_SECRET: string;
    PORT: number;
    ADMIN_PASSWORD: string;
    ADMIN_EMAIL: string;
  }
}
