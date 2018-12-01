import React, { Component } from 'react';
import axios from 'axios';
import { StudentList } from './StudentList';
import { SingleStudent } from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      singleStudent: {},
    };
    this.setStudent = this.setStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  setStudent(studObj) {
    this.setState({ singleStudent: studObj });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <StudentList
            students={this.state.students}
            setStudent={this.setStudent}
          />
          {Object.keys(this.state.singleStudent).length !== 0 ? (
            <SingleStudent student={this.state.singleStudent} />
          ) : (
            ''
          )}
        </table>
      </div>
    );
  }
}
