import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name : "qrurl"})
export class Qrurl {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    full_url: string;

    @Column()
    qr_image: string;

    @Column()
    view: Number;

    @Column({name :"created_at",type : "timestamp",default :  () => "CURRENT_TIMESTAMP"})
    create_at: Date;
}