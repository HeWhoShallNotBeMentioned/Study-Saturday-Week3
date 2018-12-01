import React from 'react';

export class StudentList extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        {this.props.students.map(student => {
          return (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td onClick={() => this.props.setStudent(student)}>Details</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
