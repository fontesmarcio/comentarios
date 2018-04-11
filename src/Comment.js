import React  from 'react'


const Comment = (props) =>
    <div className='card' style={{marginBottom:5}}>
        <p className='card-body' style={{fontSize:15}}>{props.comment.user.name} diz: {props.comment.comment}</p>
    </div>



export default Comment