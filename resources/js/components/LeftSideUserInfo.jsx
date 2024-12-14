import React from 'react'
import example from "../assets/img/example-image.jpg"

export default function LeftSideUserInfo() {
  return (
    <div className='LeftSideUserInfo'>
        <div>
            <div className='common'>
                <img alt='Фото пользователя' src={example} />
                <div><p>Name Surname</p><p>@dokspo</p></div>
            </div>
            <div className='statistics'>
                <div><h2>27</h2><p>Друзей</p></div>
                <div><h2>12</h2><p>Подписчиков</p></div>
                <div><h2>8</h2><p>Чатов</p></div>
            </div>
        </div>
    </div>
  )
}
