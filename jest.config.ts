import type { Config } from '@jest/types';
import { getJestProjects } from '@nrwl/jest';

const config: Config.InitialOptions = {
  projects: getJestProjects()
};

export default config;
