import * as React from "react";
import {db} from '../../../server/firebase'
import ProjectAdd from "./ProjectAdd";
import * as firebase from 'firebase';

const ProjectView = (props: object) => {
  // const [state, dispatch] = React.useContext(StoreContext);
  // const [stuff, setStuff] = React.useState([]);
  // const [name, setName] = React.useState('')
  // //
  const [myProjects, setProjects]= React.useState([])


  //TODO: fix this
React.useEffect(() => {


    const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
        console.log('changing: ', user )
        if (user!=null){
            console.log(user.uid)

            db()
      .collection('Projects').where("users.creator", '==', user.uid )
      .onSnapshot(
        (doc: any) => {
          console.log(doc)
            let newArr: any =[]
            doc.docs.forEach((val: any) => newArr.push(val.data()))
console.log(newArr)
            // doc.docs.forEach( async (val: any) => (console.log(val.data()), await setStuff([...stuff, val.data()])))
            return setProjects( newArr)
        }
      );
        }
    })

    console.log('first hit', firebase.auth().currentUser)
//   if (firebase.auth().currentUser !==null){
//     console.log('hitting')
//     const unsubscribe = db()
//       .collection('Projects').where("users.creator", '==', firebase.auth().currentUser.uid )
//       .onSnapshot(
//         (doc: any) => {
//           console.log(doc)
//             let newArr: any =[]
//             doc.docs.forEach((val: any) => newArr.push(val.data()))
// console.log(newArr)
//             // doc.docs.forEach( async (val: any) => (console.log(val.data()), await setStuff([...stuff, val.data()])))
//             return setProjects( newArr)
//         }
//       );
//     return () => unsubscribe();
// }
  }, []);


  return (
<div>
      <ProjectAdd/>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {myProjects.length>1 &&
  (console.log('hitting', myProjects[1].name), myProjects.map( project => {
      return(

    <div         style={{
        margin: '.5rem',
          width: '10vw',
          height: '10vw',
          border: 'blue',
          borderStyle: 'solid',
          backgroundColor: 'lightgrey',
        }}>{project.name}</div>
          )})

  )}
      </div>
</div>

  );

}

export default ProjectView;
