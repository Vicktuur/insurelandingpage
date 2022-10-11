import '../App.css'
import styled from 'styled-components'

const Aboutus = styled.div`
 text-align: center;
 margin: 60px 0;
 h2 {
  font-weight:400;
  padding: 20px 0;
 }
 p {
  width: 300px;
  margin: auto;
  color: hsl(216, 30%, 68%);
 }

 @media (min-width: 800px){
  text-align: left;
  h2 {
    font-weight:400;
    padding: 20px 0;
   }
  p {
    margin-left: 0;
   }
 }
`
export default function About ({img,head,text}) {
    return (
      <Aboutus>
        <img src={img} alt=''/>
        <h2>{head}</h2>
        <p>{text}</p>
      </Aboutus>
    )
}