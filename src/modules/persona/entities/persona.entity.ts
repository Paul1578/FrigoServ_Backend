import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;
    
    @Column()
    apellidos: string;

    @OneToOne(()=>User)
    user: User

    
}
