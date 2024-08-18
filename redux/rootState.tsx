interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface RootState {
  todo: {
    list: Todo[];
    completedTodo: Todo[];
  };
}
