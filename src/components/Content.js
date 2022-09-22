import React from 'react'

export default function Content(props) {
  return (
    <div>
      {
      props.content.map(data => <p> {data} </p>)
      }
    </div>
  )
}
