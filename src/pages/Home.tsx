import _ from 'lodash';
import React, { Component, ReactNode } from 'react';

export default class Home extends Component<any, any> {
  getData = () =>
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json(),
    );
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
    };
  }
  total_a = (k: string) =>
    _.chain(this.state.data).map(k).filter(Boolean).map(Number).sum().value();

  componentDidMount() {
    const that = this;

    this.getData().then(resp => {
      debugger;
      that.setState({ data: resp });
    });
  }
  phoneChange(e: any, id: number, key: string) {
    debugger;
    this.state.data[id][key] = e.target.value;
    this.setState({ data: this.state.data });
  }
  show() {
    console.log(this.state.data);
  }
  render(): ReactNode {
    return (
      <div>
        <h1> Home - component {this.props.name} </h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th> Id</th>
              <th> Name</th>
              <th> Username</th>
              <th> Email</th>
              <th>Phone</th>
              <th>A</th>
              <th>B</th>
              <th>ANS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d: any, i: number) => {
              return (
                <tr>
                  <td> {d.id}</td>
                  <td> {d.name}</td>
                  <td> {d.username}</td>
                  <td> {d.email}</td>
                  <td>
                    <input
                      type="text"
                      value={d.phone}
                      onChange={e => this.phoneChange(e, i, 'phone')}
                    />
                  </td>
                  <td>
                    <input
                      value={d.a}
                      type="number"
                      onChange={e => this.phoneChange(e, i, 'a')}
                    />
                  </td>
                  <td>
                    <input
                      value={d.b}
                      type="number"
                      onChange={e => this.phoneChange(e, i, 'b')}
                    />
                  </td>
                  <td>{(d.a * d.b) | 0}</td>
                </tr>
              );
            })}
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>Total</td>
              <td>{this.total_a('a')}</td>
              <td>{this.total_a('b')}</td>
              <td> final </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-sm-12 text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.show()}
            >
              {' '}
              show{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
