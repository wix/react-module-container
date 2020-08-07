export interface FileConfig {
  url: string;
  optional?: boolean;
}

export interface Manifest {
  component: string;
  module?: string;
  files?: (string | FileConfig)[];
  resolve?: () => Promise<any>;
  prepare?: () => unknown;
  crossorigin?: true | false;
  unloadStylesOnDestroy?: true | false;
}