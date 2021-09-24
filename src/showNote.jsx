import React from 'react'

const DisplayNote = (props) => {
	const deleteNote = () => {
		props.delete(props.id)
	}
	return(
		 <>
	     <div className="card mx-3 my-2" style={{width:"fit-content"}}>
	       <div className="card-body">
	         <h6 className="card-title">{props.title}</h6>
	         <p className="card-text">{props.content}</p>
	         <button className="btn btn-info" onClick={deleteNote}>Delete</button>
	       </div>
	     </div>
		 </>
		)
}
export default DisplayNote