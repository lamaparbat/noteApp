import React,{ useState } from 'react'

const CreateNote = (props) => {
	const [input, setInput] = useState({
		title : '',
		content:''
	})

	const inputEvent = (e) => {
		const {name,value} = e.target
		setInput((prev) => {
			return{
				...prev,
			    [name]: value,
			}
		})
	}

	const addNote = () => {
		props.add(input)
	}
	return(
		 <>
		  <div className="container mt-4 mb-4 text-center">
		    <form>
		        <p>{input.title}{input.content}</p>
		    	<input className="px-3 py-1 border-0 bg-light " type="text" name="title" value={input.title} placeholder="Title..." onChange={inputEvent}/><br /><br /> 
		    	<textarea className="px-3 py-1 border-0 bg-light " name="content" value={input.content} placeholder="content.." id="content" onChange={inputEvent}></textarea><br />
		    	<button type="button" className="btn btn-info text-light" onClick={addNote}>Add Notes</button>
		    </form>
		  </div>
		 </>
		)
}
export default CreateNote