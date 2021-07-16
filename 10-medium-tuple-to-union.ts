type TupleToUnion<T> = T extends unknown[] ? T[number] : never;
