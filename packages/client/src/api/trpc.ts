import { createTRPCClient } from '@trpc/client';
import { AppRouter } from 'api-server/router/app';

export const trpc = createTRPCClient<AppRouter>({
  url: 'http://localhost:9090/trpc',
});
