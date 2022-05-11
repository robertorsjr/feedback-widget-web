import React, {useState} from 'react';
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import {FeedbackType} from "./feedbackOptions";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

function WidgetForm() {
  const [feedbackTypeSelected, setFeedbackTypeSelected] = useState<FeedbackType | null>(null)

  function handleResetFeedBack(){
    setFeedbackTypeSelected(null)
  }

  return (
    <div className={"bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"}>

      {!feedbackTypeSelected ? (
          <FeedbackTypeStep handleSelectFeedbackType={setFeedbackTypeSelected}/>
        ) : (
          <FeedbackContentStep feedbackType={feedbackTypeSelected} onResetFeedback={handleResetFeedBack}/>
      )}

      <footer className={"text-xs text-neutral-400"}>
        Feito com ♥ pela <a className={"underline underline-offset-2"} href={"htttps://rocketseat.com.br"}>Rocketseat</a>
      </footer>
    </div>
  );
}

export default WidgetForm;