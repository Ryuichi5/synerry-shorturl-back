import { Qrurl } from "apps/qrurl-service/src/typeorm/entities/Qrurl.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name : "users"})
export class Users {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({name :"created_at",type : "timestamp",default :  () => "CURRENT_TIMESTAMP"})
    create_at: Date;

   

}