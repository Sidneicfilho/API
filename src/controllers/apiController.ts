import { Request, Response } from "express";
import { Frases } from "../models/Frases";

export const ping = (req:Request, res:Response)=>{

    res.json({pong:true})
}

export const random = (req:Request, res:Response)=>{

    let nRand: number = Math.floor(Math.random() * 10)
    res.json({number: nRand})
}

export const nome = (req:Request, res:Response)=>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome : ${nome}`})
}

export const criarFrase = async (req:Request, res:Response)=>{
    let {autor,texto}  = req.body
    let novaFrase = await Frases.create({autor,texto})
    res.json({id: novaFrase.id, autor,texto})
    }
    //Os dados serão recebidos no corpo da requisição
    
export const listarFrases = async (req:Request, res:Response)=>{

    let frases = await Frases.findAll()
    
    res.json({frases})
   
}
export const listarPorId = async (req:Request, res:Response)=>{
    let {id} = req.params

    let frases = await Frases.findByPk(id)
    
    if(frases){
        res.json({frases})
    }else{
        res.json({erro: 'Frase não existe'})
    }
}
export const editarFrase = async (req:Request, res:Response)=>{
    let {id} = req.params
    let {autor, texto} = req.body
    let frase = await Frases.findByPk(id)
    if(frase){
        frase.autor = autor
        frase.texto = texto

        await frase.save()
        res.json({frase})
    }else{
        res.json({error: 'frase não existe'})
    }

}
export const deletarFrase = async (req:Request, res:Response)=>{
    let {id}= req.params

    await Frases.destroy({
        where:{id}

    })
    res.json({})
}


    
