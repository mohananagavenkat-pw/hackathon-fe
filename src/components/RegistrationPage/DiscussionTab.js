/** @format */

import { Radio, Typography } from "@pwskills/rachnaui";

import React, { useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'


const DiscussionTab = () => {
  const [data, setData] = useState([
  ])
  const [loading, setLoading] = useState(false)
  const setLocalstorageData = async () => {
    const datalocal = await JSON.parse(localStorage.getItem('chat'))

    !!datalocal && setData(datalocal)
    setLoading(true)
  }
  useEffect(() => {
    setLocalstorageData()
  }, [])
  const customNoComment = () => (
    <div className='no-com'>Sheessh! Zero Comments posted here!</div>
  )
  const autoreply = (commentdata, i) => {
    let commentArr = data.concat(
      {
        ...commentdata,
        replies: [...commentdata.replies, {
          userId: '02b',
          comId: '017',
          fullName: 'PW Skills',
          userProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          text: 'We have raised your bug, testing team will contact you soon',
          avatarUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/21/full/20221021102906.jpg',
          // replies: []
        }]
      })

    setTimeout(() => {
      setData(commentArr)
    }, 2000);
    setTimeout(() => {
      setData(commentArr.map((item, i) =>
        (item.comId === commentdata.comId) ?
          {
            ...commentdata,
            replies: [...item.replies, {
              userId: '02b',
              comId: '018',
              fullName: 'PW Skills',
              userProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
              text: 'You won bounty token',
              avatarUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/21/full/20221021102906.jpg',
              // replies: []
            }]
          } : item))
    }, 4000);

  }
  return loading ? <CommentSection
    onSubmitAction={autoreply}
    currentData={(data) => localStorage.setItem('chat', JSON.stringify(data))}
    // onReplyAction={(data
    //   //   : {
    //   //   userId: string
    //   //   parentOfRepliedCommentId: string
    //   //   repliedToCommentId: string
    //   //   avatarUrl: string
    //   //   userProfile?: string
    //   //   fullName: string
    //   //   text: string
    //   // }
    // ) => ({ parentOfRepliedCommentId: '012', avatarUrl: "", text: "user", fullName: "Mukesh Bitlani" })}
    currentUser={{
      currentUserId: '01a',
      currentUserImg:
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      currentUserProfile:
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      currentUserFullName: 'Rahul kumar'
    }}
    advancedInput={true}
    hrStyle={{ border: '0.5px solid #ff0072' }}
    commentData={data}
    logIn={{
      loginLink: 'http://localhost:3001/',
      signupLink: 'http://localhost:3001/'
    }}
    customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
    inputStyle={{ border: '1px solid rgb(208 208 208)' }}
    formStyle={{ backgroundColor: 'white' }}
    submitBtnStyle={{
      border: '1px solid black',
      backgroundColor: 'black',
      padding: '7px 15px'
    }}
    cancelBtnStyle={{
      border: '1px solid gray',
      backgroundColor: 'gray',
      color: 'white',
      padding: '7px 15px'
    }}
    customNoComment={() => customNoComment()}
    replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
  /> : <div>
  </div >
};

export default DiscussionTab;



