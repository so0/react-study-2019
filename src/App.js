import React, {Component} from 'react';

class App extends Component {
  state = {
    username: '',
    job: '',
    list: []
  }

  id = 1;

  // usernameInput = null;
  usernameInput = React.createRef();

  handleChange = (e) => {
    // console.log(e.target);
    // const {name, value} = e.target;
    // const update = {};
    // update[name] = value;
    // this.setState(update);
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleInsert = (e) => {
    e.preventDefault();
    const {username, job, list} = this.state;

    this.setState({
      // 불변성 유지를 위해 push 쓰지 않는다.
      list: list.concat({
        // username: username,
        // job: job  // key value가 같으면 생갹 가능.
        username,
        job,
        id: this.id
      }),
      username: '', // 초기화
      job: ''
    });
    this.usernameInput.current.focus();
    this.id++;
  }

  // handleKeyPress = e => {
  //   // console.log(e.key);
  //   if(e.key === 'Enter') {
  //     this.handleInsert();
  //   }
  // }

  handleRemove = id => {
    const {list} = this.state;

    this.setState({
      list: list.filter(item => item.id !== id)
    });
  }

  render() {
    const {list, username, job} = this.state;
    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input name="username" value={username} onChange={this.handleChange} ref={this.usernameInput}/>
          <input name="job" value={job} onChange={this.handleChange}/>
          <button>INSERT</button>
        </form>
        <ul>
          {list.map(item => {
            return (
              // index는 고유하지 않음
              <li key={item.id}>{item.username} = {item.job}
                <button onClick={() => this.handleRemove(item.id)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // render() {
  //   // 비구조화 할당
  //   const {value} = this.state;
  //   return (
  //     <input 
  //       value={value}
  //       onChange={this.handleChange}
  //     />
  //   )
  // }
}

export default App;


// rcc , rsc