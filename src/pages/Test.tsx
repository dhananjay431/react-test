import { Component, ReactNode } from 'react';
import * as _ from 'lodash';

export default class Test extends Component<any, any> {
  rn = (min: number, max: number): number =>
    Math.floor(Math.random() * max) + min;

  numArr = (min: number, max: number, num: number) =>
    Array(20)
      .fill(0)
      .map(d => this.rn(min, max));
  constructor(props: any) {
    super(props);
    this.state = {
      data: this.numArr(20, 200, 20),
    };
  }

  show(a: any, i: number) {
    console.log('aaaa=>', a);
    a = a * a;
    this.state.data[i] = a;

    this.setState({ data: this.state.data });
  }

  render(): ReactNode {
    return (
      <div>
        {this.state.data.map((d: any, i: number) => (
          <span onClick={e => this.show(d, i)} className="a">
            <br />
            {d}
          </span>
        ))}
      </div>
    );
  }
}
