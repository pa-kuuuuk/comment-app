import { render } from '@testing-library/react';

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(Props){
    super(Props);
    this.state ={

    }
  }
    render() {
        return (
        <div>
            <h1>회원관리</h1>
            <div id ="memberList">
              <table>
               <tr>
                 <th>이름</th><th>나이</th><th>전화번호</th><th>주소</th>
               </tr>
               <tr>
                 <td>홍길동</td><td>26</td><td>010-1234-5678</td><td>경기도 성남시</td>
               </tr>
              </table>
            </div>
            <div>
              <table id="insertFrom">
              <tr>
              <td>이름 :</td> <input></input>
              </tr><tr>
              <td>나이 :</td> <input></input>
              </tr><tr>
              <td>전화번호 :</td> <input></input>
              </tr><tr>
              <td>주소 :</td> <input></input>
              </tr>
              </table>
            </div>
        </div>


        );
    }
}

export default App;
