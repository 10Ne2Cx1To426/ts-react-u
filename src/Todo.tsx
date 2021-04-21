import { VFC } from "react";
import { TodoType } from "./types/Todo";

export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title} (ユーザーID:${userId})`}</p>;
};
