import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    let results = await axios.get('/student');
    let data = results.data;
    this.setState({
      students: data,
    });
  }
  render() {
    return (
      <div>
        <h3>Students</h3>
        {this.state.students.map(student => {
          return (
            <div key={student.id}>
              {student.firstName} {student.lastName}{' '}
            </div>
          );
        })}
      </div>
    );
  }
}
