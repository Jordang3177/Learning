import React, {Component} from 'react';
import axios from './axios-prize';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: ['yh845017304', 'jiyifan2011', 'zhao85061219', 'zxy28369Luora', 'Glory0119', 
               'hszwgl', 'B15938400752', 'BenPaoBa-LISHU', 'lidudi0828', 'wxid_uqnawlktee3y22', 
               'fqz020517', ' YuanBao201801', '19250630', 'wxid_zrrlvnssqvq521', 'guchh123456', 
               'YE1187569975', 'wxid_sim8c7ezrz8o22', 'yuhujia', 'lb995200', '13103543731', 
               'ZLP-Jamie', 'JWLH2015', '13819239', 'djw898600', 'syd15033134878', 
               '98192706', 'Yei_11', 'luomobaobao', 'ailiguoqing', 'aqh020214', 
               'yuoh12', 'wxid_e5p8rpaxv0k022', 'nanjiguang218', 'LNX283083649', 'hh777777725', 
               'zxqjx3b01rvp21', 'aaa-565', 'HY13821513664', 'blmw5218', 'zhushiqi17', 
               'zxh2554982809', 'sc438675', 'QQ1102436629', 'terryghj', 'w1242915498', 
               'w15574320824', 'hh554683808', '1229473026', 'yxt29934', 'Nova-MsXu', 
               'zjy15131175632', 'sdayssy', 'wxid_wz3h168g6l0321', 'DADADAswi', 'hjlkjdsfhgj', 
               'blf13403517445', 'LISHU19960827', '13644437008', '2397326529', 'ds3364742', 
               'tll421', 'wxid_kyjk0iuuene722', 'ty13861556877', 'tqynvn', 'Baby---han', 
               'weimo_shiguang', 'wxid_bhcxeqt4zaf322', 'wxid_ks0etnpcsy8k22', 'jinjinercc', 'ye202563', 
               'wxid_i6er2ej4621q22', 'yaoyilin-11', 'xst15270074723', 'JangW97', 'lrl19911119', 
               'wj_iphone13227329895', 'c352156271', 'lan085021', 'LZ204709606', 'T1078668542', 
               'wxid_pc13i0fd93qg22', 'wjh197358', 'liyiteng-', 'caihong-1425', 'wxid_99qy2s8k462s22', 
               'lan520211'], 
      first_winner: '',
      second_winner: '',
      third_winner: '',
      fourth_winner: '',
      fifth_winner: '',
      sixth_winner: '',
      first_number: -1,
      second_number: -1,
      third_number: -1,
      fourth_number: -1,
      fifth_number: -1,
      sixth_number: -1}
  }

  
handleFirstClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.second_number || 
         rand === this.state.third_number || 
         rand === this.state.fourth_number || 
         rand === this.state.fifth_number || 
         rand === this.state.sixth_number) {
      console.log('here');
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ first_number: rand });
  this.setState({ first_winner: this.state.people[rand]});
};

handleSecondClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.first_number || 
         rand === this.state.third_number || 
         rand === this.state.fourth_number || 
         rand === this.state.fifth_number || 
         rand === this.state.sixth_number) {
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ second_number: rand });
  this.setState({ second_winner: this.state.people[rand]});
};

handleThirdClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.second_number || 
         rand === this.state.first_number || 
         rand === this.state.fourth_number || 
         rand === this.state.fifth_number || 
         rand === this.state.sixth_number) {
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ third_number: rand });
  this.setState({ third_winner: this.state.people[rand]});
};

handleFourthClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.second_number || 
         rand === this.state.third_number || 
         rand === this.state.first_number || 
         rand === this.state.fifth_number || 
         rand === this.state.sixth_number) {
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ fourth_number: rand });
  this.setState({ fourth_winner: this.state.people[rand]});
};

handleFifthClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.second_number || 
         rand === this.state.third_number || 
         rand === this.state.fourth_number || 
         rand === this.state.first_number || 
         rand === this.state.sixth_number) {
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ fifth_number: rand });
  this.setState({ fifth_winner: this.state.people[rand]});
};

handleSixthClick() {
  const min = 0
  const max = this.state.people.length;
  var number = min + Math.random() * (max - min);
  var rand = Math.floor(number);
  while (rand === this.state.second_number || 
         rand === this.state.third_number || 
         rand === this.state.fourth_number || 
         rand === this.state.fifth_number || 
         rand === this.state.first_number) {
      number = min + Math.random() * (max - min);
      rand = Math.floor(number);
  };
  this.setState({ sixth_number: rand });
  this.setState({ sixth_winner: this.state.people[rand]});
};

  render() {
  return (
    <div className="App">
      <button className="Button" onClick={this.handleFirstClick.bind(this)}>Draw the First Prize Winner</button>
        <div>The First Prize Winner is: {this.state.first_winner}</div>
      <br></br>
      <button className="Button" onClick={this.handleSecondClick.bind(this)}>Draw the Second Prize Winner</button>
        <div>The Second Prize Winner is: {this.state.second_winner}</div>
      <br></br>
      <button className="Button" onClick={this.handleThirdClick.bind(this)}>Draw the Third Prize Winner</button>
        <div>The Third Prize Winner is: {this.state.third_winner}</div>
      <br></br>
      <button className="Button" onClick={this.handleFourthClick.bind(this)}>Draw the Fourth Prize Winner</button>
        <div>The Fourth Prize Winner is: {this.state.fourth_winner}</div>
      <br></br>
      <button className="Button" onClick={this.handleFifthClick.bind(this)}>Draw the Fifth Prize Winner</button>
        <div>The Fifth Prize Winner is: {this.state.fifth_winner}</div>
      <br></br>
      <button className="Button" onClick={this.handleSixthClick.bind(this)}>Draw the Sixth Prize Winner</button>
        <div>The Sixth Prize Winner is: {this.state.sixth_winner}</div>
    </div>
    
  );
  }
}

export default App;
