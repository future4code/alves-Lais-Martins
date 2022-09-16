import { Basedatabase } from "./Basedatabase"
import { User } from "../model/User"

export class UserDatabase extends Basedatabase {
    public async createUser(user: User){
        try{
            await Basedatabase.connection("lbn_user").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        }catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try{
            const user = await Basedatabase.connection('lbn_user')
                .select('*')
                .where({ email });
            return user[0] && User.toUserModel(user[0])  

        } catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    // public async getAllUsers(): Promise<User[]>{
    //     try{
    //     const users = await Basedatabase.connection('lbn_user').select(
    //         "id", 
    //         "name", 
    //         "email", 
    //         "role" 
    //     ) return users.map((users = User.toUserModel(users)))
    //     } catch(error: any){

    //     }
    // }
}