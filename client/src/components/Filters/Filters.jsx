import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { handleCategories, handleBrand, handleLicense } from '../../redux/actions';
import styles from '../Filter/Filter.module.css'


function Filter(){
    const dispatch = useDispatch();

    function handleCategories(e){
        e.preventDefault();
        dispatch(filterCategory(e.target.value))
        filterCategory(e.target.value)
    }

    function handleBrand(e){
        e.preventDefault()
        dispatch(filterBrand(e.target.value))
        filterBrand(e.target.value)
    }
    
    function handleLicense(e){
        e.preventDefault()
        dispatch(filterLicense(e.target.value))
        filterLicense(e.target.value)
    }


return (
    <div>
        <select onChange = {(e) => handleCategories(e)}>
            <option value="none"> Categories </option>
            <option value="ALL"> All </option>
            <option value="Animation"> Animation </option>
            <option value="Funko"> Funko </option>
            <option value="Funko Games"> Funko Games </option>
            <option value="Heroes"> Heroes </option>
            <option value="Movies"> Movies </option>
            <option value="Music"> Music </option>
            <option value="Sports"> Sports </option>
            <option value="Television"> Television </option>
            <option value="Video Games"> Video Games </option>
            <option value="Other"> Other </option>
        </select>

        <select onChange = {(e) => handleBrand(e)}>
            <option value="none"> Brand </option>
            <option value="ALL"> All </option>
            <option value="Action Figures"> Action Figures </option>
            <option value="Funko Soda"> Funko Soda </option>
            <option value="Funkoverse"> Funkoverse </option>
            <option value="Mini Moments"> Mini Moments </option>
            <option value="Mystery Minis"> Mystery Minis </option>
            <option value="Paka Paka"> Paka Paka </option>
            <option value="Pin"> Pin </option>
            <option value="Pint Size Heroes"> Pint Size Heroes </option>
            <option value="Pop!"> Pop! </option>
            <option value="Pop! Branded"> Pop! Branded </option>
            <option value="Pop! Candy"> Pop! Candy </option>
            <option value="Pop! Keychain"> Pop! Keychain </option>
            <option value="Pop! Soda"> Pop! Soda </option>
            <option value="Plush"> Plush </option>
            <option value="Signature Games"> Signature Games </option>
            <option value="Sup Deluxe"> Sup Deluxe </option>
            <option value="Vinyl GOLD"> Vinyl GOLD </option>
            <option value="VYNL"> VYNL </option>
        </select>
        

    
        <select onChange = {(e) => handleLicense(e)}>
            <option value="none"> License </option>
            <option value="ALL"> All </option>
            <option value="A Christmas Story"> A Christmas Story </option>
            <option value="Alice in Wonderland"> Alice in Wonderland </option>
            <option value="American Psycho"> American Psycho </option>
            <option value="Apex Legends"> Apex Legends </option>
            <option value="Back to the Future"> Back to the Future </option>
            <option value="Beauty and the Beast"> Beauty and the Beast </option>
            <option value="Birds of Prey"> Birds of Prey </option>
            <option value="Black Clover"> Black Clover </option>
            <option value="Bloodborne"> Bloodborne </option>
            <option value="Boruto Naruto Next Generations"> Boruto Naruto Next Generations </option>
            <option value="Britney Spears"> Britney Spears </option>
            <option value="Captain America"> Captain America </option>
            <option value="Celebrities"> Celebrities </option>
            <option value="Chris Stapleton"> Chris Stapleton </option>
            <option value="Crash Bandicoot"> Crash Bandicoot </option>
            <option value="Critical Role"> Critical Role </option>
            <option value="Cypress Hill"> Cypress Hill </option>
            <option value="Darkwing Duck"> Darkwing Duck </option>
            <option value="Dark Crystal"> Dark Crystal </option>
            <option value="DC Comics"> DC Comics </option>
            <option value="DC Comics Bomshells"> DC Comics Bomshells </option>
            <option value="Deadpool"> Deadpool </option>
            <option value="Disney Parks"> Disney Parks </option>
            <option value="Disney Princess"> Disney Princess </option>
            <option value="Dr. Seuss"> Dr. Seuss </option>
            <option value="Doctor Strange Multiverse of Madness"> Doctor Strange Multiverse of Madness </option>
            <option value="Dragonball Z"> Dragonball Z </option>
            <option value="DuckTales"> DuckTales </option>
            <option value="Elf"> Elf </option>
            <option value="ESPN"> ESPN </option>
            <option value="Fairy Tale Final Season"> Fairy Tale Final Season </option>
            <option value="Fantastic Beasts"> Fantastic Beasts </option>
            <option value="Fast and Furious"> Fast and Furious </option>
            <option value="Five Nights at Freddy's"> Five Nights at Freddy's </option>
            <option value="Five Finger Death Punch"> Five Finger Death Punch </option>
            <option value="Fortnite"> Fortnite </option>
            <option value="Freddy Funko"> Freddy Funko </option>
            <option value="Frozen"> Frozen </option>
            <option value="Grumpy Cat"> Grumpy Cat </option>
            <option value="Guns N Roses"> Guns N Roses </option>
            <option value="Hamilton"> Hamilton </option>
            <option value="Hanna Barbera"> Hanna Barbera </option>
            <option value="Hannibal Lecter"> Hannibal Lecter </option>
            <option value="Harry Potter"> Harry Potter </option>
            <option value="Home Alone"> Home Alone </option>
            <option value="Horizon Zero Dawn"> Horizon Zero Dawn </option>
            <option value="Invader Zim"> Invader Zim </option>
            <option value="Iron Maiden"> Iron Maiden </option>
            <option value="Jabbawockeez"> Jabbawockeez </option>
            <option value="Jimi Hendrix"> Jimi Hendrix </option>
            <option value="Jurassic Park"> Jurassic Park </option>
            <option value="Justice League"> Justice League </option>
            <option value="Legally Blonde"> Legally Blonde </option>
            <option value="Little Mermaid"> Little Mermaid </option>
            <option value="Marvel"> Marvel </option>
            <option value="Marvel Comics"> Marvel Comics </option>
            <option value="Mary Poppins Returns"> Mary Poppins Returns </option>
            <option value="Mech Strike Monster Hunters"> Mech Strike Monster Hunters </option>
            <option value="MediEvil"> MediEvil </option>
            <option value="Mickey Mouse"> Mickey Mouse </option>
            <option value="My Hero Academia"> My Hero Academia </option>
            <option value="MLB"> MLB </option>
            <option value="NASCAR"> NASCAR </option>
            <option value="Naruto"> Naruto </option>
            <option value="NBA"> NBA </option>
            <option value="NFL"> NFL </option>
            <option value="Overwatch"> Overwatch </option>
            <option value="Parks and Recreation"> Parks and Recreation </option>
            <option value="Peter Pan"> Peter Pan </option>
            <option value="Pokemon"> Pokemon </option>
            <option value="Post Malone"> Post Malone </option>
            <option value="Rick and Morty"> Rick and Morty </option>
            <option value="Robocop"> Robocop </option>
            <option value="Samurai Jack"> Samurai Jack </option>
            <option value="Seinfeld"> Seinfeld </option>
            <option value="Sly Cooper"> Sly Cooper </option>
            <option value="Space Jam a New Legacy"> Space Jam a New Legacy </option>
            <option value="Spiderman Movies"> Spiderman Movies </option>
            <option value="Star Wars"> Star Wars </option>
            <option value="Sword Art Online"> Sword Art Online </option>
            <option value="Teen Titans Go!"> Teen Titans Go! </option>
            <option value="The Nightmare Before Christmas"> The Nightmare Before Christmas </option>
            <option value="The Walking Dead"> The Walking Dead </option>
            <option value="The Warriors"> The Warriors </option>
            <option value="The Witcher"> The Witcher </option>
            <option value="Tiny Tina's Wonderland"> Tiny Tina's Wonderland </option>
            <option value="Tokyo Ghoul"> Tokyo Ghoul </option>
            <option value="Toy Story"> Toy Story </option>
            <option value="Trick r Treat"> Trick r Treat </option>
            <option value="Turning Red"> Turning Red </option>
            <option value="Umbrella Academy"> Umbrella Academy </option>
            <option value="Villainous Valentines"> Villainous Valentines </option>
            <option value="Warner Brothers Animation"> Warner Brothers Animation </option>
            <option value="WWE"> WWE </option>
            <option value="X-Men"> X-Men </option>
            <option value="Zappa"> Zappa </option>            
        </select>
    </div>
)
}



        


  