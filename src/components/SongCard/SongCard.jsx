import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SongCard({image, name, artist, album}) {
  return (
    <Card style={{ width: '15rem' }}  className='bg-transparent border-0 custom-shadow '>
      <Card.Img  className='rounded' variant="top" src={image} />
      <div className='text-white text-center'>
        <Card.Text>{name}</Card.Text>
      </div>
    </Card>
  );
}

export default SongCard;