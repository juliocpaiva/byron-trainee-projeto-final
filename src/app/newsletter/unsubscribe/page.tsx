import { NewsletterSection } from "@/components/newsletter-section"

export default function unsubscribe({ params }: { params: { id: string } }) {
  return(
  <section>
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-5"> 
 <p> className="text-4xl font-bold max-w-7xl" Você quer cancelar sua inscrição? 
  Sentiremos sua falta :(
 </p>
</div>

   <button> className="flex items-center justify-center bg-red-600 rounded shadow py-8 px-8 text-xl self-start" Cancelar Newsletter </button>
  </div>
  </section>
  
)

}

export default unsubscribe;