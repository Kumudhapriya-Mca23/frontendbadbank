import Card from 'react-bootstrap/Card';
import bank from './images/bank2.avif';
import './App.css'

function Home(){

    return(<>
    
    <Card className="text-center">
      
      <Card.Body>
        <Card.Title className='title'>  BAD BANK</Card.Title>
        <Card.Text>
       <img className='homeimg' src={bank} alt='' height='500px' width='1300px'></img>
       
          </Card.Text>
      </Card.Body>
    </Card>
    <footer style={{height:"80px",padding:"30px"}} >
      Developed by@Kumudhapriya
    </footer>
    </>)
}

export default Home;