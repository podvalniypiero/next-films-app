import { FilmDetails } from "@/components/FilmDetails/FilmDetails";

export default function Home() {
  return (
    <div>
      <header/>
     <FilmDetails 
     title={FilmDetails.title}
     genre = {FilmDetails.genre}
     seasonsCount = {FilmDetails.seasonsCount}
      />
     <Reviews reviews = {FilmDetails.reviews}/>
     <Recommendations/>
     <footer/>
     </div>
    
  );
}
