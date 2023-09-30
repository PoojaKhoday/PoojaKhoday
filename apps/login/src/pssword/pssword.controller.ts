import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PsswordService } from "./pssword.service";
import { PsswordControllerBase } from "./base/pssword.controller.base";

@swagger.ApiTags("psswords")
@common.Controller("psswords")
export class PsswordController extends PsswordControllerBase {
  constructor(
    protected readonly service: PsswordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
