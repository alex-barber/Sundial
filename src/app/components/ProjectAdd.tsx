import * as React from 'react'
import { db } from '../../../server/firebase'
import { StoreContext } from '../App'
import * as firebase from 'firebase'
import { addProject } from '../../../utils/projects/addProject'

const ProjectAdd = (props: object) => {
  const [addFlag, setAddFlag] = React.useState(false)
  const [name, setName] = React.useState('')

  const addPost = () => {
    firebase.auth().currentUser
    if (firebase.auth().currentUser !== null && name != '') {
      addProject(name)
      setName('')
    } else console.log('Sign in first!')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        onClick={() => (setAddFlag(!addFlag), addPost())}
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
        <div>
          <form
            className="mt-1"
            onSubmit={(event: any) => {
              event.preventDefault()
              addPost()
            }}
          >
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ProjectAdd
