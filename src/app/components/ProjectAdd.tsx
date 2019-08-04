import * as React from 'react';
import {db} from '../../../server/firebase'
import { StoreContext } from '../App';
import * as firebase from 'firebase';
import {addProject} from '../../../utils/projects/addProject'

const ProjectAdd = (props: object) => {
  // const [state, dispatch] = React.useContext(StoreContext);
  // const [stuff, setStuff] = React.useState([]);
  // const [name, setName] = React.useState('')
  // //
  const [addFlag, setAddFlag] = React.useState(false);
  const [name, setName] = React.useState('');



  const addPost =  () => {
       // addProject(name)
      firebase.auth().currentUser
    if (firebase.auth().currentUser !== null && name != '') {

addProject(name)
//         console.log(firebase.firestore().batch())
//         console.log(db())
      //db
      //   .collection('Projects')
      //   .add({
      //     name: name,
      //     dateCreated: new Date().toLocaleString(),
      //     timestamp: Date.now()
      //   })
      //   .then(function(docRef: any) {
      //     console.log('Document written with ID: ', docRef.id);
      //   })
      //   .catch(function(error: any) {
      //     console.error('Error adding document: ', error);
      //   });
      setName('');
    } else console.log('Sign in first!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        onClick={() => (
          setAddFlag(!addFlag),
            addPost()
        )}
        style={{
          margin: '.5rem',
          width: '10vw',
          height: '10vw',
          border: 'blue',
          borderStyle: 'solid',
          backgroundColor: 'lightgrey',
        }}
      >
        +
      </div>

      {addFlag && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <form
            onSubmit={(event: any) => {
              event.preventDefault();
              addPost();
            }}
          >
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectAdd;
