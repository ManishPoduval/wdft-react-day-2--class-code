import React, { Component } from 'react'
import studentsJson from '../students.json'
import StudentDetails from './StudentDetails'

class Students extends Component {

    state = {
        students: studentsJson.slice(0,5)
    }

    handleSort = () => {
        console.log('Sort works')
        //always clone the arr before mutating it
        let clonedStudents = JSON.parse(JSON.stringify(this.state.students))

        clonedStudents.sort((first, second) => {
            if (first.name > second.name) {
                return 1
            }
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })

        //always make sure you update the state so that it can re-render
        this.setState({
            students: clonedStudents
        })
    }

    handleAdd = () => {
        let randomIndex = Math.floor(Math.random() * studentsJson.length )
        let randomStudent = studentsJson[randomIndex]

        this.setState({
            students: [...this.state.students, randomStudent]
        })

    }

    handleDelete = (studentId) =>{
        console.log('Delete')

        // filter all students that dont match that id
        let filteredStudents = this.state.students.filter((singleStudent) => {
            return singleStudent.id !== studentId
        })

        // make sure you update the state with the filtered students
        this.setState({
            students: filteredStudents
        })
    }

    render() {
        return (
            <div>
                <h1>Students</h1>
                <button onClick={this.handleSort} >Sort</button>
                <button onClick={this.handleAdd} >Add</button>
                {
                    // always use a map and return a JSX element
                    this.state.students.map((singleStudent, index) => {
                        //  always pass the key prop  for React to uniquely identify elements rendered in a loop
                        return <StudentDetails 
                            key={index}
                            name={singleStudent.name}
                            city={singleStudent.city}
                            id={singleStudent.id}
                            onDelete={this.handleDelete}
                        />
                    })
                }
            </div>
        )
    }
}


export default Students