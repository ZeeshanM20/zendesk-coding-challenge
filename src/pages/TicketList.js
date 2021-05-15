import React, { useEffect } from "react";
import useRequest from "../hooks/useRequest";

const TicketList = () => {
  const { setApiUrl, data, isLoading, error } = useRequest();

  useEffect(() => {
    setApiUrl(
      "https://zeeshan-mujtaba.zendesk.com/api/v2/tickets.json?page[size]=25"
    );
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        data &&
        data.tickets.map((ticket) => (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p>ID: {ticket.id}</p>
            <p>Subject: {ticket.subject}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Requester ID: {ticket.requester_id}</p>
            <p>Created at: {ticket.created_at}</p>
          </div>
        ))
      )}
      <div
        style={{
          display: "flex",
          padding: "20px 0",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{ padding: "10px", width: "6rem" }}
          onClick={() => {
            setApiUrl(data.links.prev);
          }}
        >
          Previous
        </button>
        <button
          style={{ padding: "10px", width: "6rem" }}
          onClick={() => {
            setApiUrl(data.links.next);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketList;
