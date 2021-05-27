import React, { useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

interface ICreateChannel {
  title: string;
  info: object;
  workplaceId: number;
}

export const App = () => {
  const socket = io("http://localhost:4001", {
    autoConnect: false,
    auth: (cb: any) => {
      cb({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIwMjY4NDY5fQ.9VF7lU2n19q1dpiY9ZwlmuwiZ6fU7v2Nicae936duiY"
      })
    }
  });
  useEffect(() => {
    socket.connect();
  })
  socket.on('create_channel', (data: any) => {
    console.log(data);
  })

  socket.on('join_channel', (data: any) => {
    console.log(data);
  })

  socket.on('leave_channel', (data: any) => {
    console.log(data);
  })

  let list: ICreateChannel = {
    title: "",
    info: {
      topic: "",
      description: "",
    },
    workplaceId: 3,
  } 
  
  const createChannel = (event: any) => {
    event.preventDefault();
    list.title = event.target[0].value;
    list.info = {
      topic: event.target[1].value,
      description: event.target[2].value,
    }
    socket.emit('create_channel', list);
    return list;
  }

  const joinChannel = (event: any) => {
    event.preventDefault();
    socket.emit('join_channel', { channelId: 26 })
  }

  const leaveChannel = (event: any) => {
    event.preventDefault();
    socket.emit('leave_channel', { channelId: 26 })
  }
  
  return (
    <div className="App">
      <form onSubmit={createChannel}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="topic" />
        <input type="text" placeholder="description" />
        <button>Join</button>
      </form>
      <form onSubmit={joinChannel}>
        <button>Join Channel</button>
      </form>
      <form onSubmit={leaveChannel}>
        <button>Leave Channel</button>
      </form>
    </div>
  );
};
