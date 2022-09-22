import React from 'react'

export default function Sidebar(props) {
  return (
    <div >
      {props.lists.map(list=>
        <ul>
          <li className='overflow-y-scroll'>{list}</li>
        </ul>
      )}

    </div>
  )
}
