import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name : "shorturl"})
export class Shorturl {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    full_url: string;

    @Column()
    short_url: string;

    @Column({default : 0})
    view: Number;

    @Column({ default: null }) // Define the 'user_id' column
    user_id: number; // Store the user ID

    @Column({name :"created_at",type : "timestamp",default :  () => "CURRENT_TIMESTAMP"})
    create_at: Date;
}