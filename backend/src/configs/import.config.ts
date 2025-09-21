import { AuthModule } from "src/managements/auth/modules/auth.module";
import { UsersModule } from "src/managements/users/modules/users.module";

export const importModule = [
    AuthModule,
    UsersModule
]