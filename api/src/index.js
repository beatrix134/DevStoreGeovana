import db from './db.js';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async(req, resp) => {
try{
    let prodt = await db.tb_produto.findAll({order: [['id_produto', 'desc']] });
    resp.send(prodt);
} catch (e){
    resp.send({erro: e.toString()})
}

})

app.post('/produto', async (req, resp) => {
    try{
        let nmproduto = req.body.nm_produto;
      let dscategoria = req.body.ds_categoria;
      let precode = req.body.vl_preco_de;
      let precopor = req.body.vl_preco_por;
      let avaliacao = req.body.vl_avaliacao;
      let dsproduto = req.body.ds_produto;
      let qtdestoque = req.body.qtd_estoque;
      let imgproduto = req.body.img_produto;
      let btativo = req.body.bt_ativo;
    let dtinclusao = req.body.dt_inclusao;

        console.log(nmproduto);

        let r = await db.tb_produto.create({
            nm_produto: nmproduto,
            ds_categoria: dscategoria,
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao,
            ds_produto: dsproduto,
            qtd_estoque: qtdestoque,
            img_produto: imgproduto,
            bt_ativo: btativo,
            dt_inclusao: dtinclusao

        })
        resp.send(r);
    }catch (e) {
        resp.send({erro: e.toString() })
    }
})

app.put ('/produto/:id', async(req, resp) =>{
    try{
        let nmproduto = req.body.nm_produto;
      let dscategoria = req.body.ds_categoria;
      let precode = req.body.vl_preco_de;
      let precopor = req.body.vl_preco_por;
      let avaliacao = req.body.vl_avaliacao;
      let dsproduto = req.body.ds_produto;
      let qtdestoque = req.body.qtd_estoque;
      let imgproduto = req.body.img_produto;
      let btativo = req.body.bt_ativo;
    let dtinclusao = req.body.dt_inclusao;
        
        let id = req.params.id;
        let r = await db.tb_produto.update(
            {
                nm_produto: nmproduto,
            ds_categoria: dscategoria,
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao,
            ds_produto: dsproduto,
            qtd_estoque: qtdestoque,
            img_produto: imgproduto,
            bt_ativo: btativo,
            dt_inclusao: dtinclusao
            }, 
            {
                where: { id_produto: id }
            }
        )
        resp.sendStatus(200);
    }catch (e) {
        resp.send({ erro: e.tostring() })
    }
})

app.delete ('/produto/:id', async(req, resp) =>{
try{
    let id = req.params.id;
    let r = await db.tb_produto.destroy ({where: {id_produto: id} })
    resp.sendStatus(200);
}catch (e) {
    resp.send({ erro: e.tostring() })
}

})



app.listen(process.env.PORT,
x => console.log(`Server up at port ${process.env.PORT}`))