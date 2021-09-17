
import './produt.css'
export default function DevStore (){
return(




<div className="container">
        
        <menu/>
          <div className="ladoesquerdo">

              <div className="cabecalho-le"> <img src="/assets/images/Vector.png" alt=""/> <div className="palavra-cabeca"><b>Dev</b>Store</div> </div>
             
              <div className="espaco-preto"></div>
             
              <div className="ultparte-cab">
                  <div className="ger"> Gerenciamento <div className="seta"> <img src="/assets/images/seta.png" alt=""/></div> </div>
                  <div className="alunos"> <div className="barrinha"></div>Produto </div>    
               </div> 

          </div>


          <div className="ladodireito">
              <div className="cabecalho-ld">
                <div className="cima">
                  <div className="lado-usu">
                      <div className="foto"><img src="/assets/images/usuario.jpeg" alt=""/> <div className="bolinha">100</div> <div className="name-usu"> Olá, Kaique Mandrake  </div> </div>
                  </div>

                  <div className="lado-botao">
                      <div className="bot1"><button><img src="/assets/images/Atualizar.png" alt=""/></button></div>
                      <div className="bot2"><button><img src="/assets/images/sair.png" alt=""/></button></div>
                  </div>
                </div>
                <hr/>
               </div>

                 <div className="conteudo-ld">
                  <div className="form">
                      <div className="titulo-form">
                          <div className="barrona"></div>
                          <div className="texto"> Novo produto </div>
                      </div>

                    <div className="tudin">
                      <div className="inputs">
                       <div className="container-f1">

                          <div className="bloco1">
                             <label for="nome"> <b>Nome:</b> </label>
                             <input className="nome-b1" name="nome" type="text" /> 
                          </div>

                          <div className="bloco">
                             <label for="chamada"> <b>Categoria:</b> </label>
                              <input className="nome-b1" name="chamada" type="text"  /> 
                          </div>

                          <div className="bloco">
                             <label for="chamada"> <b>Avaliação:</b> </label>
                              <input className="nome-b1" name="chamada" type="text"  /> 
                          </div>
                        </div>

                    <div className="container-f2">

                      <div className="bloco3">
                             <label for="curso"> <b>Preço DE:</b> </label>
                              <input className="nome-b1" name="curso" type="text"  /> 
                          </div>

                          <div className="bloco">
                             <label for="turma"> <b>Preço POR:</b> </label>
                              <input className="nome-b1" name="turma" type="text" /> 
                          </div>

                          <div className="blocoe">
                             <label for="turma"> <b>Estoque:</b> </label>
                              <input className="nome-b1" name="turma" type="text"  /> 
                          </div>
                      </div>

                      
                   </div>

                   
                   <div className="blocod">
                     <label for="chamada"> <b>Link imagem:</b> </label>
                      <input className="nome-b1" name="chamada" type="text"  /> 
                  </div>


                  <div className="ooi">
                  <div className="blocodd">
                     <label className="textinhoo" for="chamada"> <b>Descrição:</b> </label>
                     <input className="nome-b1" name="chamada" type="text"  />
                  </div>

                    <button  className="cadastrar"> cadastrar </button>
                
                  </div>
                     

                </div> 

                  </div>

               <div className="tabela">
                <div className="titulo-tb">
                          <div className="barrona"></div>
                          <div className="texto"> Produtos Cadastrados </div>
                      </div>
                      <table class ="table-user">
                  <thead>
                      <tr>
                          <th class="img"> </th>
                          <th > ID </th>
                          <th> Produto </th>
                          <th> Categoria </th>
                          <th> Preço</th>
                          <th> Estoque </th>
                          <th className="a"> </th>
                          <th className="a"> </th>
                      </tr>
                  </thead>
          
                  <tbody>
                  <tr >
                          <td> 1 </td>
                          <td> Esfera do Dragão</td>
                          <td> Acessórios </td>
                          <td> R$ 15,56 </td>
                          <td > 14 </td>
                          <td> <button> <img src="/html-css-puro/public/assets/images/editiButton.svg" alt="" /> </button> </td>
                          <td class = "aa">   <button> <img src="/html-css-puro/public/assets/images/Group106.svg" alt="" /> </button> </td>
                      </tr>

                  
                      
                  </tbody> 

              </table>
        

              </div>
            </div>

          </div>







      </div>
        )


}