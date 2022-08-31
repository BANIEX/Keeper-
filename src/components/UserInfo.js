import React from 'react'

export const UserInfo = (props) => {
  return (
    <div>
       <div style={{ margin: "20px" }}>
          <img src={props.large} alt="" />
          <h2>
            {props.first} {props.last}
          </h2>
          <h4>{props.country}</h4>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
        </div>
  )
}
