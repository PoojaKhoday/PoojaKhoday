import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PsswordServiceBase } from "./base/pssword.service.base";

@Injectable()
export class PsswordService extends PsswordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
