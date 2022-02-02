import React from 'react';
// import { useEffect, useState } from 'react';
import Character from './Character';

// function Characters({ page }) {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//       .then((res) => res.json())
//       .then((data) => setCharacters(data.results))
//       .then(() => setLoading(false))
//       .catch((err) => console.log(err));
//   }, [page]);

//   return (
//     <div>
//       <h1>characters</h1>
//       <section
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '50px',
//         }}
//       >
//         {!loading ? (
//           characters.map((character) => (
//             <Character key={character.id} character={character} />
//           ))
//         ) : (
//           <h3>Loading ....</h3>
//         )}
//       </section>
//     </div>
//   );
// }

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
    };
  }

  fetchCharacters = (page) => {
    this.setState({ loading: true });
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({ characters: data.results, loading: false }),
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchCharacters(this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.fetchCharacters(this.props.page);
    }
  }

  render() {
    return (
      <div>
        <h1>characters</h1>
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '50px',
          }}
        >
          {!this.state.loading ? (
            this.state.characters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          ) : (
            <h3>Loading ....</h3>
          )}
        </section>
      </div>
    );
  }
}

export default Characters;
