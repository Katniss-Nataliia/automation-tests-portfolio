import * as dotenv from 'dotenv';
import * as path from 'path';
import { getEnvVar } from './utils/env';
import { get } from 'http';
const ENV = process.env.NODE_ENV ?? 'production';

dotenv.config({ path: path.resolve(__dirname, 'env', `.env.${ENV}`) });

interface TestConfig {
    url: string;
    userEmail: string;
    password: string;
    name: string;
}

interface TestConfigs {
    [key: string]: TestConfig;
}

let configs: TestConfigs | null = null;

export const getTestConfigs = (): TestConfigs => {
    if (!configs) {
        configs = {
            DEFAULT: {
                url: getEnvVar('URL'),
                userEmail: getEnvVar('USER_EMAIL'),
                password: getEnvVar('PASSWORD'),
                name: getEnvVar('NAME')
            },
            
        };
    }
    return configs;
};
