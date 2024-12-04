import {Router} from 'express'
import * as apiConstroller from '../controllers/apiController'


const router = Router()

router.get('/ping',apiConstroller.ping)

// numeros aleatorios
router.get('/random',apiConstroller.random)
  
router.get('/nome/:nome',apiConstroller.nome)

//criando endpoint frases
router.post('/frases',apiConstroller.criarFrase)

router.get('/frases',apiConstroller.listarFrases)

router.get('/frases/:id',apiConstroller.listarPorId)

router.put('/frases/:id',apiConstroller.editarFrase)

router.delete('/frases/:id',apiConstroller.deletarFrase)

export default router