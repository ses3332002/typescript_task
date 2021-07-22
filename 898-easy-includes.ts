type Includes<T extends readonly any[], U> = U extends T[number]
  ? U extends number | string
    ? true
    : false
  : false;
