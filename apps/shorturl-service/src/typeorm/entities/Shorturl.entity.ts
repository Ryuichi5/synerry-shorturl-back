import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name : "shorturl"})
export class Shorturl {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    full_url: string;

    @Column()
    short_url: string;

    @Column()
    view: Number;

    @Column({name :"created_at",type : "timestamp",default :  () => "CURRENT_TIMESTAMP"})
    create_at: Date;
}