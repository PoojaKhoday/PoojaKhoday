import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PsswordModuleBase } from "./base/pssword.module.base";
import { PsswordService } from "./pssword.service";
import { PsswordController } from "./pssword.controller";
import { PsswordResolver } from "./pssword.resolver";

@Module({
  imports: [PsswordModuleBase, forwardRef(() => AuthModule)],
  controllers: [PsswordController],
  providers: [PsswordService, PsswordResolver],
  exports: [PsswordService],
})
export class PsswordModule {}
