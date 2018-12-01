import React from 'react';
import { StudentList } from './StudentList';

export class SingleStudent extends React.Component {
  render() {
    const testTotal = this.props.student.tests.reduce((accum, test) => {
      return accum + test.grade;
    }, 0);

    const testAvg = testTotal / this.props.student.tests.length;
    console.log('testTotal---------', testTotal);
    console.log('singleStudent Props', this.props.student.tests);
    return (
      <div>
        <h3>{this.props.student.fullName}</h3>
        <h3>Average Grade: {Math.round(testAvg)}</h3>
        <table>
          <tbody>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
            {this.props.student.tests.map(test => {
              return (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
