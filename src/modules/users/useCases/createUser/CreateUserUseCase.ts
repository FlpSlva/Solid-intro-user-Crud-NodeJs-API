import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

   const AlreadyEmailExists = this.usersRepository.findByEmail(email);

   if(AlreadyEmailExists){
     throw new Error("Email Already is Use")
   }
   
   const user = this.usersRepository.create({email, name});

    return user;
  }
}

export { CreateUserUseCase };
