import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  APP_PORT: number;
  APP_URL: string;
}

const envsSchema = joi
  .object({
    APP_PORT: joi.number().required(),
    APP_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  appPort: envVars.APP_PORT,
  appUrl: envVars.APP_URL,
};
