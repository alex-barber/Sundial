import * as React from "react";
import {db} from '../App'
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
  if (firebase.auth().currentUser !==null){
    console.log('hitting')
    const unsubscribe = db()
      .collection('Projects').where("users.creator", '==', firebase.auth().currentUser.uid )
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
    return () => unsubscribe();}
  }, []);


  return (
<div>
  {myProjects.length>1 && myProjects.map( project => {
    <span>{project.name}</span>
  })}
    <ProjectAdd/>
</div>

  );

}

export default ProjectView;
