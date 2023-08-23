declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string = "hola";
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
    }
  }
}

// asdasd

export {};
