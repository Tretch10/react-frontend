import React, {useState, useEffect} from 'react'
import RocketService from '../services/RocketService'

const RocketListComponent = () => {

    const [rockets, setRockets] = useState([])

    useEffect(() => {
        
        RocketService.getAllRockets().then((response) =>{
            setRockets(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
        
    }, [])

  return (
    <div className = "container">
        <h2 className = "text-center"> List of Rockets</h2>
        <table className="table table-bordered table-striped"></table>
        <thead>
            <th> Rocket ID </th>
            <th> Rocket Name </th>
            <th> Cost per launch </th>
            <th> Success Rate % </th>
            <th> First Flight </th>
        </thead>
        <tbody>
            {
                rockets.map(
                    rocket =>
                    <tr key = {rocket.id}>
                        <td>{rocket.id} </td>
                        <td>{rocket.name} </td>
                        <td>{rocket.cost_per_launch} </td>
                        <td>{rocket.success_rate_pct} </td>
                        <td>{rocket.first_flight} </td>
                    </tr>
                )
            }
        </tbody>
    </div>
  )
}

export default RocketListComponent