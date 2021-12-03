import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
  const id =  this.usersRepository.findById(user_id);

  if(!id){
    throw new Error("User Does Not Exists")
  }

  const update = this.usersRepository.turnAdmin(id);

    return update;
  }
}

export { TurnUserAdminUseCase };
