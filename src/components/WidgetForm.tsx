import React, {useState} from 'react';
import { CloseButton } from "./index";
import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
  BUG:{
    title: "Problema",
    image:{
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    } ,
  },
  IDEA:{
    title: "Ideia",
    image:{
      source: ideaImageUrl,
      alt: 'imagem de uma lampada',
    } ,
  },
  OTHER:{
    title: "Outro",
    image:{
      source: thoughtImageUrl,
      alt: 'imagem de um balao de pensamento',
    } ,
  },
}

type FeedbackType = keyof typeof feedbackTypes

function WidgetForm() {
  const [feedbackTypeSelected, setFeedbackTypeSelected] = useState<FeedbackType | null>(null)


  return (
    <div className={"bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"}>
     <header>
       <span className={"text-xl leading-6"}>
         Deixe seu feedback
       </span>
       <CloseButton/>
     </header>

      {!feedbackTypeSelected ? (
        <div className={"flex py-8 gap-2 2-full"}>
          { Object.entries(feedbackTypes).map(([key , value]) => (
            <button
              key={key}
              className={"bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent focus:border-brand-500 hover:border-brand-500 focus:outline-none"}
              type={"button"}
              onClick={() => setFeedbackTypeSelected(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt}/>
              <span>{value.title}</span>
            </button>
          ))}
        </div>
        ) : (
        <p>hellows</p>
      )}

      <footer className={"text-xs text-neutral-400"}>
        Feito com ♥ pela <a className={"underline underline-offset-2"} href={"htttps://rocketseat.com.br"}>Rocketseat</a>
      </footer>
    </div>
  );
}

export default WidgetForm;