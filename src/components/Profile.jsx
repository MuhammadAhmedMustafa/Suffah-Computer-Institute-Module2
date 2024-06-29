// export default function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/QIrZWGIs.jpg"
//         alt="Alan L. Hart"
//       />
//     );
//   }


//  const Profile = ()=> {
//   const imageAlt = 'Alan L. Hart Jeffery';  
//     return (
//       <img
//         src=""
//         alt={imageAlt}
//       />
//     );
//   }
import {getImageUrl} from "./../utils/utils"
export default function Profile() {
  const perObj = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    size:200
  }
  return (
    <Card>
      <Avatar
        size={perObj.size}
         person={perObj}
        // person={ {
        //   name: 'Katsuko Saruhashi',
        //   imageId: 'YfeOqp2'
        // }}
      />

      {/* <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        // size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      /> */}
    </Card>
  );
}

// function Avatar({ person, size=100 }) {
  function Avatar(props) {
  console.log('props',props);
    const { person, size } = props;

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}


