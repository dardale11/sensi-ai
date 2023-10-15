import { format } from 'date-fns';
import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { Socket, io } from 'socket.io-client';
import './Graph.css'
import Alert from '../../components/alert/Alert';
import { MAX_VALID_PULSE } from '../../constants/pulseValues';
import { DataElement } from '../../interfaces/dataElement';


const Graph = () => {
  useEffect(() => {

    const socket = io(process.env.REACT_APP_SERVER_URL ?? 'http://localhost:8000');

    startListeningToDevice(socket);
    return () => {
      socket.close();
    }
  }, [])

  // ***DEV DEBUGGING***
  // const [allData, setAllData] = useState<DataElement[]>([]);
  const [displayedData, setDisplayedData] = useState<DataElement[]>([]);
  const [showAlert, setAlert] = useState(false)

  // ***DEV DEBUGGING***
  // useEffect(() => {
  //   console.log('Updated allData:', allData);
  //   console.log('Updated displayedData:', displayedData);
  // }, [allData, displayedData]);

  const getCurrentTime = () => {
    const date = new Date();
    return format(date, 'HH:mm:ss');
  }

  const startListeningToDevice = (socket: Socket) => {
    socket.on('newValue', (pulse) => {

      if (pulse > MAX_VALID_PULSE) {
        onPulseHigh();
      }

      const time = getCurrentTime();
      const elm = { time: time, pulse: pulse };
      // ***DEV DEBUGGING***
      // setAllData((prevAllData) => [...prevAllData, elm]);
      setDisplayedData((prevDisplayedData) => prevDisplayedData.length === 8 ? [...prevDisplayedData.slice(-7), elm] : [...prevDisplayedData, elm]);
    })
  }

  const onPulseHigh = () => {
    setAlert(true);
  }

  return (
    <div className='graph-container'>
      <h1 className='graph-title'>Pulse Monitor</h1>
      <LineChart
        width={window.innerWidth - 50}
        height={300}
        data={displayedData}
        margin={{
          top: 25,
          right: 25,
          left: 50,
        }}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pulse" stroke="#FF0000" animationEasing='linear' isAnimationActive={false} />
      </LineChart>
      {showAlert && <Alert cancel={() => setAlert(false)} />}
    </div>
  )
}

export default Graph