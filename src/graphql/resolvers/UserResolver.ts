import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      username: "Ina",
      displayName: "DisgruntledDev",
    };
  }

  @Query((returns) => User)
  getUserById() {
    return {
      id: 2,
      username: "Someone Else",
      displayName: "another person",
    };
  }
}
