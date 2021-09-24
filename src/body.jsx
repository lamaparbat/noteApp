import React,{ useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateNote from './createNote'
import DisplayNote from './showNote'

const Body = () => {
	let [list, appendData] = useState([])
	const addNote = (props) => {
		appendData((prev) => {
			return [...prev, props]
		})
	}
	const deleteNote = (id) => {
		console.log(id)
		appendData((prev) => {
			list = prev.filter((obj,index) => {
				return index !== id
			})
			return list
		})
	}
	return(
		  <>
		   <CreateNote add={addNote} />
		   <div className="container">
		     <div className="row d-flex">
			   {
			   	list.map((val,index) => {
			   		return <DisplayNote title={val.title} content={val.content} id={index} delete={deleteNote}/>
			   	})
			   }  
		     </div>
		   </div>
		  </>
		)
}
export default Body