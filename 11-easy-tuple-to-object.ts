type TupleToObject<T extends readonly any[]> = { [I in T[number]]: I };
