import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TodoResolver } from "./graphql/resolvers/TodoResolver";
import { UserResolver } from "./graphql/resolvers/UserResolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
    }),
  ],
  controllers: [],
  providers: [UserResolver, TodoResolver],
})
export class AppModule {}
