import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface FrasesInstance extends Model{
    id:number,
    autor:string,
    texto:string
}
export const Frases = sequelize.define<FrasesInstance>("Frases,",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    autor:{
        type:DataTypes.STRING
    },
    texto:{
        type:DataTypes.STRING
    }
},{
    tableName:'frases',
    timestamps:false

})