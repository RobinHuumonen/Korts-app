import React from 'react'
import '../../index.css'
import collections from '../Home/resources/collections.svg'

const MainContainer = () => {
  return (
    <div className="container-3">
      <article className="container-4">
        <p>
          Korts is an application for managing flash cards. Users can create stacks by topics and add cards to them. To ensure card is learned, user is encouraged to vote plus every time he gets car's answer immediately right, and in every other case vote minus. This behaviour is enforced by the fact that only way to delete card is to vote plus three times. Users can switch between card view and stack list view by clicking the following navigation icon.
          <img src={collections} alt="Icon not available"></img>
        </p>
      </article>
      </div>

  )
}

export default MainContainer