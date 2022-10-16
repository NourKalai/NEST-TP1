import { Timestamp } from "../generics/timestamps";
import { Entity, PrimaryGeneratedColumn ,Column} from "typeorm";

@Entity('todo')
export class TodoEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "name", length: 20, nullable: true })
    name: string;
    @Column({ nullable: true })
    description: string;
  

}
