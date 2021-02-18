import * as rc from 'rc';
import { ConnectionOptions } from 'typeorm';

export interface ServiceConfig {
  database: ConnectionOptions;
  server: {
    port: number;
  };
}

const defaultConfig: ServiceConfig = {
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'database',
  },
  server: {
    port: 80,
  },
};

export const config: ServiceConfig = rc('todo', defaultConfig);
