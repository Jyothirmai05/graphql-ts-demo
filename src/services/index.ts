import { Container } from "typescript-ioc";

export * from './hello-world.api';
export * from './project.api';
export * from './task.api';

import config from './ioc.config';

Container.configure(...config);

export * from './stock-items.api';
export * from './stock-items-mock.service';

export * from './stock-items.service';



