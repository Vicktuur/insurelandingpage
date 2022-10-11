import '../App.css'
import styled from 'styled-components'

const Contactus = styled.div`
text-align: center;

h5 {
    color: hsl(216, 30%, 68%);
    margin-top: 50px;
    margin-bottom: 30px;
}
li a{
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin-top: 15px;
}
li a:hover {
    text-decoration: underline;
}
`
export default function Contact ({head,a1,a2,a3}) {
    return (
      <Contactus>
        <h5>{head}</h5>
            <li className='social'><a href='#'>{a1}</a></li>
            <li className='social'><a href='#'>{a2}</a></li>
            <li className='social'><a href='#'>{a3}</a></li>
      </Contactus>
    )
  }