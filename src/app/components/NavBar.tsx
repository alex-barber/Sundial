import * as React from 'react';
import { StoreContext } from './MainFrame';
import { addTest } from '../store/test';
import { db, fBaseTest, addNTest } from '../../../server/firebase';

const NavBar = (props: object) => {
  const [state, dispatch] = React.useContext(StoreContext);
  const [stuff, setStuff] = React.useState([]);
  const [name, setName] = React.useState('')
  // //
  React.useEffect(() => {
    const unsubscribe = db
      .collection('cities')
      .onSnapshot(
        (doc: any) => {
            let newArr: any =[]
            doc.docs.forEach((val: any) => newArr.push(val.data()))
console.log(newArr)
            // doc.docs.forEach( async (val: any) => (console.log(val.data()), await setStuff([...stuff, val.data()])))
            return setStuff( newArr)
        }
      );
    return () => unsubscribe();
  }, []);

  const fBaseGetTest = () =>
    db
      .collection('cities')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); // array of cities objects
        setStuff([...stuff, data]);
        console.log(stuff);
      });

  return (
    console.log(stuff),
    console.log('rendering'),
    (
      <div>
        <div
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: '4vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          CLOCKJOURNAL
        </div>
        <span>{state.testState}</span>
        <button onClick={() => dispatch(addTest('ROGER'))}>ROGER</button>
        <button onClick={() => dispatch(addTest('ALEX'))}>ALEX</button>
          <form onSubmit={(event: any)=>{
              event.preventDefault()
              console.log( name)
              addNTest(name)
              setName('')
          }} >
              <input type ='text' value={name} onChange={e => setName(e.target.value)} />
<input type='submit' value = "Submit"/>
          </form>

        <button onClick={() => fBaseTest()}>FireBase</button>
        {/*<button onClick={() =>  (fBaseGetTest(), console.log(stuff))}>FireBase</button>*/}
        {stuff != null && stuff.map((city: any) => <h1>{city.name} </h1>)}
        {/*{stuff.length >1 && stuff.map(city=> <h1>{city.name}</h1> ) }*/}
      </div>
    )
  );
};

export default NavBar;
