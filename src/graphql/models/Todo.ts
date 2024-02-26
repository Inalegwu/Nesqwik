import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Todo {
  @Field()
  id: string;

  @Field({ nullable: false })
  content: string;
}
