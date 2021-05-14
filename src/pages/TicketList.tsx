import React, { useEffect, useState } from 'react'
import useRequest from '../hooks/useRequest'

interface Ticket {
  id: string

}

interface Result {
  tickets: Ticket[]
  links: {
    prev: string
    next: string
  }
}

const TicketList = () => {
  const [page, setPage] = useState(1)

  const [getData, data, isLoading, error] = useRequest()

  useEffect(() => {
    getData('https://zeeshan-mujtaba.zendesk.com/api/v2/tickets.json?page[size]=25')
  }, [])


  return <div>
    {isLoading ? <p>LOADINGGGGGG</p> : data?.tickets.map((ticket: { id: string }) => <p>{ticket.id}</p>)}

    <button onClick={() => { getData(data.links.prev) }}>Previous</button>
    <button onClick={() => { getData(data.links.next) }}>Next</button>
  </div>
}


export default TicketList