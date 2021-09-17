import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async listar() {
        let r = await api.get('/produto')
        return r.data;
    }

    async inserir(nmproduto, dscategoria, precode, precopor, avaliacao, dsproduto, qtdestoque, imgproduto, btativo, dtinclusao){
        let r = await api.post('/produto', {nmproduto, dscategoria, precode, precopor, avaliacao, dsproduto, qtdestoque, imgproduto, btativo, dtinclusao})
        return r.data;
    }

    async alterar(id, nmproduto, dscategoria, precode, precopor, avaliacao, dsproduto, qtdestoque, imgproduto, btativo, dtinclusao){
        let r = await api.put(`/produto/${id}`, { nmproduto, dscategoria, precode, precopor, avaliacao, dsproduto, qtdestoque, imgproduto, btativo, dtinclusao})
        return r.data;
    }

    async remover(id){
        let r = await api.delete(`/produto/${id}`)
        return r.data;
    }
}