import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    
    <Container>
        Frete Grátis! Para compras acima de R$150
    </Container>

  )
}

export default Announcement