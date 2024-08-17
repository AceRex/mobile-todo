interface Todo {
  title: string;
  description: string;
}

export interface RootState {
  todo: {
    list: Todo[];
  };
}
