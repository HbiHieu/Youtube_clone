
export const handleActiveSpeechRecogition = ( handleWhenVoiceStart : Function , handleWhenVoiceEnd:Function ) => {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start() ;
    recognition.interimResults  = true ;
    recognition.addEventListener("result" , (e) => {
        console.log("voice start");
        handleWhenVoiceStart(e) ;
    }) ;
    recognition.addEventListener("end",()=> {
        console.log("voice end")
        handleWhenVoiceEnd()
        //recognition.stop() ;
    })
}