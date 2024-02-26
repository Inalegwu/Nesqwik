import { Query, Resolver } from "@nestjs/graphql";
import { Todo } from "../models/Todo";

@Resolver()
export class TodoResolver {
  @Query((returns) => Todo)
  getTodos() {
    return {
      id: 1,
      content: "Upload Nesquick starter to Github",
    };
  }
}
