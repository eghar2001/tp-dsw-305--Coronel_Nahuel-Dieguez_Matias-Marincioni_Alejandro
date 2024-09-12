import { DateType, Entity, Property} from '@mikro-orm/core';
import { BaseEntity } from '../shared/base.entity.js';
@Entity()
export class Usuario extends BaseEntity{
    @Property({nullable:false})
    nombre!:string

    @Property({nullable:false})
    apellido!:string

    @Property({nullable:false})
    telefono!:string

    @Property({nullable:false,
        type: DateType
    })
    fechaNacimiento?:Date

    @Property({nullable:false,
                unique:true
    })
    username!:string

    @Property({nullable:false,
            unique:true
    })
    email!:string



    @Property({nullable:false})
    password?:string


    
}
