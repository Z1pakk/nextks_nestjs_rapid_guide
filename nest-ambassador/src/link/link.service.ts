import { Injectable } from '@nestjs/common';
import { AbstractService } from "../shared/abstract.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./link";

@Injectable()
export class LinkService extends AbstractService {
  constructor(@InjectRepository(Link) private readonly linkRepository: Repository<Link>) {
    super(linkRepository);
  }
}
