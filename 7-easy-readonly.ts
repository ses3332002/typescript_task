type MyReadonly<T> = { readonly [I in keyof T]: T[I] };
