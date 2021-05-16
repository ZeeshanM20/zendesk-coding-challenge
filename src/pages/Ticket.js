import React, { useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { Link } from "react-router-dom";

const Ticket = () => {
  const { setApiUrl, data, isLoading } = useRequest();

  useEffect(() => {
    setApiUrl(
      `https://zeeshan-mujtaba.zendesk.com/api/v2/${window.location.pathname}`
    );
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        data && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p style={{ fontWeight: "bold" }}>ID: {data.ticket.id}</p>
            <p>Subject: {data.ticket.subject}</p>
            <p>Priority: {data.ticket.priority}</p>
            <p>Requester ID: {data.ticket.requester_id}</p>
            <p>Created at: {data.ticket.created_at}</p>
            <p>Type: {data.ticket.type}</p>
            <p>Description: {data.ticket.description}</p>
            <p>Assignee ID: {data.ticket.assignee_id}</p>
            <p>Organization ID: {data.ticket.organization_id}</p>
            <p>Tags: {data.ticket.tags}</p>
          </div>
        )
      )}
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
