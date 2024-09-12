import { DateTimeType, PrimaryKey, Property } from "@mikro-orm/core";

export abstract class BaseEntity{
    @PrimaryKey()
    id?:number

    @Property()
    createdAt = new Date()

    @Property({
        type: DateTimeType,
        onUpdate: () => new Date(),
    }
    )
    updatedAt? = new Date();
}