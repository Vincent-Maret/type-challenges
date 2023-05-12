type First<T extends unknown[]> = T extends [unknown, ...unknown[]] ? T[0] : never
