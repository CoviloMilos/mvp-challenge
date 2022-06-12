import { IsNotEmpty } from "class-validator";
import { IsValidRegex } from "../utils";

export class Pattern {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsValidRegex()
  regex: string;
}
