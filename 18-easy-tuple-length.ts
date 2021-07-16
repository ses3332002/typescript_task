type Length<T extends any> = 'length' extends keyof T ? T['length'] : never;
