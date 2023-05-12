type MyAwaited<T> = T extends { then: (onfulfilled: (arg: infer k) => any) => any } ? k extends Promise<unknown> ? MyAwaited<k> : k : never
