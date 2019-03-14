import React from 'react'

export default (AuthPage, isAuthed) =>  (MainApp) => {
    if(isAuthed){
        return <MainApp/>
    }else{
        return <AuthPage/>
    }
}


