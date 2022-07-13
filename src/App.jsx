import React, { useState, useEffect } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PlanList from './components/PlanList'

const App = () => {

	const [value, setValue] = useState('');
	const [items, setItems] = useState([]);
	const [update_id, setUpdateId] = useState([]);

	const handleChange = (e) => {
		console.log('onchange')
		setValue(e.target.value)
	}

	const listAdd = () => {
		if (value.trim() === "") {
			alert("Value is Empty")
			return false
		}

		if (update_id[1]) {
			const new_items = items.map((item, i) => {

				if (update_id[0] == i && item == update_id[1]) {
					item = document.getElementById('plan').value
					return item
				}
				return item
			})
			console.log("item update after :::: ", ...new_items)
			setItems([...new_items])
			setUpdateId([""])
			setValue("")
			document.getElementById("addbutton").innerHTML = "Add"
			return false
		}
		setItems([...items, value])
		setValue("")
		setUpdateId([""])

	}


	const listUpdate = (id) => {
		const old_value = items.at(id)
		setValue(old_value)
		document.getElementById("addbutton").innerHTML = "Update"
		setUpdateId([id, old_value])

	}


	const deleteList = (id) => {
		if (update_id[1]) {
			alert("First Update After you can Delete")
			return false;
		}
		const old_item = [...items]
		old_item.splice(id, 1)
		console.log(items.at(id), "Delted Success", ...old_item)
		setItems([...old_item])
	}


	return (

		<div className="container-fluid my-5">
			<div className='row'>

				<div className='col-sm-6 mx-auto text-white shadow-lg p-3 '>
					<h2 className='text-center'> Today's Plan </h2>
					<div className='row'>

						<div className='col-9'>
							<input type='text' className='form-control' onChange={handleChange} id='plan' placeholder='Write Plan Here' value={value} />

						</div>

						<div className="col-2">
							<button className='btn btn-warning px-5 font-weight-bold' type='submit' id="addbutton" onClick={listAdd} >Add</button>

						</div>

						<div className="conatainer-fluid">
							<ul className="list-unstyled row m-5">
								<div className="conatainer-fluid">

									<ul className="list-unstyled row m-9">
										< PlanList items={items} deleteList={deleteList} listUpdate={listUpdate} />
									</ul>

								</div>
							</ul>
						</div>

					</div>

				</div>

			</div>

		</div>
	)
}

export default App


// 11:08 == 47