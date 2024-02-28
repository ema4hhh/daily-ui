import './App.css'
import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { faker } from '@faker-js/faker';

const data = {
  totalListeners: [
    {
      name: 'Jan',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Feb',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Mar',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Apr',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'May',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Jun',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Jul',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Aug',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Sep',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Oct',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Nov',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    },
    {
      name: 'Dec',
      listeners: faker.number.int({ min: 5000, max: 100000 })
    }
  ],
  singerListeners: [
    {
      name: faker.person.firstName(),
      listeners: faker.number.int({ min: 10, max: 500 }),
      songListeners: faker.number.int({ min: 1, max: 200 })
    },
    {
      name: faker.person.firstName(),
      listeners: faker.number.int({ min: 10, max: 500 }),
      songListeners: faker.number.int({ min: 1, max: 200 })
    },
    {
      name: faker.person.firstName(),
      listeners: faker.number.int({ min: 10, max: 500 }),
      songListeners: faker.number.int({ min: 1, max: 200 })
    },
    {
      name: faker.person.firstName(),
      listeners: faker.number.int({ min: 10, max: 500 }),
      songListeners: faker.number.int({ min: 1, max: 200 })
    },
    {
      name: faker.person.firstName(),
      listeners: faker.number.int({ min: 10, max: 500 }),
      songListeners: faker.number.int({ min: 1, max: 200 })
    },
  ]
};

function App() {

  return (
    <>
      <main>
        <h1>Listeners per month</h1>
        <div className='chars'>
          <div className='year-listeners-container'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={data.totalListeners}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='listeners' stroke='#8884d8' />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className='singer-listeners-container'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={data.singerListeners}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='listeners' fill="#B8B5E8" />
                <Bar name='Most Famous Song Listeners' dataKey='songListeners' fill='#040A10' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
