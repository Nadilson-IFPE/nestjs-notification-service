// Helper function fo TypeScript que recebe a tipagem original e a tipagem que a substituir√°.
export type Replace<T, R> = Omit<T, keyof R> & R;
