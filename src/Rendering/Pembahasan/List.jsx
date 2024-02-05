import React from "react";

export default class List extends React.Component{
    state = {
        users:['Edi','Aldo', 'Wawan', 'Mahesa', 'Edo']
    }

    render() {
      return (
        <div>
          <ul>
            {
                this.state.users.map((user,i) => <li key={i}>{user}</li>)
            }
          </ul>
        </div>
      )
    }
}