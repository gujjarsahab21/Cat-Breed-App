import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/CatList.css'; 

function CatList() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCats, setVisibleCats] = useState(16); 

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showMoreCats = () => {
    setVisibleCats((prev) => prev + 16);
  };

  const playAudio = () => {
    const audio = new Audio('/catClick.mp3'); 
    audio.play();
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Cat Breeds</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="row">
        {filteredCats.slice(0, visibleCats).map((cat) => (
          <div key={cat.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={cat.reference_image_id `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                alt={cat.name}
                className="card-img-top cat-image"
              />
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">{cat.description.substring(0, 80)}...</p>
                <Link to={`/cat/${cat.id}`} className="btn btn-primary" onClick={playAudio}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCats < filteredCats.length && (
        <button className="btn btn-secondary" onClick={showMoreCats}>
          View More
        </button>
      )}
    </div>
  );
}

export default CatList;
