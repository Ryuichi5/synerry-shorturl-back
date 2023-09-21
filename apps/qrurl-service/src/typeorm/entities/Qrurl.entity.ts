import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name : "qrurl"})
export class Qrurl {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    full_url: string;

    @Column()
    qr_image: string;

    @Column({ default: 0 })
    view: number;

    @Column({ default: null }) // Define the 'user_id' column
    user_id: number; // Store the user ID

    @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    create_at: Date;
}
