import { IsNumber, IsOptional, IsString, IsUUID, Validate } from "class-validator";
import { MediaIdExistsValidator } from "src/contexts/media/validators/media-id-exists.validator";
import { UserIdExistsValidator } from "src/contexts/users/infraestructure/validators/user-id-exists.validator";

export class CreateTaskListDto {
    @IsString()
    title: string;

    @IsUUID()
    @Validate(UserIdExistsValidator)
    userId: string;

    @IsUUID()
    @IsOptional()
    @Validate(MediaIdExistsValidator)
    mediaImageId: string;
}