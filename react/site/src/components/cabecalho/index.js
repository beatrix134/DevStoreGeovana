import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <div className="reader-right-box">
                <div className="box-user"> 
                    <div className="user-image">
                        <img src="/assets/images/usuario.jpeg" alt="" />
                        <div className="absolute">100</div>
                    </div>
                    <div className="user-name"> Olá, <b>Kaique Do Grau</b> </div>
                </div>
                
                <div className="box-image">
                    <div className="refresh-button"> <button> <img src="/assets/images/refresh.svg" alt = "" />  </button> </div>
                    <div className="left-button"> <button> <img src="/assets/images/log-out.svg" alt = "" />  </button> </div>
                </div>
            </div>
            <div className="bottom-bar-right-header" />
        </Container>
    )
}