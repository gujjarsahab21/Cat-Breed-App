import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/CatDetail.css'; 

function CatDetail() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [catImage, setCatImage] = useState(null); 
  const API_KEY = import.meta.env.VITE_API_KEY; 

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCat(data);      
        if (data.reference_image_id) {
          fetch(`https://api.thecatapi.com/v1/images/${data.reference_image_id}`, {
            headers: {
              'x-api-key': API_KEY,
            },
          })
            .then((response) => response.json())
            .then((imageData) => {
              setCatImage(imageData); 
            })
            .catch((error) => console.error('Error fetching cat image:', error));
        }
      })
      .catch((error) => console.error('Error fetching cat data:', error));
  }, [id, API_KEY]);

  if (!cat) return <p>Loading...</p>;

  return (
    <div className="container cat-detail">
      <div className="card mt-4 shadow-lg p-4">
        <div className="text-center">
          <h1 className="cat-title">{cat.name}</h1>
          <hr className="my-4" />
        </div>
        {catImage ? (
          <div className="image-wrapper">
            <img
              src={catImage.url}
              alt={cat.name}
              className="cat-image img-fluid rounded mx-auto d-block"
            />
          </div>
        ) : (
          <p className="text-center">Loading image...</p>
        )}
        <div className="card-body">
          <h5 className="card-title">About {cat.name}</h5>
          <p className="card-text">{cat.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Origin:</strong> {cat.origin}</li>
            <li className="list-group-item"><strong>Life Span:</strong> {cat.life_span} years</li>
            <li className="list-group-item"><strong>Temperament:</strong> {cat.temperament}</li>
            <li className="list-group-item"><strong>Weight:</strong> {cat.weight.metric} kg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatDetail;
